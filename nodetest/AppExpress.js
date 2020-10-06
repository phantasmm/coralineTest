var express = require('express');

var port=5000;

var app= express();

//Topic 1
app.get('/calGrade/:score',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    let grade='F';
    let score=parseFloat(req.params.score);
    if(score>100||score<0){grade='Please specify number in range0-100';res.send(grade);return}
    else if(score>=80){grade='A'}
    else if(score>=75){grade='B+'}
    else if(score>=70){grade='B'}
    else if(score>=65){grade='C+'}
    else if(score>=60){grade='C'}
    else if(score>=55){grade='D+'}
    else if(score>=50){grade='D'}
    //console.log(score,grade)
    if(score>=0){res.send(grade)}
    else{res.send('Please enter only numer')}
});


app.listen(port,()=>{
    console.log('listening on port '+port)
})
