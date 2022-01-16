function Quick_Sort(){

    delay_vis=0;

    quick_sort(0,array_size-1);

    butt_enable();
}


function quick_part(start,end){

    var i=start+1;
    var piv=div_size[start];
    update_div(divs[start],div_size[start],"yellow");

    for(var j=start+1;j<=end ;j++){

        if(div_size[j]<piv){
            update_div(divs[j],div_size[j],"yellow");

            update_div(divs[i],div_size[i],"red");
            update_div(divs[j],div_size[j],"red");            
            
         

            var tmp=div_size[i];
            div_size[i]=div_size[j];
            div_size[j]=tmp;

            update_div(divs[i],div_size[i],"red");
            update_div(divs[j],div_size[j],"red"); 

            update_div(divs[i],div_size[i],"blue");
            update_div(divs[j],div_size[j],"blue");
        
            i++;
        }
    }

    update_div(divs[start],div_size[start],"red");
    update_div(divs[i-1],div_size[i-11],"red");

    var tmp= div_size[start];
    div_size[start]=div_size[i-1];
    div_size[i-1]=tmp;

    update_div(divs[start],div_size[start],"red");
    update_div(divs[i-1],div_size[i-1],"red");

    for(var k=start;k<=i;k++){
        update_div(divs[k],div_size[k],"green");
    }

    return i-1;

}
function quick_sort(start,end){
    
    if(start<end){
        var pivot= quick_part(start,end)

        quick_sort(start,pivot-1);
        quick_sort(pivot+1,end);
    }
}