const button0 = document.getElementById('button0');
const timeCounter = document.querySelector(".timer .timer_sec");


 


let counter;

function onbutton0 () {

    StartTimer(10);
} 

// // If Take Quiz is Clicked
// button0.onclick = function ()
// {
//     StartTimer(10);
// } 

function StartTimer(time){
    counter = setInterval(timer, 1000);
        function timer (){
            timeCounter.textContent = time;
            time--;
        }
}

// When submt is click //

function onSubmit( ) {
    var score=0;
    var numofQuest = 5
    var ansArr = ['a', 'b', 'c', 'd', 'c']

    var q1 = document.forms['quiz'] ['q1'].value;
    var q2 = document.forms['quiz'] ['q2'].value;
    var q3 = document.forms['quiz'] ['q3'].value;
    var q4 = document.forms['quiz'] ['q4'].value;
    var q5 = document.forms['quiz'] ['q5'].value;

    for(var a = 1; a <= numofQuest; a++){
        if(eval('q'+ a) == ''){
            alert("You have missed question number" + a);
        }
    }
        
    for(var a = 1; a <= numofQuest; a++){
        if(eval('q' + a) == ansArr[a-1]){
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML=`<h2> You Scored ${score} point out of ${numofQuest}</h2>`
    alert(`You Scored ${score} out of ${numofQuest}`);
    return false;


    
}   


