const findAnnagramString = (str1, str2) => {

    if (str1.length != str2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        console.log("str1 keys", str1[i])
        if (obj1.hasOwnProperty(str1[i])) {
            obj1[str1[i]] = obj1[str1[i]] + 1;
        }
        else {
            obj1[str1[i]] = 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
        console.log("str2 Keys", str2[i])
        if (obj2.hasOwnProperty(str2[i])) {
            obj2[str2[i]] = obj2[str2[i]] + 1;
        }
        else {
            obj2[str2[i]] = 1;
        }
    }

    console.log("Obj1", obj1);
    console.log("Obj2", obj2);

    let keys = Object.keys(obj1);

    for (let i = 0; i < keys.length; i++) {
        if (obj1[keys[i]] !== obj2[keys[i]]) {
            return false;
        }
    }

    return true;

}

let str1 = "carr";
let str2 = "carr";

console.log(findAnnagramString(str1, str2))