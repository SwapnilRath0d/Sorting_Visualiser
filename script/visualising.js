
var speed = 1000;

speed_inp.addEventListener("input",speed_vis);

function speed_vis(){

    var speed_array=speed_inp.value;

    switch(parseInt(speed_array)){

        case 1 : speed=5;
                break;
        case 2 : speed=10;
                break;
        case 3 : speed=100;
                break; 
        case 4 : speed=1000;
                break;
        case 5 : speed=10000;
                break;      
    }

    time_delay=10000/ (Math.floor(array_size/10)*speed);
}

var time_delay=10000/(Math.floor(array_size/10)*speed); /// decrease numerator for increase the speed;
var delay_vis=0; // this is updated on every div change so that visualisation is visible;

function update_div(bars,height,color){

    window.setTimeout(function(){
        bars.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }
    ,delay_vis+=time_delay);
}

function butt_enable(){

    window.setTimeout(function(){

        for(var i=0;i<algo_butts.length;i++){

        algo_butts[i].classList=[];
        algo_butts[i].classList.add("butt_unselected");

        algo_butts[i].disabled=false;
        size_arr.disabled=false;
        gen_arr.disabled=false;
        speed_inp.disabled=false;    

        }
    },delay_vis+=time_delay);
}