
function Merge_Sort(){

    delay_vis=0;

    merge_part(0,array_size-1);

    butt_enable();

}

function merging(start,mid,end){

    var p=start;
    var q=mid+1;

    var arr=[];
    var k=0;

    for(var i=start;i<=end;i++){

        if(p>mid){
            arr[k++]=div_size[q++];
            update_div(divs[q-1],div_size[q-1],"red");
        }

        else if(q>end){
            arr[k++]=div_size[p++];
            update_div(divs[p-1],div_size[p-1],"red");
        }

        else if(div_size[p]<div_size[q]){
            arr[k++]=div_size[p++];
            update_div(divs[p-1],div_size[p-1],"red");
        }
        
        else{
            arr[k++]=div_size[q++];
            update_div(divs[q-1],div_size[q-1],"red");
        }
    }
    for(var j=0;j<k;j++){

        div_size[start++]=arr[j]
        update_div(divs[start-1],div_size[start-1],"green");
    
    }
}


function merge_part(start,end){

    if(start < end){

        var mid=Math.floor((start + end) / 2);
        update_div(divs[mid],div_size[mid],"yellow");//Color update

        merge_part(start,mid);
        merge_part(mid+1,end);

        merging(start,mid,end);
    }
}

