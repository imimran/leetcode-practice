
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) { return false; }
    var ransomNoteArr = ransomNote.split('');
       console.log("ransomNoteArr", ransomNoteArr)
    var oldMagazineLength = magazine.length;
    ransomNoteArr.forEach(function(item,index){
        console.log("item", item)
        magazine = magazine.replace(item,'');
        console.log("magazine", magazine)
    });
    if(oldMagazineLength == magazine.length +ransomNoteArr.length) {
        return true;
    } else {
        return false;
    }
};

const result = canConstruct("aab", "aabc")
console.log("result", result);