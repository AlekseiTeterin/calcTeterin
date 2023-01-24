const calc = document.querySelector('.calculator');
const result = document.querySelector('#res');

calc.addEventListener('click', function(event){
    if(!event.target.classList.contains('btn')) return;

    const value = event.target.innerText;
    let curRes;

    switch(value) {
        case 'C':
            result.innerText = '0';
            break;
        
        case '=':
            curRes = eval(result.innerText);
            if(Number.isFinite(curRes))
            {
                if(Number.isInteger(curRes))
                    result.innerText = curRes;
                else
                    result.innerText = curRes.toFixed(4);
                break;
            }
            else
            {
                result.innerText = 'Error!(divBy0)';
                break;
            }

        default:
            if(result.innerText == '0')
            {
                if(value == '*' || value == '/')
                {
                    result.innerText = 0;
                }
                else
                {
                    result.innerText = value;
                }
                
            }
            else{
                result.innerText += value;
            }    
    }

})