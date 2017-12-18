
                
        $(function() {
            
                // RANDOM NUMBER BETWEEN 19 -120
                var randomMatch = Math.floor(Math.random() * (120-19+1) + 19);
                $("#numberToMatch").text(randomMatch);
        console.log("random number is " + randomMatch);


                


        // RANDOM NUMBER BETWEEN 1 - 12
        var  randomOne = Math.floor((Math.random() * 12) + 1);
    console.log("blue ball is " + randomOne);
        var  randomTwo = Math.floor((Math.random() * 12) + 1);
    console.log("green ball is " + randomTwo);
        var randomThree = Math.floor((Math.random() * 12) + 1);
    console.log("red ball is " + randomThree);
        var randomFour = Math.floor((Math.random() * 12) + 1);3
    console.log("orange ball is " + randomFour);

        

        var total = 0;
        console.log("total is " + total);
        var won = 0;
        var lost = 0;

        $("gamesWon").text(won);
        $("gamesLost").text(lost);


               
   




   
    
    
        // --------------------------RESET
     
        function reset() {

            randomMatch = Math.floor(Math.random() * (120-19+1) + 19);
            $("#numberToMatch").text(randomMatch);
        console.log("random number is " + randomMatch);

            randomOne = Math.floor((Math.random() * 12) + 1);
        console.log(randomOne);
            randomTwo = Math.floor((Math.random() * 12) + 1);
        console.log(randomTwo);
            randomThree = Math.floor((Math.random() * 12) + 1);
        console.log(randomThree);
            randomFour = Math.floor((Math.random() * 12) + 1);3
        console.log(randomFour);
    
            total = 0;
        console.log("total is " + total);
            
            
         

            $("#yourNumberTotal").text(total);
        }

        
    
        function youWon() {
            won++;
            $("#gamesWon").text(won);
            reset();
        console.log("games won = " + won)
        }

        
        function youLost() {
           
            lost++;
            $("#gamesLost").text(lost);
            reset();
        console.log("games lost = " + lost)
        }


    
      
        // ---------------------------------------------------START
        

     

        
        $("#oneblue").on("click", function() {
            total = total + randomOne;
            $("#yourNumberTotal").text(total);     
            if (total === randomMatch) {
                youWon();
            } else if (total > randomMatch) {
                youLost();
            }
        });
    
        $("#twogreen").on("click", function() {
            total = total + randomTwo;
            $("#yourNumberTotal").text(total);
            if (total === randomMatch) {
                youWon();
            } else if (total > randomMatch) {
                youLost();
            }
        });
    
        $("#threered").on("click", function() {
            total = total + randomThree;
            $("#yourNumberTotal").text(total);
            if (total === randomMatch) {
                youWon();
            } else if (total > randomMatch) {
                youLost();
            }
        });
    
        $("#fourorange").on("click", function() {
            total = total + randomFour;
            $("#yourNumberTotal").text(total);
            if (total === randomMatch) {
                youWon();
            } else if (total > randomMatch) {
                youLost();


            }
            
        });
    });
