(function(email){
	var position_of_a=email.indexOf('@');
	var initial_position_of_dot=email.indexOf('.');
	var position_of_dot=email.lastIndexOf('.');
	if(position_of_a<=0  || initial_position_of_dot<=0){
	return false;
	}
	else{
	if(position_of_a<position_of_dot){ //veryfying cases that email doesn't start with '@' or '.' and we use less than to verfy it must contain '@' and '.' 
	return true;
	}
	else{
	return false;
	}}})("abc@abc.com");

