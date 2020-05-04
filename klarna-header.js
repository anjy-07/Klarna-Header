let navBar;
let header;
let backgroundImage;



function headerMouseOver(navItem) {
  let icon = navItem.childNodes.item(1).childNodes.item(1).childNodes.item(3);
  icon.classList.remove("fa-angle-down");
  icon.classList.add("fa-angle-up");
  icon.style.color="#487b94"; 

  let label = navItem.childNodes.item(1).childNodes.item(1).childNodes.item(1);
  console.log(label);
  label.style.color="#487b94"
  
  navBar = document.getElementsByClassName("header-main__mega-menu")[0];
  navBar.style.visibility="visible";
  navBar.style.opacity="1";

  header = document.getElementsByClassName("header-main")[0];
  header.style.backgroundColor="white";
  header.style.borderBottom="1px solid #ededed";
  header.style.borderBottomWidth="thin";

  backgroundImage = document.getElementsByClassName("background-media")[0];
  backgroundImage.style.filter="brightness(0.3)";
}

function navItemMouseOut(navItem){
  let label = navItem.childNodes.item(1).childNodes.item(1).childNodes.item(1);
  label.style.color="black";

  let icon = navItem.childNodes.item(1).childNodes.item(1).childNodes.item(3);
  icon.classList.remove("fa-angle-up");
  icon.classList.add("fa-angle-down");
  icon.style.color="black"; 
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
