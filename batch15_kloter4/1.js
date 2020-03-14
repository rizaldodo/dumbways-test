function bank(nominal, bulan){
  let bunga = 0.021;

  for(let i=0; i<bulan; i++){
    
      nominal+=(nominal*bunga);
  }
  return nominal.toFixed(2);
 
}

console.log(bank(2921690, 12));

// function bagi(a, b){
//     var hasil = a/b;

//     console.log(hasil);
// }
// bagi(2.1,100);

// function kali(a,b){
//     let hasil = a*b;


//     console.log(hasil.toFixed(2));
// }

// kali(2983045.49, 0.021);
