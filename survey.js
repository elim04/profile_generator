const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//create a variable to hold array of answers. Then can refer to answers for console log paragraph of profile.
const answers = [];

rl.question("What's your name? Nicknames are also acceptable. ", (answer) => {
  answers.push(answer);

  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);

    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);
      

      rl.question("Which meal is your favourite? (eg. Dinner, brunch, lunch, snackies?) ", (answer) => {
        answers.push(answer);
        

        rl.question("What's your favourite thing to eat for that meal you picked? ", (answer) => {
          answers.push(answer);
          
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers.push(answer);
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at? ", (answer) => {
              answers.push(answer);

              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}. ${answers[0]} likes to devour ${answers[4]} for their favourite meal ${answers[3]}. They prefer ${answers[5]} over any other sport and are amazing at ${answers[6]}. `)
              
              rl.close();
            });
           
          });
         
        });
        
      });
      
    });
    
  });

});