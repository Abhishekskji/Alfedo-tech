let string = "";
let input = document.getElementsByClassName('input');
let buttons = document.querySelectorAll('.button');
let percentage = document.getElementById('percentage')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML =='DEL'){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
calculate.addEventListener("click",(e)=>{
    e.preventDefault();
    percentage.value=(input.value*percentage.value)/100;
})
function button() {
    const buttonr = document.querySelector('.oprator')
    button.style.background.color = 'darkorange';
  }