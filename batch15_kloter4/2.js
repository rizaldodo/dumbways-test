function check(words, checker){
    // var dataKey = ['dumb', 'ways', 'the', 'best']; 
    // var checker = 'dumbways';
    var char = true;

    for(let word of words){
    //   console.log(word);
      for(let i=0; i<word.length; i++){
          if(!checker.includes(word[i])){
            char = false;
          }
      }

        if(char){
            console.log(word, " => true");
        }else{
            console.log(word, " => false");
        }
    }

}

check(['dumb', 'ways', 'the', 'best'], 'dumbways');