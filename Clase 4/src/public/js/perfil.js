const cerrarSession = document.querySelector("#cerrarSession");

cerrarSession.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/session/logout");
    if (response.status === 201 || response.status < 300) {
      window.location.href = "/";
    }
  } catch (error) {
    console.log("Error", error);
  }
});
