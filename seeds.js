var moduleWoman = require('')
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/practice',
{ useNewUrlParser: true,
useUnifiedTopology: true
})
.then(function(conn){
   console.log("db connected...")
})
.catch(function(err){
    console.log(err.message)
})
var womandata = [new moduleWoman({
    imagePath:'http://localhost:6060/public/images/woman/foot.jpeg',
    title:'brand footware',
    dDescription:'good footware !!!',
    price:567

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/footing.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:566

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/footw.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:367

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/footware.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:267

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/jianish.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:567

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/toshina.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:467

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/footware.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:557

}) ,new moduleWoman

({
    imagePath:'http://localhost:6060/public/images/woman/footw.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:567

}), new moduleWoman
({
    imagePath:'http://localhost:6060/public/images/woman/footing.jpeg',
    title:'brand footware',
    Description:'good footware !!!',
    price:567

})
]

var done = 0;
for(var i=0;i<womandata.length;i++){
    womandata[i].save(function(err,result){
        done++;
        if(done===0){
            exit();
        }
    })
}
function exit(){
    mongoose.disconnect();
}