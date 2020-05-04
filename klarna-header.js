let navBar;
let header;
let backgroundImage;

function headerMouseOver(){
  navBar = document.getElementsByClassName("header-main__mega-menu")[0];
  header = document.getElementsByClassName("header-main site-width")[0];
  backgroundImage = document.getElementsByClassName("background-media")[0];
  navBar.style.visibility="visible";
  navBar.style.opacity="1";
  header.style.backgroundColor="white";
  header.style.borderBottom="1px solid #ededed";
  header.style.borderBottomWidth="thin";
}

function headerMouseOut(){  
  navBar = document.getElementsByClassName("header-main__mega-menu")[0];
  navBar.style.visibility="hidden";
  navBar.style.opacity="0";
  header = document.getElementsByClassName("header-main site-width")[0];
  header.style.backgroundColor=null;
  header.style.borderBottom=null;
  header.style.borderBottomWidth=null;
  backgroundImage = document.getElementsByClassName("background-media")[0];
  backgroundImage.style.filter=null; 
}

sectionMouseEnter = () => {
    let navBar = document.getElementsByClassName("header-main__mega-menu")[0];
    navBar.style.visibility="visible";
    navBar.style.opacity="1";

    let header = document.getElementsByClassName("header-main site-width")[0];
    header.style.backgroundColor="white";
    header.style.borderBottom="1px solid #ededed";
    header.style.borderBottomWidth="thin";
    
    let backgroundImage = document.getElementsByClassName("background-media")[0];
    backgroundImage.style.filter="brightness(0.2)"; 


    let section = document.getElementsByClassName("header-main__mega-menu")[0];
    section.style.visibility="visible";
    section.style.opacity="1";   
  }
  sectionMouseOut = () =>{
    let section = document.getElementsByClassName("header-main__mega-menu")[0];
    section.style.visibility="hidden";
    section.style.opacity="0";   

    
  }