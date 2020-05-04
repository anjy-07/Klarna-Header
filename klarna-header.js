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
  backgroundImage.style.filter="brightness(0.2)";
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
