$client = new-object System.Net.WebClient
$client.DownloadFile('http://localhost:21021/AbpServiceProxies/GetAll?type=vue', 'src/api/api.js')