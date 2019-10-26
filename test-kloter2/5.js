function generate(num){
    let huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // let angka = ''

    for(let i=0; i<num; i++){
        let temp = '';
        for(let j=0; j<4; j++){
            for(let k=0; k<4; k++){
                let rand = Math.round(Math.random()*1)+1;
                if(rand>1){
                    temp+=huruf[Math.round(Math.random()*26)];
                }else{
                    temp+=(Math.floor((Math.random()*9)+1)).toString()
                }

                // temp+='x'
            }
            if(j==3){
                break;
            }
            temp+='-';
            
        }


        console.log(temp);
    }
}
generate(5);