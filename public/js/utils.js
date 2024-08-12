function setCurrentDate() {
  const currentDateElements = document.querySelectorAll(".newsPapperDate");
  const actualDate = new Date().toUTCString().split(" ").slice(0, 4).join(" ");

  currentDateElements.forEach((currentDateItem) => {
    currentDateItem.textContent = actualDate;
  });
}
setCurrentDate();
