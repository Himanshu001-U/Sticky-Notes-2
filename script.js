let btn = document.getElementById("add_btn");
let color = document.getElementById("clr");
let text = document.getElementsByTagName("textarea")[0];
let hide = document.getElementById("hideline");
let notes = document.getElementById("notes");
// console.log(btn,color);

function addNotes() {
    if (text.value === ""){
        alert("Please enter some text");
        return;
    }

    hide.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let crossBtn = document.createElement("button");
    div.classList.add("note");
    div.appendChild(p);
    div.appendChild(crossBtn);
    p.innerText = text.value;
    crossBtn.innerText = "X";
    div.style.backgroundColor = color.value;
    p.classList.add("para");
    crossBtn.classList.add("cross");
    notes.appendChild(div);
    text.value = "";
    crossBtn.addEventListener("click", function () {
        notes.removeChild(div);
    });

}
function colorChange() {
    console.log(color);
    text.style.color = color.value;
}

color.addEventListener("change", colorChange);
btn.addEventListener("click", addNotes);