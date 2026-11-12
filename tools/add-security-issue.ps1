[CmdletBinding()]
param([string]$Url, [string]$Summary, [string]$Date)
$ErrorActionPreference = 'Stop'
if (!$Date) {
    $today = [TimeZoneInfo]::ConvertTimeBySystemTimeZoneId([DateTimeOffset]::UtcNow, 'Korea Standard Time').ToString('yyyy-MM-dd')
    $Date = Read-Host "기록 날짜 (Enter를 누르면 $today)"
    if (!$Date) { $Date = $today }
}
$parsedDate = [datetime]::MinValue
if (![datetime]::TryParseExact($Date, 'yyyy-MM-dd', [Globalization.CultureInfo]::InvariantCulture, [Globalization.DateTimeStyles]::None, [ref]$parsedDate)) {
    throw '날짜는 yyyy-MM-dd 형식으로 입력해주세요.'
}
if (!$Url) { $Url = Read-Host 'X 게시물 링크' }
$uri = $null
if (![uri]::TryCreate($Url.Trim(), [UriKind]::Absolute, [ref]$uri) -or $uri.Scheme -ne 'https' -or $uri.Host -notin @('x.com', 'www.x.com', 'twitter.com', 'www.twitter.com', 'mobile.twitter.com') -or $uri.AbsolutePath -notmatch '^/[^/]+/status/\d+/?$') {
    throw 'https://x.com/계정/status/숫자 형태의 게시물 링크를 입력해주세요.'
}
$Url = 'https://x.com' + $uri.AbsolutePath.TrimEnd('/')
if (!$Summary) { $Summary = Read-Host '한 줄 설명' }
$Summary = ($Summary -replace '\s+', ' ').Trim()
if (!$Summary) { throw '한 줄 설명을 입력해주세요.' }
$dataPath = Join-Path (Split-Path -Parent $PSScriptRoot) '_data/security_issues.json'
# Lock the data file while checking duplicates and saving a new entry.
$stream = [IO.File]::Open($dataPath, [IO.FileMode]::Open, [IO.FileAccess]::ReadWrite, [IO.FileShare]::None)
try {
    $reader = [IO.StreamReader]::new($stream, [Text.Encoding]::UTF8, $true, 1024, $true)
    $json = $reader.ReadToEnd()
    $reader.Dispose()
    $entries = @()
    foreach ($entry in (ConvertFrom-Json -InputObject $json)) { $entries += $entry }
    if ($entries | Where-Object { $_.url -eq $Url }) { throw '이미 기록한 링크입니다. 기존 항목을 수정하려면 _data/security_issues.json을 열어주세요.' }
    $entries += [pscustomobject]@{ date = $Date; url = $Url; summary = $Summary }
    $result = ConvertTo-Json -InputObject @($entries | Sort-Object date -Descending) -Depth 4
    $bytes = [Text.UTF8Encoding]::new($false).GetBytes($result + [Environment]::NewLine)
    $stream.Position = 0
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.SetLength($bytes.Length)
    $stream.Flush()
} finally {
    $stream.Dispose()
}
Write-Host '저장했습니다. GitHub Desktop에서 Commit to main → Push origin을 누르면 블로그에 반영됩니다.'
