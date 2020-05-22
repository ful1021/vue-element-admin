$client = new-object System.Net.WebClient
$client.DownloadFile('https://localhost:44345/Abp/ServiceProxyScript?type=vue', 'src/api/api.js')