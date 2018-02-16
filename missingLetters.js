function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        var cl = str.charAt(i);
        var nl = String.fromCharCode(str.charCodeAt(i) + 1);

        if (nl !== str.charAt(i + 1)) {
            
            return nl;
        }
    }


    return undefined;
}

fearNotLetter("abce");
