autoOpenTab()

function autoOpenTab (){
  var tabitem;
  tabitem = document.getElementsByClassName("tab__item");
  tabitem[0].style.display = "block";
}

function openTab (evt, nameTab) {
    var i;
    var tabitem;
    var tablinks;

    tabitem = document.getElementsByClassName("tab__item");
    for (i = 0; i < tabitem.length; i++) {
        tabitem[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab__links");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replaceAll(" active", "");

    document.getElementById(nameTab).style.display = "block";
    evt.currentTarget.className += " active";
  }


}

function openTabTarget(nameTab, targetBtnId) {
    var i;
    var tabitem = document.getElementsByClassName("tab__item");
    var tablinks = document.getElementsByClassName("tab__links");

    for (i = 0; i < tabitem.length; i++) {
        tabitem[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(nameTab).style.display = "block";

    document.getElementById(targetBtnId).classList.add("active");
}