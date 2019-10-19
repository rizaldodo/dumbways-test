function hitungKembalian(harga, bayar){
    let kembalian = bayar - harga;
    let [counter100k, counter50k, counter20k, counter10k, counter5k] = [0,0,0,0,0]
    while(kembalian >= 5000){
        if(kembalian >= 100000){
            kembalian -= 100000;
            counter100k++;
        }else
        if(kembalian >= 50000){
            kembalian -= 50000;
            counter50k++;
        }else
        if(kembalian >= 20000){
            kembalian -= 20000;
            counter20k++;
        }else
        if(kembalian >= 10000){
            kembalian -= 10000;
            counter10k++;
        }else
        if(kembalian >= 5000){
            kembalian -= 5000;
            counter5k++;
        }
    }

    if(counter100k > 0){
        console.log(counter100k + ' x 100000');
    }
    if(counter50k > 0){
        console.log(counter50k + ' x 50000');
    }
    if(counter20k > 0){
        console.log(counter20k + ' x 20000');
    }
    if(counter10k > 0){
        console.log(counter10k + ' x 10000');
    }
    if(counter5k > 0){
        console.log(counter5k + ' x 5000');
    }
    if(kembalian > 0){
        console.log(kembalian + ' disumbangkan');
    }

    // console.log(counter100k, counter50k, counter20k, counter10k, counter5k);
}

hitungKembalian(110500, 300000);