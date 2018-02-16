function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);

    collection.forEach(function (elem) {
        var check = true;
        keys.forEach(function (t) {
            if (!elem.hasOwnProperty(t)) {
                check = false;
            } else {
                if (elem[t] !== source[t]) {
                    check = false;
                }
            }
        });
        if (check) {
            arr.push(elem);
        }

    });

    // Only change code above this line
    return arr;
}

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"});
