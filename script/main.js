var size_arr = document.getElementById('BAR'), array_size=size_arr.value;
var gen_arr=document.getElementById("newArray");
var speed_inp=document.getElementById("SpeedAlgo");

var algo_butts=document.querySelectorAll(".algo button");

var div_size=[];
var divs=[];
var margin_size;
var bars=document.getElementById("array_bars");
bars.style="flex-direction:row";

gen_arr.addEventListener("click", generate_array);
size_arr.addEventListener("input",update_array_size)

function generate_array(){

    bars.innerHTML="";
    for(var i=0;i<array_size;i++){

        div_size[i]=Math.floor(Math.random() *0.5*(size_arr.max-size_arr.min) )+10;
        divs[i]=document.createElement("div");
        bars.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_size[i]) + "%;";

    }
}

function update_array_size(){

    array_size=size_arr.value;
    generate_array();

}

window.onload=update_array_size();


for(var i=0; i<algo_butts.length;i++){

    algo_butts[i].addEventListener("click",algo_run);

}

function disable_buttons(){

    for(var i=0;i<algo_butts.length;i++){

        algo_butts[i].classList=[];
        algo_butts[i].classList.add("butt_locked");

        algo_butts[i].disabled=true;
        size_arr.disabled=true;
        gen_arr.disabled=true;
        speed_inp.disabled=true;
    }
}

function algo_run(){

    disable_buttons();

    this.classList.add("butt_selected");

    switch(this.innerHTML){

        case "MERGE SORT":Merge_Sort();
                                break;
        case "INSERTION SORT":Insertion_Sort();
                                break;
        case "QUICK SORT":Quick_Sort();
                                break;
        case "BUBBLE SORT":Bubble_Sort();
                                break;
        case "SELECTION SORT":Selection_Sort();
                                break;
    }
}

