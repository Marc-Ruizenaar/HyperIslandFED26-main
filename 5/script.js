const apiUrl = "https://api.example.com/data";

function getData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

getData(apiUrl);

function sendData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to send data: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
}

const newUser = {
  name: "John Doe",
  age: 21,
};

sendData(apiUrl, newUser);
