let vouchers = {
    DumbWaysAsik : function(num){
        return num*0.5;
    },
    DumbWaysMantap : function(num){
        return num*0.3;
    }
}

function hitungVoucher(promoCode, bill){
    let diskon = 0;
    if (promoCode == 'DumbWaysAsik' && bill >= 20000){
        diskon = bill * 0.5;
        if(diskon>20000){
            diskon = 20000;
        }
    
    }else if(promoCode == 'DumbWayMantap' && bill >= 50000){
       diskon = bill * 0.3;
        if(diskon>40000){
            diskon = 40000;
        }
        
    }
    let bayar = bill - diskon;
    let kembalian = bill - bayar;
    

    console.log('Uang yang harus dibayar : ',bayar);
    console.log('Diskon : ',diskon);
    console.log('Kembalian : ',kembalian);
}

hitungVoucher('DumbWaysAsik', 10000);