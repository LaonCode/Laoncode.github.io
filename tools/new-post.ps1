[CmdletBinding()]
param(
    [string]$Title,
    [string]$Slug,
    [ValidateSet('개발','CTF/Wargame','Bug Bounty','블로그/기술문서','논문/컨퍼런스','공모전/자격증')]
    [string]$Category,
    [string[]]$Tags = @()
)
$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($Title)) { $Title = Read-Host '글 제목' }
if ([string]::IsNullOrWhiteSpace($Title)) { throw '제목을 입력해주세요.' }
if ([string]::IsNullOrWhiteSpace($Slug)) { $Slug = Read-Host '주소에 쓸 영문 이름 (예: python-study-01)' }
if ($Slug -notmatch '^[a-z0-9]+(?:-[a-z0-9]+)*$') { throw '주소는 영문 소문자, 숫자, 하이픈으로 입력해주세요.' }
$categories = @('개발','CTF/Wargame','Bug Bounty','블로그/기술문서','논문/컨퍼런스','공모전/자격증')
if (!$Category) {
    for ($i=0; $i -lt $categories.Count; $i++) { Write-Host "$($i+1). $($categories[$i])" }
    $choice = Read-Host '분류 번호'
    if ($choice -notmatch '^[1-6]$') { throw '1부터 6까지의 번호를 입력해주세요.' }
    $Category = $categories[[int]$choice-1]
}
$now = [TimeZoneInfo]::ConvertTimeBySystemTimeZoneId([DateTimeOffset]::UtcNow,'Korea Standard Time')
$day = $now.ToString('yyyy-MM-dd')
$destination = Join-Path $repoRoot "_posts/$day-$Slug.md"
$permalink = "/entry/$Slug/"
if (Test-Path -LiteralPath $destination) { throw "이미 있는 파일입니다: $destination" }
foreach ($post in Get-ChildItem -LiteralPath (Join-Path $repoRoot '_posts') -File) {
    if ([IO.File]::ReadAllText($post.FullName).Contains($permalink)) { throw '같은 주소의 글이 있습니다. 다른 영문 이름을 사용해주세요.' }
}
$template = [IO.File]::ReadAllText((Join-Path $repoRoot 'templates/post.md'))
$template = $template.Replace('title: "새 글 제목"', 'title: '+(ConvertTo-Json -InputObject $Title -Compress))
$template = $template.Replace('date: 2026-10-28 12:00:00 +09:00','date: '+$now.ToString('yyyy-MM-dd HH:mm:ss zzz'))
$template = $template.Replace('categories: ["개발"]','categories: ['+(ConvertTo-Json -InputObject $Category -Compress)+']')
$template = $template.Replace('tags: ["예시"]','tags: '+(ConvertTo-Json -InputObject @($Tags) -Compress))
$template = $template.Replace('my-new-post',$Slug)
[IO.File]::WriteAllText($destination,$template,[Text.UTF8Encoding]::new($false))
New-Item -ItemType Directory -Path (Join-Path $repoRoot "assets/images/posts/$Slug") -Force | Out-Null
Write-Host "초안을 만들었습니다: $destination"
Write-Host '본문을 작성한 뒤 published: false를 true로 바꾸고 GitHub Desktop에서 Commit, Push 하세요.'
Write-Host 'published: false는 화면 노출만 막습니다. 공개 저장소에 올린 원본 파일은 누구나 볼 수 있습니다.'