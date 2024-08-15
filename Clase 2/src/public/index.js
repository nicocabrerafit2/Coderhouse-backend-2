buttonGetCookie.addEventListener("click", () => {
  const page = products.payload.page + 1;
  refreshPage(page);
});
