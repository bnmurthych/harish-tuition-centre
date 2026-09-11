# Harish Tuition Centre - Local Web Server & Launcher
param(
    [int]$Port = 3000
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

$url = "http://localhost:$Port/"
$htmlFile = Join-Path $scriptDir "index.html"

# MIME type mapping
$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".txt"  = "text/plain; charset=utf-8"
}

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "      HARISH TUITION CENTRE - LOCAL WEB SERVER          " -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Serving directory: $scriptDir" -ForegroundColor Gray
Write-Host "Opening in your default browser: $url" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server at any time." -ForegroundColor DarkGray
Write-Host "========================================================" -ForegroundColor Cyan

try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()

    # Open browser
    Start-Process $url

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "index.html"
        }

        $localPath = Join-Path $scriptDir $rawPath

        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    }
} catch {
    Write-Warning "HttpListener encountered an issue ($($_.Exception.Message)). Falling back to direct browser launch..."
    Start-Process $htmlFile
} finally {
    if ($listener -ne $null -and $listener.IsListening) {
        $listener.Stop()
        $listener.Close()
    }
}
