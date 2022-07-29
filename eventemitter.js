const Eventemitter=require("events")
const emitter =new Eventemitter();


emitter.on("message" , (data)=>{
    console.log(data.text)

})
emitter.emit("message" , {text:"Happy!"});


emitter.on('start', () => {
    console.log('started');
}); 
  
emitter.emit("start");