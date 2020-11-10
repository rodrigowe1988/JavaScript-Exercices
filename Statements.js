var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At architecto, dolorem voluptatem labore adipisci facere ipsum dolore. Expedita totam nemo illum excepturi natus id, dolorem voluptatum! Perferendis hic eos ad?";
console.log(text);

var toHackerCase = function(text) {
    var hackerTextArray = [];
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) === 'o'){
            hackerTextArray.push(0);
        }else {
            hackerTextArray.push(text.charAt(i))
        }
    }
    return hackerTextArray.join(",");
}
console.log(toHackerCase(text));