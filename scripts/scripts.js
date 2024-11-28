function goToSection(sectionID){
    const sectionDestination = document.getElementById(sectionID);

    if(sectionDestination)
    {
        sectionDestination.scrollIntoView({ behavior: 'smooth' });
    }
}