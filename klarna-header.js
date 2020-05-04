let navBar;
let header;
let backgroundImage;



function headerMouseOver(navItem){
  nodeItem = navItem.childNodes.item(1)
  headerMainLabel = nodeItem.childNodes.item(1).childNodes.item(3);
  headerMainLabel.classList.remove("fa-angle-down");
  headerMainLabel.classList.add("fa-angle-up");
  headerMainLabel.style.color="#487b94"; 
  navBar = document.getElementsByClassName("header-main__mega-menu")[0];
  header = document.getElementsByClassName("header-main")[0];
  backgroundImage = document.getElementsByClassName("background-media")[0];
  navItem = document.getElementsByClassName("header-main__label");
  navBar.style.visibility="visible";
  navBar.style.opacity="1";
  header.style.backgroundColor="white";
  header.style.borderBottom="1px solid #ededed";
  header.style.borderBottomWidth="thin";
  backgroundImage.style.filter="brightness(0.3)";
}

function navItemMouseOut(navItem){
  nodeItem = navItem.childNodes.item(1)
  headerMainLabel = nodeItem.childNodes.item(1).childNodes.item(3);
  headerMainLabel.classList.remove("fa-angle-up");
  headerMainLabel.classList.add("fa-angle-down");
  headerMainLabel.style.color="black"; 
}


function headerMouseOut(){  
  navBar = document.getElementsByClassName("header-main__mega-menu")[0];
  navBar.style.visibility="hidden";
  navBar.style.opacity="0";
  header = document.getElementsByClassName("header-main")[0];
  header.style.backgroundColor=null;
  header.style.borderBottom=null;
  header.style.borderBottomWidth=null;
  backgroundImage = document.getElementsByClassName("background-media")[0];
  backgroundImage.style.filter=null; 
}
