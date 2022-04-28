

 
localStorage.setItem("correct", "score");
localStorage.setItem("quest","numofQuest");


 var startTime = 15;
 var counter = startTime;
 var myInterval;
 const addButton = document.getElementById('counterAddButton');
 const counterSpan = document.getElementById('counter')
 const restartQuiz = document.getElementById ('restartQuiz')

 function createAlert(){
    alert("Your Time Up!")
}

 const counterHandler = ()=>{
     counter --;

     if(counter <=0) {
         createAlert();         
         onSubmit( );         
         clearInterval(myInterval)
         counter = startTime;
     }
     counterSpan.innerText = counter;
 }

 addButton.addEventListener('click',()=>
 {
     
    myInterval = setInterval(counterHandler,1000)
    
     
 })



// When submit is click //

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
    
    window.location.href = "Resutls.html";
    var results = document.getElementById('results');
    results.innerHTML=`<h2> You Scored ${score} point out of ${numofQuest}</h2>`  
    alert(`You Scored ${score} out of ${numofQuest}`);

    
 
    return false;  


    
}   

var zscore = localStorage.getItem ("correct");
var znumofQuest = localStorage.getItem("quest");
var results_page = document.getElementById('results_page');
results_page.innerHTML=`<h2> You Scored ${zscore} point out of ${znumofQuest}</h2>`


