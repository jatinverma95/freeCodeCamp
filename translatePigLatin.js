function translatePigLatin(str) {
    var check = true;
    var strTemp = "";
    while (str.charAt(0) !== 'a' && str.charAt(0) !== 'e' && str.charAt(0) !== 'i' && str.charAt(0) !== 'o' && str.charAt(0) !== 'u') {
        {
            strTemp += str.slice(0, 1);
            str = str.slice(1, str.length);
            check = false;
        }
    }
    if (check) {
        str += "way";
    } else {
        str += strTemp + "ay";
    }

    console.log(str);
}

translatePigLatin("consonant");
