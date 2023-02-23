const xhr = new XMLHttpRequest();
const resultXhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange',(e)=>{
    if (xhr.readyState === xhr.DONE){
        
        constructPoll(xhr.response)
    }
})
xhr.open('get','https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send()
function constructPoll(object){
    let pollId = object.id;
    let pollTitle = object.data.title;
    let pollAnswer = object.data.answers;
   
    document.getElementById('poll__title').innerHTML = pollTitle
    pollAnswer.forEach((element,index )=> {
        let btn = document.createElement('button');
        btn.innerHTML = element;
        btn.classList.add('poll__answer');
        btn.addEventListener('click', e=>{
            e.preventDefault();
            resultXhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
            resultXhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            resultXhr.send( `vote=${pollId}&answer=${index}` );
            alert('Спасибо за ваш голос')
        })
        document.getElementById('poll__answers').append(btn)

    });

}