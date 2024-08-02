function scrollToSecondSection() {
    var secondSection = document.querySelector('.second-section-container');
    var offsetTop; 

    if (window.innerWidth <= 768) {
        offsetTop = secondSection.offsetTop - 75; 
    }else if(window.innerWidth <= 968){
        offsetTop = secondSection.offsetTop - 100; 
    }else{
        offsetTop = secondSection.offsetTop - 150; 
    }
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}