/*get my current location*/
navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude
  const lng = position.coords.longitude

  /*initial view of map is my current location*/
  var map = L.map('map').setView([lat, lng], 13);

  /* adding tile to the map */
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  //Add marker to the map
  L.marker([lat, lng]).addTo(map)
})






async function finder() {
  try {
    ipGeoLocationAPI = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_PKBkRAfTfK2Not6zK2yzoTIg9xvz4')
    const myIpv4 = await ipGeoLocationAPI.json()
    let myIp = document.querySelector('#myIp').value
    
  if (myIp !== '') {
    console.log(myIpv4)
  } else {
  /*Adiciona informacoes ao quadro quando nao insere um ip pra busca*/
   document.querySelector('.ipAddress').append(myIpv4.ip)
   document.querySelector('.location').append(myIpv4.location.region + ", "+ myIpv4.location.country )
   document.querySelector('.timezone').append(myIpv4.location.timezone)
   document.querySelector('.isp').append(myIpv4.isp)
  } 
} catch (error) {
  console.error('Error fetching data:', error)
}    

}
