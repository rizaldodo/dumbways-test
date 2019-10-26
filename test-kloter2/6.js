let data = [
      ['a','c','b','e','d'],
      ['g','e','f']
    ];
    
function sort_array(data){
    for(let arr of data){
        arr = arr.sort();
    }

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data.length-1; j++){
            if(data[j].length>data[j+1].length){
                temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    console.log(data);
}
sort_array(data);