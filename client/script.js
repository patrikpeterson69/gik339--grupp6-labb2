//fetch(".server/users", requestObject);
// fetch(requestObject).then(respnse => 1 );
// fetch(requestObject).console.error(respnse => 0 );

/* const { request } = new Request("http://localhost:3000/users", {
  method: "GET",
  body: { id: 1 },
});

fetch(request)
  .then((response) => response.json())

  .then((convertedData) => {});
 */

/* fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched data:", data);
  }); */

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.error("Error fetching data:", error));
