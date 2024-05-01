const five = require("johnny-five"),
board = new five.Board()
ß
board.on("ready", function() {
  let led = new five.Led(13)

const escucha = ()=>{
    let a=''
    async function getYesNo() {
        const response = await fetch('https://yesno.wtf/api');
        const data = await response.json()
        
        return data.answer;
    }
      getYesNo().then(answer => {
        a=answer.toString().trim()
        if(a=='yes'){
            led.on();
            console.log(a + ' foco encendido')
          }else{
            led.off()
            console.log(a + ' foco apagado')
          }
      });

    setTimeout(()=>escucha(),5000)
}
escucha()

})