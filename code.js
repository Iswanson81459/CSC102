/*
use a desriptive function name - functions do something, so make it a verb/action 
() can hold function argument - if you need to pass in information to the function
functions are a nice way to organize our code and make our code reusable
*/
function playCraps()
{
    //log that the function was called
    console.log("playCraps() function was called");
    
    // roll dice 1 
    let roll1 = GenerateD6();
    
    // roll dice 2
    let roll2 = GenerateD6();
    
    console.log("roll1 = " + roll1);
    console.log("roll2 = " + roll2);
    
    let sum = roll1 + roll2;
    
    // display roll 1 in the roll 1 div
    document.getElementById("divRoll1").textContent = "Roll 1 : " + roll1;
            document.getElementById("divRoll2").textContent = "Roll 2 : " + roll2;
            document.getElementById("divSum").textContent = "Sum : " + sum;
            
            let result = "";
            
            // see if the user last - if they rolled sum of 7 or 11
            if(sum == 7 && sum == 11)
                {
                console.log("you lost");
                result = "You LOST!!!!";
            }
            // check if we rolled an even number
            // modulus - do a division problem and we get te hremainder as the result
            // 2/2 = 1 with no remainder = even number
            // 4/2 = 2 with no remainder = even number
            // 5/2 = 2 with a remainder of 1 = odd number
            // we also need to make sure that roll1 and roll2 resulted in the same value
            else if (roll1 % 2 == 0 && roll1 == roll2)
                {
                    console.log("you won");
                    result = "You WON!!!";
                }
                // the catch-all else statement if neither of the above to true, this else statement will run
                else
                {
                    console.log("you tied (pushed)");
                    result = "You tried (you pushed)";
                }
                
            // show the result in the result div
            document.getElementById("divResult").textContent = result;
        }
        
        // create a function to generate a random number
        function GenerateD6()
        {
            // create a variable to hold a number
            // Math.random() is a built in JavaScript function which generates a random number
            let die = Math.random() * 6; // I want to replicate a 6 sided die
            
            // round the number and return the value
            return Math.ceil(die);
        }

        function validateForm()
        {
            let FullName = "";
           
            // get the value the user entered in for their first name
            // we will remove any spaces at the eginning or end with trim()
            let firstName = document.getElementById("txtFirstName").value.trim();

            // get the user's last name
            let lastName = document.getElementById("txtLastName").value.trim();

            let zipCode = document.getElementById("txtZipCode").value.trim();


            console.log("firstName= " + firstName);
            console.log("lastName= " + lastName);
            console.log("zipCode= " + zipCode);

            // validation - we need to make sure that the first name + " " + last name is 20char or less
            // variable to store the message that we wil display to the user
            let message = "";

            // concatenate (add) first name + " " + last name
            fullName = document.getElementById("txtFirstName").value.trim() + " " + document.getElementById("txtLastName").value.trim()

            console.log("fullName= " + fullName);

            // verify if the # of char in the fullName var
            if(fullName.length > 20 || fullName.length == 1 )
            {   // an invalide name has been entered
                message = "Invalid name, please try again."
                console.log("invalid name");
            }
            else if (zipCode.length != 5)
            {
                message = "Invalid zip code, please try again";
                console.log("invalid zip");
            }
            else
            {
                message = "Welcome, " + firstName + ".  The secret word is validation"
            }

            document.getElementById("divMessage").textContent = message;
        }