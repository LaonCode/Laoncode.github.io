@echo off
setlocal
set "issuePowerShell=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%issuePowerShell%" (
  echo Windows PowerShell was not found at "%issuePowerShell%".
  pause
  exit /b 1
)
if not exist "%~dp0add-security-issue.ps1" (
  echo Keep this file beside add-security-issue.ps1 in the repository tools folder.
  pause
  exit /b 1
)
"%issuePowerShell%" -NoProfile -ExecutionPolicy Bypass -File "%~dp0add-security-issue.ps1"
set "issueExitCode=%errorlevel%"
pause
exit /b %issueExitCode%
