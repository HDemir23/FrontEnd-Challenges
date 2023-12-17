var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    const { latitude, longitude } = data;

    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("Buradasınız!").openPopup();

    const apiKey = "at_gFEgrcUc2FGpivUPFr88RVTevxyDx";
    const ipAddress = data.ip; // İsteğinizi göndermek istediğiniz IP adresi

    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("IP").innerHTML = data.ip;
        document.getElementById("TIMEZONE").innerHTML = data.location.timezone;
        document.getElementById("LOCATION").innerHTML = data.location.region;
        document.getElementById("ISP").innerHTML = data.isp;

        // Gelen verileri konsola yazdırabilirsiniz
        // Burada gelen verileri işleyebilir ve istediğiniz şekilde kullanabilirsiniz
      })
      .catch((error) => {
        console.error("API isteği sırasında bir hata oluştu:", error);
      });
  })
  .catch((error) => console.error("Error fetching location:", error));

//   function searchLocation() {
//     var userInput = document.getElementById("IP-Input").value; // Kullanıcının girdiği değeri al

//     // Kullanıcının girdiği IP adresi veya domain bilgisini kullanarak konum verilerini al
//     fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${userInput}`)
//         .then(response => response.json())
//         .then(data => {
//             const { lat, lng } = data.location; // Kullanıcının konum verilerini al

//             // Aldığınız konum verilerini kullanarak bir marker oluşturun
//             var marker = L.marker([lat, lng]).addTo(map);
//             marker.bindPopup(`Location for ${userInput}`).openPopup(); // Marker'a bir popup ekleyebilirsiniz
//             map.setView([lat, lng], 12); // Harita görünümünü konuma göre ayarla
//         })
//         .catch(error => console.error("Error fetching location:", error));
// }
