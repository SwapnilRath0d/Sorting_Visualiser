

function  Bubble_Sort(){

    delay_vis=0;

    for(var i=0;i<array_size-1;i++){

        for(var j=0;j<array_size-i-1;j++){

            update_div(divs[j],div_size[j],"yellow");

            if(div_size[j]>div_size[j+1]){

                update_div(divs[j],div_size[j], "red");
                update_div(divs[j+1],div_size[j+1], "red");

                var tmp=div_size[j];
                div_size[j]=div_size[j+1];
                div_size[j+1]=tmp;

                update_div(divs[j],div_size[j], "red");
                update_div(divs[j+1],div_size[j+1], "red");

            }
            update_div(divs[j],div_size[j], "blue");

        }
        update_div(divs[j],div_size[j], "green");
    }

    update_div(divs[0],div_size[0], "green");

    butt_enable();
}