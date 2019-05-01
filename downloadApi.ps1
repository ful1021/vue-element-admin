$client = new-object System.Net.WebClient
$client.DownloadFile('http://localhost:53929/Abp/ServiceProxyScript?type=vue', 'src/api/api.js')