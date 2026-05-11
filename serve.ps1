$ErrorActionPreference = 'Stop'

$root = Join-Path $PSScriptRoot 'dist'
$port = 8080
$prefix = "http://localhost:$port/"

if (-not (Test-Path $root)) {
    Write-Host "Pasta dist/ nao encontrada em $root" -ForegroundColor Red
    exit 1
}

$mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.htm'  = 'text/html; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.mjs'  = 'application/javascript; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif'  = 'image/gif'
    '.webp' = 'image/webp'
    '.ico'  = 'image/x-icon'
    '.woff' = 'font/woff'
    '.woff2'= 'font/woff2'
    '.ttf'  = 'font/ttf'
    '.txt'  = 'text/plain; charset=utf-8'
    '.map'  = 'application/json; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Host "Falha ao iniciar o servidor em $prefix" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "  Timberhack rodando em: $prefix" -ForegroundColor Green
Write-Host "  Servindo: $root"
Write-Host "  Pressione Ctrl+C para parar"
Write-Host ""

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response

        try {
            $relative = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath.TrimStart('/'))
            if ([string]::IsNullOrEmpty($relative)) { $relative = 'index.html' }

            $path = Join-Path $root $relative
            $fullRoot = (Resolve-Path $root).Path
            $resolved = $null
            if (Test-Path $path) {
                $resolved = (Resolve-Path $path).Path
            }

            $serveSpa = $false
            if (-not $resolved -or -not $resolved.StartsWith($fullRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
                $serveSpa = $true
            } elseif ((Get-Item $resolved).PSIsContainer) {
                $resolved = Join-Path $resolved 'index.html'
                if (-not (Test-Path $resolved)) { $serveSpa = $true }
            }

            if ($serveSpa) {
                $resolved = Join-Path $fullRoot 'index.html'
            }

            $ext = [System.IO.Path]::GetExtension($resolved).ToLower()
            $contentType = $mime[$ext]
            if (-not $contentType) { $contentType = 'application/octet-stream' }

            $bytes = [System.IO.File]::ReadAllBytes($resolved)
            $res.StatusCode = 200
            $res.ContentType = $contentType
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)

            Write-Host ("{0} {1} -> {2}" -f $req.HttpMethod, $req.Url.AbsolutePath, (Split-Path $resolved -Leaf))
        } catch {
            $res.StatusCode = 500
            $msg = [System.Text.Encoding]::UTF8.GetBytes("500 - $($_.Exception.Message)")
            $res.OutputStream.Write($msg, 0, $msg.Length)
            Write-Host "Erro: $($_.Exception.Message)" -ForegroundColor Red
        } finally {
            $res.OutputStream.Close()
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
