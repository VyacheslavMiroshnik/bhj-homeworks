let mainCheck = Array.from(document.querySelectorAll('.interests_main>ul>.interest>label'));
let childCheck =[];
mainCheck.forEach(el => {
    
   childCheck.push(Array.from(el.closest('li').querySelector('ul').querySelectorAll('li>label')));
   
})

childCheck.map((element,index)=>{
    element.forEach(el=>{
        el.addEventListener('change',()=>{
            if (el.querySelector('input').checked){
                mainCheck[index].querySelector('input').checked=true;
            } else {
                if (element.filter(element=>element.querySelector('input').checked).length===0){
                    mainCheck[index].querySelector('input').checked=false;
                }
            }
        })
    })
})
mainCheck.forEach((element,id) => {

    element.addEventListener('change',()=>{
        if(element.querySelector('input').checked){
            childCheck[id].forEach(el=> el.querySelector('input').checked=true)
            
        } else{
            childCheck[id].forEach(el=> el.querySelector('input').checked=false)

        }
    })
})