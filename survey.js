const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable `, (ans1) => {
  rl.question(`What's an activity you like doing? `, (ans2) => {
    // TODO: Log the answer in a database
    rl.question('What do you listen to while doing that? ', (ans3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (ans4) => {
        rl.question(`What's your favourite thing to eat for that meal?`, (ans5) => {
          rl.question(`Which sport is your absolute favourite?`, (ans6) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (ans7) => {
              console.log(`My name is  ${ans1}.My favourite activity is ${ans2}.I like listeing to ${ans3}. My favourite meal is ${ans4}.I like eating ${ans5}.My favourite sport is ${ans6}.My superpower is ${ans7}`);
            
              rl.close();
            });
          });
        });
      });
    });
  
    
  });
  // TODO: Log the answer in a database
});