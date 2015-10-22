
function onLoad() {

    var number = 0;
    var key = new Array ("bottle", "pen", "headphones", "phone", "scarf");
    var value = new Array ("green", "blue", "white", "black", "green-black");
	
    for (var i=0; i<key.length; i++)
    {
        window.localStorage.setItem(key[i], value[i]);
        number ++;
    }

    for (var i=0; i<key.length; i++)
    {
        value[i] = window.localStorage.getItem(key[i]);
    }
	
    alert(number);
}
