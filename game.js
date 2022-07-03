player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name"),innerHTML = player1_name + " : ";
document.getElementById("player2_name"),innerHTML = player2_name + " : ";

document.getElementById("player1_score"),innerHTML = player1_score + " : ";
document.getElementById("player2_score"),innerHTML = player2_score + " : ";

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    Question_input = document.getElementById("Question_input").value;
    Question_input2 = document.getElementById("Question_input2").value;
    actual_answer = parseInt(Question_input) * parseInt(Question_input2);
    question_number = "<h4>" + Question_input + "X" + Question_input2 + "</h4>"
    input_box = "<br>Answer :<span><input type='text' id='Answer_input' placeholder='Enter Number'></span>"
    check_button = "<br><br><div><button id='button_check' onclick='check()' class='btn btn-info'>Check</button></div>"
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Question_input").value = "";
    document.getElementById("Question_input2").value = "";
}