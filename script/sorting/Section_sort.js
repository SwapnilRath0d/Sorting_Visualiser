
function Selection_Sort(){

    delay_vis=0;

    for(var i=0;i<array_size-1;i++){

        update_div(divs[i],div_size[i],"red");//Color update
        var min = i;

        for(var j=i+1;j<array_size;j++){

            if(div_size[j]<div_size[min]){

                if(min!=i){
                    update_div(divs[min],div_size[min], "yellow"); //color update
                }

                min=j;

                update_div(divs[min],div_size[min], "red"); /// found min element updating color 

            }
            else{

                update_div(divs[j],div_size[j],"blue");

            }
        }
        if(min!=i){


            var tmp=div_size[min];
            div_size[min]=div_size[i];
            div_size[i]=tmp;


            update_div(divs[min],div_size[min],"red"); //height color update
            update_div(divs[i],div_size[i],"red");//height color update
            

            update_div(divs[min],div_size[min],"blue");//color update
        }

        update_div(divs[i],div_size[i],"green");

    }

    update_div(divs[i],div_size[i],"green");

    butt_enable();
}