var form = document.getElementById("myform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('SUBMIT', handleForm);

function grade() {

    // var option1 = document.querySelector('input[name="option1"]:checked').value;
    // var option2 = document.querySelector('input[name="option2"]:checked').value;
    // var option3 = document.querySelector('input[name="option3"]:checked').value;
    // var option4 = document.querySelector('input[name="option4"]:checked').value;
    // var option5 = document.querySelector('input[name="option5"]:checked').value;
    // var option6 = document.querySelector('input[name="option6"]:checked').value;
    // var option7 = document.querySelector('input[name="option7"]:checked').value;
    // var option8 = document.querySelector('input[name="option8"]:checked').value;
    // var option9 = document.querySelector('input[name="option9"]:checked').value;
    // var option10 = document.querySelector('input[name="option10"]:checked').value;
    // var option11 = document.querySelector('input[name="option11"]:checked').value;
    // var option12 = document.querySelector('input[name="option12"]:checked').value;
    // var option13 = document.querySelector('input[name="option13"]:checked').value;
    // var option14 = document.querySelector('input[name="option14"]:checked').value;
    // var option15 = document.querySelector('input[name="option15"]:checked').value;

    // var options = ["Strongly-Disagree", "Disagree", "Neutral", "Agree", "Strongly-Agree"];\

    var test1 = document.getElementById("option1").value;
    var test2 = document.getElementById("option2").value;
    var test3 = document.getElementById("option3").value;
    var test4 = document.getElementById("option4").value;
    var test5 = document.getElementById("option5").value;
    var test6 = document.getElementById("option6").value;
    var test7 = document.getElementById("option7").value;
    var test8 = document.getElementById("option8").value;
    var test9 = document.getElementById("option9").value;
    var test10 = document.getElementById("option10").value;
    var test11 = document.getElementById("option11").value;
    var test12 = document.getElementById("option12").value;
    var test13 = document.getElementById("option13").value;
    var test14 = document.getElementById("option14").value;
    var test15 = document.getElementById("option15").value;

    var test = [test14]
    console.log(test.length);

    if( test!==""){
        alert("PLEASE FILL ALL THE FIELDS")
        document.write("THANK YOU") 
    }

    // document.getElementById("suggestion").innerHTML = "Please Wait as we evaluate your data";
    // alert("Please Wait as we evaluate your data";)

}

