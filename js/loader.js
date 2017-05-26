var myVar;

function loadPage() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    console.log("cul");
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}