
    function onLoad() {
    	
	var number = 0;
	var key = ["bottle", "pen", "headphones", "phone", "scarf"];
	var value = ["green", "blue", "white", "black", "green-black"];
	
	for (var i=1; i<length.key; i++)
	{
		
		var key1[i] = key[i-1];
		var value1[i] = value[i-1];
		window.localStorage.setItem(key1[i], value1[i]);
		number ++;
	}
	
	for (var i=1; i<length.key; i++)
	{
		var key1[i] = value[i-1];
		var value1[i] = window.localStorage.getItem(key1[i]);
	}
	alert(value);
    }
