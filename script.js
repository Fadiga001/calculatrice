let input = document.getElementById('input');
let boutons = document.querySelectorAll('button');


let string = "";

boutons.forEach(bouton => bouton.addEventListener('click', (e) =>{
    
    if(e.target.innerHTML == '='){
        
        let result = eval(string);
        input.value = result;

    }else if(e.target.innerHTML == 'AC'){

        string = '';
        input.value = string;

    }else if(e.target.innerHTML == 'DEL'){

        string = string.substring(0, string.length-1);
        input.value = string;

    }else{

        string += e.target.innerHTML;
        input.value = string;

    }

    


}))


