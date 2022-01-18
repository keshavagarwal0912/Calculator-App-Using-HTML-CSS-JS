const i = document.querySelector('input');
const buttons = document.querySelectorAll('button');


for(let b of buttons){
    b.addEventListener('click', ()=>{
        const inputBefore = i.value;
        const pressNow = b.innerText;
        const latest = inputBefore + pressNow;

        if(pressNow === 'C'){
            i.value = "";
        }

        else if(pressNow === '='){
            try{
                i.value = eval(inputBefore)
            }
            catch{
                i.value = "Error"
            }
        }

        else{
            i.value=latest;
        }
        
    })
}
