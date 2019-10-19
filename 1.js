let dataKey = ['dumb','ways','the','best'];
let word = 'dumbways';
function check (arr, str){
    let count = 0;
    for(let word of arr){
        if(str.includes(word)){
            console.log(word, ' => true');
        }else{
            console.log(word, ' => false');
        }
    }

}

check(dataKey, word);