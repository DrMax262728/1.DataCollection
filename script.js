function func(arr) {

    arr = arr.map(function (obj) {
        
    	for (let key in obj) {
    		if (!obj.hasOwnProperty(key)) continue;

    		if(!isNaN(obj[key])) {
                obj[key] = +obj[key];
            }

    		const replace = key.replace("_","");
    		if (key !== replace) {
	    		checkElem(key, replace);
	    	}

	    	if (key === "name") {
                checkElem(key, "label");
            }
    	}
    	return obj;

    	function checkElem(oldKey, newKey) {
   			obj[newKey] = obj[oldKey];
   			delete obj[oldKey];
    	}
	});
    return arr;
}
