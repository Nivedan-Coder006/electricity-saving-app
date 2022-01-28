const DataBase = [
    {
        "question": "How many electricity appliances do you use?",
        "a":"Less than 2",
        "b":"More than 2 but less than 5",
        "c":"More than 5 but less than 8",
        "d":"More than 10"
    },
    {
        "question": "How many hours do you use ac/heaters",
        "a":"Less than 1 hour",
        "b":"More than 1h but less than 2h",
        "c":"More than 4h but less than 6h",
        "d":"More than 6h but less than 10h"
    },
    {
        "question": "Do you have a good habit of turning of appliances when not in use? Rate yourself on the basis of frequency",
        "a":"Always",
        "b":"Sometimes",
        "c":"Less frequently",
        "d":"Never"
    },

    {
        "question": "Do you unplug or turn of large appliances like: TV, Computer, printers at the end of the day",
        "a":"Always",
        "b":"Sometimes",
        "c":"Rarely",
        "d":"Never"
    },
    {
        "question": "How many solar appliances do you use?",
        "a":"More than 7",
        "b":"More than 5 but less than 7",
        "c":"More than 3",
        "d":"I dont use any."
    },
    {
        "question": "How many star rated energy efficient appliance do you use?",
        "a":"4 Star",
        "b":"3 Star",
        "c":"2 Star",
        "d":"None"
    },
    {
        "question": "Do you use smart power strips?",
        "a":"Always",
        "b":"Sometimes",
        "c":"Rarely",
        "d":"Never"
    },
    {
        "question": "Do you dry your cloths and dishes naturally?",
        "a":"Always",
        "b":"Sometimes",
        "c":"Rarely",
        "d":"Never"
    },
    {
        "question": "Do you use natural light during daytime?",
        "a":"Always",
        "b":"Sometimes",
        "c":"Rarely",
        "d":"Never"
    },
    {
        "question": "What typicaly is your monthly electricity Bill?",
        "a":"Less than ₹7,000",
        "b":"More than ₹7,000 but less than ₹14,000",
        "c":"More than ₹14,000 but less than ₹20,000",
        "d":"More than ₹30,000"
    },

]

feedbacks = ["You should try using less electric appliances", "you should decrease the usage time of ac/heaters", "start making a good habit of turning off appliances", "do turn off all appliances at the end of the day", "you should also use solar energy as it is a clean and green energy.", "use star rated energy efficient appliances as they save a lot of Power consumption","start using Smart Power strips as the power load is lower.", "you should dry your cloths with the help of the environment, sunlight and air that it provides to us.", "use natural light instead of artificial in day."]
finalFeedbacks = []
answers = document.querySelectorAll(".ans")
questionNumber = 0
present = DataBase[questionNumber-1]
score = 0;

const getCheckedAnswer = () =>{
    let answer;
    answers.forEach((i) => {
        if(i.checked){
            answer = i.id;
        }
    });
    return answer;
};


document.getElementById("submit").onclick = function(){
    if(questionNumber<10){

        document.getElementById("answer1").classList.remove("ans")
        document.getElementById("answer2").classList.remove("ans")
        document.getElementById("answer3").classList.remove("ans")
        document.getElementById("answer4").classList.remove("ans")
        questionNumber = questionNumber+1
        document.getElementById("submit").textContent = "Next"
        question = document.getElementById("question").textContent = DataBase[questionNumber-1]["question"]
        option1 = document.getElementById("option1").textContent = DataBase[questionNumber-1]["a"]
        option2 = document.getElementById("option2").textContent = DataBase[questionNumber-1]["b"]
        option3 = document.getElementById("option3").textContent = DataBase[questionNumber-1]["c"]
        option4 = document.getElementById("option4").textContent = DataBase[questionNumber-1]["d"]
        if(questionNumber == 1){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[0])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[0])

            }
        }
        if(questionNumber == 2){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[1])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[1])

            }
        }
        if(questionNumber == 3){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[2])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[2])

            }
        }
        if(questionNumber == 4){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[3])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[3])

            }
        }
        if(questionNumber == 5){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[4])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[4])

            }
        }
        if(questionNumber == 6){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[5])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[5])

            }
        }
        if(questionNumber ==7){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[6])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[6])

            }
        }
        if(questionNumber == 8){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[7])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[7])

            }
        }
        if(questionNumber == 9){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[8])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[8])

            }
        }
        if(questionNumber == 10){
            if(getCheckedAnswer()=="answer1"){
                score=score+5
            }
            if(getCheckedAnswer()=="answer2"){
                score=score+3
            }
            if(getCheckedAnswer()=="answer3"){
                score=score+1
                finalFeedbacks.push(feedbacks[9])
            }
            if(getCheckedAnswer()=="answer4"){
                score=score+0
                finalFeedbacks.push(feedbacks[9])

            }
        }
        var ele = document.getElementsByName("answer");
        for(var i=0;i<ele.length;i++)
           ele[i].checked = false;  
    }
    else{
        if(finalFeedbacks.length>0){
            document.getElementById("he").textContent = "Some feedbacks for you to save electricity: " + finalFeedbacks.join(" and ") + "☹️☹️";
        }
        if(score==0){
            document.getElementById("he").textContent = "Some feedbacks for you to save electricity: " + finalFeedbacks.join(" and ") + "☹️☹️";
        }
        else{
            document.getElementById("he").textContent = "Some feedbacks for you to save electricity: " + "You are doing a awesome job keep it up!😁😁";

        }

        document.getElementById("h").textContent = "Your rating out of 50 based on your electricity usage: " + score+"/50";
        document.getElementById("end").classList.remove("ScoreArea")
        document.getElementById("submit").textContent = "Replay"
        document.getElementById("question").textContent = "Here is some feedback and rating for you. If you want to answer again press Replay"
        document.getElementById("submit").onclick = function(){
            document.location.reload()
        }
    }

    
}
