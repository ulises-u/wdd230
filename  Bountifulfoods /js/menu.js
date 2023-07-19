function toggleMenu() {
    document.getElementById('Nav').classList.toggle('open');
  }
  
  let navig = document.getElementById('hamburgerBtn');
  navig.onclick = toggleMenu;
 