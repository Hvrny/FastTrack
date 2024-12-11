document.querySelector("Form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#userName").value;

  if (name) {
    const data = { Name: name };
    fetch("https://testapi.io/api/Hvrny/resource/UsersList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("#responseMessage").innerText =
          "Name submitted successfully!";
        console.log("Success:", data);
        document.querySelector("#userName").value = "";
      })
      .catch((error) => {
        document.querySelector("#responseMessage").innerText =
          "Error submitting name!";
        console.error("Error:", error);
      });
  } else {
    document.querySelector("#responseMessage").innerText =
      "Please enter a name.";
  }
});
