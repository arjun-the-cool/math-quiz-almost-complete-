function send()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    anskey = parseInt(num1) * parseInt(num2);
    question = "<h4>" + num1 + "X" + num2 + "</h4>";
    answer = "<br>Answer : <input type='text' id='answer'>"
    check = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question + answer + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}