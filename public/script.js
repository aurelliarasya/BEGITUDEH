// api url
const api_url = "https://api.thingspeak.com/channels/2058345/feeds.json?api_key=401GEQFEUJQ3CEUP&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Temperature").innerHTML = obj.field1;
      document.getElementById("Humidity").innerHTML = obj.field2;
    });
}, 1000);
