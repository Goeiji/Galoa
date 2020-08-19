function SeeMore() {
    var dots = document.getElementById("dots");
    var moreContent = document.getElementById("more");
    var btnLess = document.getElementById("seeLess");
    var btnMore = document.getElementById("seeMore");

    if (dots.style.display === "inline") {
        dots.style.display = "none";
        moreContent.style.display = "inline";
        btnMore.style.display = "none";
        btnLess.style.display = "inline";
    } else {
        dots.style.display = "inline";
        moreContent.style.display = "none";
        btnMore.style.display = "inline";
        btnLess.style.display = "none";
    }
}