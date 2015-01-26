function demoModule(){
	var _name = '';

	this.setName = function(name){
		_name = name;
	}

	this.getName = function(){
		console.log(name);
	}
}
obj.experts = demoModule;