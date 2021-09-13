const default_size = 50;

const grid = document.getElementById("grid");

function removeGrid(){
    if( grid.innerHTML !== ""){
        grid.innerHTML = "";
    };
};

function changeGrid(size){
    document.getElementById("grid").style.gridTemplateColumns =   "repeat(" + String(size)+ ", 1fr)";
    document.getElementById("grid").style.gridTemplateRows =   "repeat(" + String(size)+ ", 1fr)";
    for( i = 0 ; i < size ; i++){
        for(j = 0 ; j < size ; j++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class","default");
            grid.appendChild(newDiv);
        };
    };
};

changeGrid(default_size);

const newDivs = Array.from(document.getElementsByClassName("default"));
let divLength = newDivs.length;
const colorSwitch = document.getElementsByClassName("colorSetting")[0];

for(i = 0 ; i <= divLength - 1; i++){
    let ii = i;
    miniDiv = newDivs[ii];
    miniDiv.addEventListener("mouseenter", () => 
    newDivs[ii].id = "onHover"
    )
};


const sliderValue = document.getElementById("sliderValue");

sliderValue.oninput = function(){
    const val = document.getElementById("sliderValue").value;
    showValue();
    removeGrid();
    changeGrid(val);
    const newDivs = Array.from(document.getElementsByClassName("default"));
    let divLength = newDivs.length;
    console.log(val);
    for(i = 0 ; i <= divLength - 1; i++){
        let ii = i;
        miniDiv = newDivs[ii];
        miniDiv.addEventListener("mouseenter", () => newDivs[ii].id = "onHover");
    };

    for(i = 0 ; i <= divLength - 1; i++){
        let ii = i;
        miniDiv = newDivs[ii];
        miniDiv.addEventListener("mouseenter", () => {
        if(colorSwitch.querySelector("input[type=checkbox]").checked == true){
            newDivs[ii].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        }}
        )
    };


};

function showValue(){
    const val = document.getElementById("sliderValue").value;
    document.getElementById('output').innerHTML = val
    console.log(val)
};


colorSwitch.addEventListener("click",function(e){
    if(colorSwitch.classList.contains("active")){
        colorSwitch.querySelector("input[type=checkbox]").checked = false;
        colorSwitch.classList.remove("active");
    }
    else {
        colorSwitch.classList.add("active");
        colorSwitch.querySelector("input[type=checkbox]").checked = true;
    }
});

for(i = 0 ; i <= divLength - 1; i++){
    let ii = i;
    miniDiv = newDivs[ii];
    miniDiv.addEventListener("mouseenter", () => {
    if(colorSwitch.querySelector("input[type=checkbox]").checked == true){
        newDivs[ii].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }}
    )
};