function cetak_gambar(num){
    let i = 0;
    while(i<num){
        let temp = '';
        if(i%2==1){
            temp+='* ';
            for(let k=0; k<num-2; k++){
                temp+= '= '
            }
            temp+= '*';
        }else{
            
            for(let j=0; j<num; j++){
              temp+='* ';
            }
        }
        console.log(temp);
        i++;
    }
}

cetak_gambar(5);
cetak_gambar(7);