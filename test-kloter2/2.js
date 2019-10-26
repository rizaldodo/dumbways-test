let pecahan = {
  '50000' : 0,
  '20000' : 0,
  '10000' : 0,
  '5000' : 0
}

function hitungKembalian(harga, bayar){
    if(harga > 200000){
        harga = harga - (harga *= 0.1);
    }

    let kembalian = bayar - harga;

    while(kembalian >= 5000){
        if(kembalian >= 50000){
            kembalian -= 50000;
            pecahan['50000']++;
        }
        if(kembalian >= 50000){
            kembalian -= 20000;
            pecahan['20000']++;
        }
        if(kembalian >= 50000){
            kembalian -= 10000;
            pecahan['10000']++;
        }
        if(kembalian >= 50000){
            kembalian -= 5000;
            pecahan['5000']++;
        }
    }
    for(let counter in pecahan){
        if(pecahan[counter] > 0){
            console.log(pecahan[counter] + ' x ' + counter);
        }
    }

    console.log(kembalian + ' disumbangkan karena tidak ada pecahan ' + kembalian + '-an');
}
hitungKembalian(220000, 250000);