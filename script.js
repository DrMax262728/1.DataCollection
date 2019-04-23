function func(arr) {    
        let newArr = arr.map(function (obj) {

        let clonObj = {};           
        for (let key in obj) {

            clonObj[key] = obj[key];

            if (!clonObj.hasOwnProperty(key)) continue;

            if(!isNaN(clonObj[key])) {
                clonObj[key] = +clonObj[key];
            }

            const replace = key.replace("_","");
            if (key !== replace) {
                checkElem(key, replace);
            }

            if (key === "name") {
                checkElem(key, "label");
            }
        }
        return clonObj;

        function checkElem(oldKey, newKey) {
            clonObj[newKey] = clonObj[oldKey];
            clonObj[oldKey] = undefined;
        }
    });
    return newArr;
}