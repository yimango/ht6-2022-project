document.getElementById('addWord').addEventListener("click", showadd);
document.getElementById('addthis').addEventListener("click", combine);
var wordbank = [];

function showadd(){
    document.getElementById('newword').hidden = false;
    document.getElementById('newdef').hidden = false;
    document.getElementById('addWord').hidden = true;
    document.getElementById('addthis').hidden = false;
}

function addword(){
    var word = document.getElementById('newword').value;
    var def = document.getElementById('newdef').value;
    return [word, def]
}

function createword(arr){
    var obj = {
        word: arr[0],
        def: arr[1]
    }
    wordbank.push(obj);
}

function combine(){
    createword(addword());
}