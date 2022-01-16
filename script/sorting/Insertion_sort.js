function Insertion_Sort(){

    for(var i=0;i<array_size;i++){
        
        update_div(divs[i],div_size[i],"yellow");
        
        var key=div_size[i];
        var j=i-1;

        while(j>=0 && div_size[j]>key){
            update_div(divs[j],div_size[j],"red");/// color update
            update_div(divs[j+1],div_size[j+1],"red");/// color update

            div_size[j+1]=div_size[j];

            update_div(divs[j],div_size[j],"red"); // heigth update
            update_div(divs[j+1],div_size[j+1],"red");// heigth update

            update_div(divs[j],div_size[j],"blue");

            if(j==(i-1)){
                update_div(divs[j+1],div_size[j+1],"yellow");
            }

            else{
                update_div(divs[j+1],div_size[j+1],"blue");
            }

            j--;
        }

        div_size[j+1]=key;

        for(var k=0;k<i;k++){

            update_div(divs[k],div_size[k],"green");

        }
    }
    update_div(divs[i-1],div_size[i-1],"green");


    butt_enable();
    
}