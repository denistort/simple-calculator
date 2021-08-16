'use strict'

const buttons = document.querySelector('.grid');
const out = document.querySelector('.calculator-display');
let res = '';


buttons.addEventListener('click', (event) => {
    
    if (event.target && event.target.textContent === 'C'){
        res = '0';
        out.textContent = res;        
    }

    //numbers

    if (event.target && event.target.textContent === '1'){
        if (res === '0'){
            res = '1';
            out.textContent = res;  
        } else {
            res += 1;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '2'){
        if (res === '0'){
            res = '2';
            out.textContent = res;  
        } else {
            res += 2;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '3'){
        if (res === '0'){
            res = '3';
            out.textContent = res;  
        } else {
            res += 3;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '4'){
        if (res === '0'){
            res = '4';
            out.textContent = res;  
        } else {
            res += 4;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '5'){
        if (res === '0'){
            res = '5';
            out.textContent = res;  
        } else {
            res += 5;
            out.textContent = res;   
        }
     
    }

    
    if (event.target && event.target.textContent === '6'){
        if (res === '0'){
            res = '5';
            out.textContent = res;  
        } else {
            res += 6;
            out.textContent = res;   
        }
     
    }

    
    if (event.target && event.target.textContent === '7'){
        if (res === '0'){
            res = '7';
            out.textContent = res;  
        } else {
            res += 7;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '8'){
        if (res === '0'){
            res = '8';
            out.textContent = res;  
        } else {
            res += 8;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '9'){
        if (res === '0'){
            res = '9';
            out.textContent = res;  
        } else {
            res += 9;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '0'){
        if (res === '0'){
            res = '0';
            out.textContent = res;  
        } else {
            res += 0;
            out.textContent = res;   
        }
     
    }

    if (event.target && event.target.textContent === '.'){
        if(!res.includes('.')){
            res += '.';
            out.textContent = res;
        }
        else{
            if(res.includes('%') || res.includes('+') || res.includes('-') || res.includes('*') || res.includes('/')){
                res += '.';
                out.textContent = res;
            }
        }
     
    }

    //operations

    if (event.target && event.target.textContent === '%'){
        if(res.includes('%') || res.includes('+') || res.includes('-') || res.includes('*') || res.includes('/') || res ==''){

        } else{
            res += '%';
            out.textContent = res;
        }
    }

    if (event.target && event.target.textContent === '+'){
        if(res.includes('%') || res.includes('+') || res.includes('-') || res.includes('*') || res.includes('/') || res ==''){

        } else{
            res += '+';
            out.textContent = res;
        }
    }

    if (event.target && event.target.textContent === '-'){
        if(res.includes('%') || res.includes('+') || res.includes('-') || res.includes('*') || res.includes('/') || res ==''){

        } else{
            res += '-';
            out.textContent = res;
        }
    }

    if (event.target && event.target.textContent === '/'){
        if(res.includes('%') || res.includes('+') || res.includes('-') || res.includes('*') || res.includes('/') || res ==''){

        } else{
            res += '/';
            out.textContent = res;
        }
    }

    if (event.target && event.target.textContent === 'X'){
        if(res.includes('%') || res.includes('+') || res.includes('-') || res.includes('*') || res.includes('/') || res ==''){

        } else{
            res += '*';
            out.textContent = res;
        }
    }


    //result


    if (event.target && event.target.textContent === '='){
        if(res === ''){

        } else{

            if (res.includes('/') || res.includes('*')){
                if(res.includes('*')) {
                    out.textContent = `${res} = ${Number((eval(res))).toFixed(0)}`;

                    let div = document.createElement('div');
                    div.textContent = `${res} = ${Number((eval(res))).toFixed(0)}`;
                    document.querySelector('.history').append(div);
                } else {
                    out.textContent = `${res} = ${Number((eval(res))).toFixed(2)}`;

                    let div = document.createElement('div');
                    div.textContent = `${res} = ${Number((eval(res))).toFixed(2)}`;
                    document.querySelector('.history').append(div);
                }
    
            } else {
                out.textContent = `${res} = ${eval(res)}`;

            
                let div = document.createElement('div');
                div.textContent = `${res} = ${eval(res)}`;
                document.querySelector('.history').append(div);
            }
            
        }
     
    }


    console.dir(event.target)
})

document.querySelector('.click').addEventListener('click', () => {
    document.querySelector('.history').classList.toggle('open');
});

