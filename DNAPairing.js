function pairElement(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var t = str.charAt(i);
        var v = "";
        if (t == 'G') {
            v = 'C';
        } else if (t == 'C') {
            v = 'G';
        } else if (t == 'T') {
            v = 'A';
        } else if (t == 'A') {
            v = 'T';
        }

        arr.push([t, v]);
    }


    return arr;
}

pairElement("GCG");
