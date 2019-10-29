function validateForm(){
	for(var i=0; i< myform.elements.length;i++){
		if(myform.elements[i].className == "req" &&  myform.elements[i].value.length == ""){
			alert("please fill in all required fields");
			return false;
		}
	}
}