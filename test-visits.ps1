$url = "https://api.counterapi.dev/v1/fcbrasil-babiservices/visits/up"
$total = 200
$count = 0

for ($i = 1; $i -le $total; $i++) {
    try {
        $r = Invoke-RestMethod -Uri $url -Method GET -TimeoutSec 5
        $count = $r.count
        Write-Host "[$i/$total] Contador: $count"
    } catch {
        Write-Host "[$i/$total] Rate limited, aguardando..."
        Start-Sleep -Seconds 3
    }
    Start-Sleep -Milliseconds 2000
}

Write-Host "`nFinalizado! Contador final: $count"
