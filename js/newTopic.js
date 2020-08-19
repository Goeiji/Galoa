function newTopic() {
    var topDone = document.getElementById("topDone");
    var topForm = document.getElementById("topForm");
    var btn = document.getElementById("topDoneBtn");
    var blur = document.getElementById("topBlur");

    if (topForm.style.display === "none") {
        topForm.style.display = "inline";
        topDone.style.display = "none";
        btn.style.display = "none";
        blur.style.display = "none";
    } else {
        topForm.style.display = "none";
        topDone.style.display = "flex";
        btn.style.display = "flex";
        blur.style.display = "block";
    }
}