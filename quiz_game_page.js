player1=localStorage.getItem("Player1");
player2=localStorage.getItem("Player2");
document.getElementById("p1name").innerHTML=player1 + " : ";
document.getElementById("p2name").innerHTML=player2 + " : ";

Fpscore = 0;
Spscore = 0;

document.getElementById("p1score").innerHTML=Fpscore;
document.getElementById("p2score").innerHTML=Spscore;

document.getElementById("qturn").innerHTML="Question turn : " + player1;
document.getElementById("aturn").innerHTML="Answer turn : " + player2;
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2+ "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_box = "<br><br><button class='btn btn-info' onclick='checkB()'> Check </button>";
    row = question_number + input_box + check_box;
    
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
}
qt = "p1";
at = "p2";
function checkB(){
    num = document.getElementById("input_check_box").value;
    answer = parseInt(num);
    if (answer==actual_answer){
        if(at=="p1"){
            Fpscore = Fpscore+1;
            document.getElementById("p1score").innerHTML=Fpscore;
        }else{
            Spscore = Spscore+1;
            document.getElementById("p2score").innerHTML=Spscore;
        }
    }
    if(qt=="p1"){
        qt = "p2";
        document.getElementById("qturn").innerHTML = "Question Turn : "+ player2;
    }else if(qt=="p2"){
        qt = "p1";
        document.getElementById("qturn").innerHTML = "Question Turn : "+ player1;
    }
    if(at=="p2"){
        at="p1";
        document.getElementById("aturn").innerHTML = "Answer Turn : " + player1;
    }else if(at=="p1"){
        at="p2";
        document.getElementById("aturn").innerHTML = "Answer Turn : " + player2;
    }
    document.getElementById("output").innerHTML = " ";
}
