function showTabText(tabName) {
  document.querySelectorAll('.tab').forEach(tab => {
      tab.style.display = "none";
    })
  document.getElementById(tabName).style.display = "block"
}