function func(arr) {

    return arr.map(function (obj) {

        let clonObj = {};
        for (let key in obj) {

            if (!obj.hasOwnProperty(key)) continue;

            clonObj[key] = obj[key];

            if (!isNaN(clonObj[key])) {
                clonObj[key] = +clonObj[key];
            }

            const replace = key.replace("_", "");
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
}