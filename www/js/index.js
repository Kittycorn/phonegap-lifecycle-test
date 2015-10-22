
    function onLoad() {

	var key = "bottle";
	var value = "green";

	window.localStorage.setItem(key, value);

	var key = "bottle";
	var value = window.localStorage.getItem(key);
    }
