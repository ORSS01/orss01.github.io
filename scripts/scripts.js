function goToSection(sectionID){
    const sectionDestination = document.getElementById(sectionID);

    if(sectionDestination)
    {
        sectionDestination.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.classList.toggle("show");
  }