let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let string ='';
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innHTML == '='){
            string = eval(string);
            input.value = string;
         }
        string += e.target.innHTML;
        input.value = string; 
       
        
    })
})