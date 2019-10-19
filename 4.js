function hitungParkir(num){
  if(num<=3){
      return 'biaya : ' + num*2000;
  }
  if(num >= 7){
      return 'biaya : ' + 10000;
  }
  if(num>3 && num<7){
      return 'biaya : ' + (((num-3)*1000)+6000);
  }
}

console.log(hitungParkir(1));// ⇒ biaya: 2000
console.log(hitungParkir(3));// ⇒ biaya: 6000
console.log(hitungParkir(4)); //⇒ biaya: 7000
console.log(hitungParkir(4)); //⇒ biaya: 7000
console.log(hitungParkir(10)); //⇒ biaya: 7000
console.log(hitungParkir(7)); //⇒ biaya: 7000
