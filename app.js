var questions = [
    {
        question:"1)  What is the capital of France?",
        option1:"Berlin",
        option2:"London",
        option3:"Paris",
        correctAns:"Paris"
    },
    {
        question:"2)Which planet is known as the 'Red Planet'?",
        option1:"Venus",
        option2:"Mars",
        option3:"Jupiter",
        correctAns:"Mars"
    },{
        question:"3) What is the chemical symbol for water?",
        option1:"H2O",
        option2:"CO2",
        option3:"O2",
        correctAns:"H2O"
    },{
        question:"4)Which gas do plants absorb during photosynthesis?",
        option1:"Oxygen",
        option2:"Nitrogen",
        option3:"Carbon Dioxide",
        correctAns:"Carbon Dioxide"
    },{
        question:"5) Who was the first President of the United States?",
        option1:"Thomas Jefferson",
        option2:"George Washington",
        option3:"Abraham Lincoln",
        correctAns:"George Washington"
    }
    ,{
        question:"6)  In which year did World War II end?",
        option1:"1943",
        option2:"1945",
        option3:"1947",
        correctAns:"1945"
    }]

    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;

    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)

    function nextQuestion(){
    
        var getOptions = document.getElementsByName("options");
    
        for(var i = 0;i<getOptions.length;i++)
        {
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
                
                if(nextQuestion){
                    min=1;
                    sec=59;
                }     
            }
            getOptions[i].checked = false
        }
        button.disabled = true        
        button.style.backgroundColor = " #4caf50"
        button.style.color = "#fff"
        button.style.borderRadius= "10px"
        button.style.cursor = "pointer"
        
        if(index > questions.length - 1){
    var percentageScore = ` ${((score / questions.length)*100).toFixed(2)}`

           if(percentageScore > 40.00){
                Swal.fire( 
                    {icon:"success",
                    title:   `'Good job!' Your percentage is ${percentageScore}`,
                    confirmButtonText: "OK",
                    color: "blue",
                    background: "black",
                    }                   
               )}
         
                    
               
                else{ Swal.fire(          
                {icon:"error",
                title:  `Try Again Your percentage is ${percentageScore}`,
                confirmButtonText: "OK",
                color: "blue",
                background: "black",
                }                   
                  )}
              if(percentageScore > 80.00){
                Swal.fire(
              {icon:"success",
                title: `Well Done  Your percentage is ${percentageScore}`,
                confirmButtonText: "OK",
                color: "blue",
                background: "black",
                }         
                  )
              }                
            }

        else{
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
                index++
         opt1.style.color = "white"
         opt2.style.color = "white"
         opt3.style.color = "white"
        
       
                }
                
        }

    function clicked()
    {
        button.disabled = false
        button.style.backgroundColor = "blue"
        button.style.color = "yellow"
        button.style.borderRadius= "10px"
        button.style.cursor = "pointer"
       
    }

