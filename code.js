function playCraps(){
    console.log("playCraps function was called");
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is " + sum );

    document.getElementById("die1Result").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die2Result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("crapsResult").innerHTML = "The sum is: " + sum;

    if (sum == 7 || sum == 11){
        document.getElementById("sumResult").innerHTML = "You lose";
    }
    else if (die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsResult").innerHTML = "You win! :D";
    }
    else{
        document.getElementById("crapsResult").innerHTML = "You pushed (you tried)";
    }
}

function rollDie(){
    var die = Math.random() * 6;
    return Math.ceil(die);
}
function validateForm(){
    var firstname = document.getElementsById("fname").value;

    var lastname = document.getElementsById("lname").value;

    var zipcode = document.getElementsById("zip").value;

    var fullname = fullname + "" + lastname;
    if(fullname.length > 20 || fullname.length1 == 1){
        console.log('invalid name');
        alert("Please enter a name that is shorter than 20 letters")
        return false
    }
    else if (zipcode.length !=5){
        alert("Zipcode was not 5 digits. please try again");
        return false
    }
    else{
        alert("Welcome, " + fullname + ". The secret word is validation");
    }

    
}