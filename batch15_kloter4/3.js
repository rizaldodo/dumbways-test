function cetak_gambar(num){
  if(num % 2 == 0){
      return console.log('Hanya menerima nilai ganjil');
  }

  if(num == 1){
      return console.log('=');
  }

  for(let i=1; i<=num; i++){
      var temp = '';
      if(i%2 != 0){
          for(let j=1; j<=num; j++){
              if(j%2 != 0){
                temp+='=  ';
              }else{
                temp+='*  ';
              }
          }  
      }else{
        for(let j=1; j<=num; j++){
            if(j%2 != 0){
              temp+='*  ';
            }else{
              temp+='=  ';
            }
        }  
      }
      console.log(temp);
  }
}

cetak_gambar(0);