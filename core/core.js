let pikos = [];


module.exports.run = function(req, res, next){
	if (req.url == '/'){
		res.send({});
	}
	else if(req.url == '/create'){
		res.send([
					{name: 'Piko', healthStatus: 100, family: 0, clan: 0, country: 0, city: 0, gender: 'male', gold: 0, food: 0, food: 0, tools: 0},
					
					]);
	}
	else{
		res.send(`Access deny.`);
	}
}

