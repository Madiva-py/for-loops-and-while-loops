function writeCards(names, event){
    const Messages =[];
    for(let name of names){
        let message = `Thank you, ${name}, for the wonderful ${event} gift!`
        Messages.push(message)
    }
    return Messages;
}
console.log (writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number) {

    for (let i = number; i >= 0; i--) {
    
      console.log(i);
    }
  }
  
  countDown(10)


