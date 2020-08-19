function response(topicBox) {
    var response = document.querySelectorAll(".response");
    var topBox = topicBox;

    for (let i = 0; i < response.length; i++) {
        if (response[i].style.display === "none") {
            response[i].style.display = "block";
            response[i].style.boxShadow = "1px 1px 6px rgb(211, 211, 211)";
            response[i].style.borderTop = "none";
            topBox.style.boxShadow = "1px -1px 6px rgb(211, 211, 211)";
            topBox.style.borderRadius = "4px 4px 0px 0px"
        } else {
            response[i].style.display = "none";
            topBox.style.boxShadow = "1px 1px 10px rgb(211, 211, 211)";
            topBox.style.borderRadius = "4px";
        }
    }
    
}