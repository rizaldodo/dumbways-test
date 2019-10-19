let input = {
    nama : 'jojo',
    nim : 1122331,
    'jumlah hadir' : 14,
    tugas : 80,
    uts : 80,
    uas : 96
}

function nilaiSiswa(obj){

    let jumlahHadir = obj['jumlah hadir'];
    let tugas = obj.tugas;
    let uts = obj.uts;
    let uas = obj.uas;
    let nilaiAkhir = (jumlahHadir * 0.1) + (tugas * 0.2) + (uts * 0.3) + (uas * 0.4);
    
    if(jumlahHadir < 1 || tugas < 1 || uts < 1 || uas < 1){
       return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : ' + 'E';
    }else{
        if(nilaiAkhir >= 80){
            return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : A';
        }else if(nilaiAkhir > 70 && nilaiAkhir < 80){
            return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : B';
        }else if(nilaiAkhir > 60 && nilaiAkhir < 70){
            return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : C';
        }else if(nilaiAkhir > 49 && nilaiAkhir < 60){
            return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : D';
        }else if(nilaiAkhir < 50){
            return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : E';
        }
       return 'Nama : ' + obj.nama + '\n' + 'NIM : ' + obj.nim + '\n' + 'Nilai : ' + nilaiAkhir;
        
    }
}

console.log(nilaiSiswa(input));