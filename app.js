let express = require('express');
let core = require('./core/core');
let app = express();


// Assign current time to a variable
const now = new Date();

// Print local and UTC timezones
console.log(now.getHours());
console.log(now.getUTCHours());


class Piko{
	constructor(){
		this.birdthDay = new Date();
		this.gender = 0;	
		this.nowDate = new Date();
		this.lifeTime = 0;	
		this.lifeEdge = new Date("January 1 1970 02:15:00").getTime();
		this._status = `Piko alive`;
	}
}

let pikos = [];

app.get('/time', function(i,o){
	o.send({ 
		pikosBird: pikos[0].birdthDay,
		currentTime: new Date()
	});
});

app.get('/status', function(i,o){
	o.send(getPikoLifes());
});

app.get('/new',function(i,o){
	let np = new Piko();
	pikos.push(np);
	o.send(np);
});

app.get('/',function(i,o){
	o.send(getPikoLifes());
});

app.listen(5000);


function getPikoLifes(){
	if (pikos.length != 0){

		for(let i =0; i<pikos.length; i++){
			pikos[i].nowDate = new Date();
			pikos[i].lifeTime = pikos[i].nowDate.getTime() - pikos[i].birdthDay.getTime();
			if (pikos[i]._15minLifeTime < pikos[i].lifeTime) {
				pikos[i]._status = `Pikos dead`;
			}
		}

		return pikos;
	}else{
		return [];
	}
}
