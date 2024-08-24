function changeBackgroundColour() {
    let colourPicker = document.querySelector("#colour_picker").value;
    let body = document.body;
    let changeColour = body.style.backgroundColor = colourPicker ;
    return changeColour;
}