function myReplace(str, before, after) {

    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        var ch = new RegExp(after.charAt(0), "i");
        after = after.replace(ch, after.charAt(0).toUpperCase());
    }
    str = str.replace(before, after);

    return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
