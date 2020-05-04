let  headerMouseOver = () =>{
    let navBar = document.getElementsByClassName("header-main__mega-menu")[0];
    navBar.style.visibility="visible";
    navBar.style.opacity="1";

    let header = document.getElementsByClassName("header-main site-width")[0];
    header.style.backgroundColor="white";
    header.style.borderBottom="1px solid #ededed";
    header.style.borderBottomWidth="thin";
    
    let backgroundImage = document.getElementsByClassName("background-media")[0];
    backgroundImage.style.filter="brightness(0.2)"; 
}

let headerMouseOut = () =>{
    let navBar = document.getElementsByClassName("header-main__mega-menu")[0];
    navBar.style.visibility="hidden";
    navBar.style.opacity="0";

    let header = document.getElementsByClassName("header-main site-width")[0];
    header.style.backgroundColor=null;
    header.style.borderBottom=null;
    header.style.borderBottomWidth=null;
    
    let backgroundImage = document.getElementsByClassName("background-media")[0];
    backgroundImage.style.filter=null; 
}