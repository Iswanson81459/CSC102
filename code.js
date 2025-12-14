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
    
    let intervalID = 0;

    // this function will start th eimage moving around
    function startMove()
    {
        // create a shortcut/nickname to the image in the HTML
        let image = document.getElementById("memeImage");

        // store the current interval id
        intervalID = setInterval(function(){
            // the code that runs repeatedly
            let xCord = getRandomNum();
            let yCord = getRandomNum();
            // change the x cord 
            image.style.left = xCord + "px";
            image.style.top = yCord + "px";
        }, 20);

        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
    }

    function stopMove()
    {
        // call clear interva and pass in the interval id
        clearInterval(intervalID);
        document.getElementById("btnStart").disabled = false;
        document.getElementById("btnStop").disabled = true;
    }
    
    // function to randomly generate a number 
    function getRandomNum()
    {
        return Math.floor(Math.random() * 800);
    }

function testPalin()
{
    // get the value that the user entered in the textbox
    let userInput = document.getElementById("txtInput").value.trim();

    // console.log("user Input: " + userInput);

    isPalindrome(userInput);

    // isPalindrome(userInput) == true
    // this statement implies == true, you could write it out
    if(isPalindrome(userInput))
    {
        document.getElementById("divResult").textContent = "Yes, " + 
        userInput + " is a palindrome."
    }
        else
        {
            document.getElementById("divResult").textContent = "No, " + 
            userInput + " is not a palindrome."
        }
        
    }

function isPalindrome(wordToTest)
{
    // remove any spaces inside of the word(s)
    let cleanedWord = wordToTest.replace(/\s/g, "");

    cleanedWord = cleanedWord.toLowerCase();

    // console.log("cleanedWord= " + cleanedWord);

    // convert the cleaned string to an array
    let arrCleaned = cleanedWord.split("");

    //reverse the array contant
    arrCleaned = arrCleaned.reverse("");

    // take our reversed array and convert it back to a string
    let reversedWord = arrCleaned.join("");

    console.log("Test= " + reversedWord);

    // compare if the cleaned word and the reversed words are the same
    return cleanedWord == reversedWord;
}

// create a funciton to add  an audio elemnet to the HTML div
function addAudio()
{
    let audioElem = document.createElement("audio");
    
    audioElem.setAttribute("id", "myAudio");

    // make sure you use your sound file name here so u can use the us-lab-background.mp3 for testing - make sue the sound file is in the same folder as your html/js files
    audioElem.setAttribute("src", "short-crowd-cheer.mp3");

    // this adds the control dashboard to show that the audio files is working
    audioElem.setAttribute("controls", "controls");

    // add the new aduio elemtnt to the empty div in our HTML
    document.getElementById("divAudio").appendChild(audioElem);

    // hide the add audio btn
    document.getElementById("btnAddAudio").hidden = true;

    document.getElementById("btnPlayAudio").hidden = false;
    document.getElementById("btnPauseAudio").hidden = false;
}

function playAudio()
{
    let audio = document.getElementById("myAudio");
    audio.play();
}

function pauseAudio()
{
    let audio = document.getElementById("myAudio");
    audio.pause();
}

function startAmbienceSound()
{
    console.log("Function Called");
    let audioElem = document.createElement("audio");
    
    audioElem.setAttribute("id", "myAudio");
    
    // make sure you use your sound file name here so u can use the us-lab-background.mp3 for testing - make sue the sound file is in the same folder as your html/js files
    audioElem.setAttribute("src", "scary-ambience-music-347437.mp3");
    
    // add the new aduio elemtnt to the empty div in our HTML
    document.getElementById("divAudio1").appendChild(audioElem);
    
    let audio = document.getElementById("myAudio");
    audio.play();
    
    
    document.getElementById("question2").hidden = false;
    document.getElementById("question2Response1").hidden = false;
    document.getElementById("question2Response2").hidden = false;;
    
    document.getElementById("h2LikeScaryThings").hidden = true;
    document.getElementById("btnLikeScaryYes").hidden = true;
    document.getElementById("btnLikeScaryNo").hidden = true;
}


function playFalloutSound()
{
    let audioElem = document.createElement("audio");
    
    audioElem.setAttribute("id", "myAudio3");

    // make sure you use your sound file name here so u can use the us-lab-background.mp3 for testing - make sue the sound file is in the same folder as your html/js files
    audioElem.setAttribute("src", "falloutLevelUp.mp3");

    // add the new aduio elemtnt to the empty div in our HTML
    document.getElementById("divAudio3").appendChild(audioElem);

    let audio = document.getElementById("myAudio3");
    audio.play();

    document.getElementById("body").style="background-image: url(falloutNewVegas.png); background-size: cover;";

    document.getElementById("resteBtn").hidden = false;

    document.getElementById("question2").hidden = true;
    document.getElementById("question2Response1").hidden = true;
    document.getElementById("question2Response2").hidden = true;

    document.getElementById("h2LikeScaryThings").hidden = false;
    document.getElementById("btnLikeScaryYes").hidden = false;
    document.getElementById("btnLikeScaryNo").hidden = false;

    document.getElementById("resteBtn").hidden = false;

    console.log("Fallout");
}

function playFreddy()
{
    console.log("Freddy");
    let audioElem = document.createElement("audio");
    
    audioElem.setAttribute("id", "myAudio2");

    // make sure you use your sound file name here so u can use the us-lab-background.mp3 for testing - make sue the sound file is in the same folder as your html/js files
    audioElem.setAttribute("src", "freddyFazbearJumpScare.mp3");

    // add the new aduio elemtnt to the empty div in our HTML
    document.getElementById("divAudio2").appendChild(audioElem);

    let audio = document.getElementById("myAudio2");
    audio.play();

    document.getElementById("body").style="background-image: url(freddyBear.png)";

    document.getElementById("question2").hidden = true;
    document.getElementById("question2Response1").hidden = true;
    document.getElementById("question2Response2").hidden = true;

    document.getElementById("h2LikeScaryThings").hidden = false;
    document.getElementById("btnLikeScaryYes").hidden = false;
    document.getElementById("btnLikeScaryNo").hidden = false;

    document.getElementById("resteBtn").hidden = false;
            
}

function ResetPage()
{
    // stop and remove any audio elements created by the page
    ['myAudio', 'myAudio2', 'myAudio3'].forEach(id => {
        const a = document.getElementById(id);
        if (a) {
            a.pause();
            a.currentTime = 0;
            a.remove();
        }
    });
    
    document.getElementById("body").style.backgroundImage = "";
    document.getElementById("body").style.backgroundSize = "";
}