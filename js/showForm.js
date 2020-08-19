function createTopic() {
    var btn = document.getElementById('topBtn');
    var discCont = document.getElementById('discCont');
    var topForm =document.getElementById('topForm');

    if (discCont.style.display === "none") {
        discCont.style.display = "inline"
        btn.style.display = "inline";
        topForm.style.display = "none";
    } else {
        discCont.style.display = "none";
        btn.style.display = "none";
        topForm.style.display = "inline";
    }
}