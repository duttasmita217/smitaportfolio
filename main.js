var tabs = document.getElementsByClassName("tab-titles");
var sections = document.getElementsByClassName("section");
function changeTab(tabname){
    for(let tab of tabs){
        tab.classList.remove("active-tab");
    }
    for(let section of sections){
        section.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-tab");
    document.getElementById(tabname).classList.add("active-content");
}
function openModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "block";
}

function closeModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
}

function openMenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}
function closeMenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}