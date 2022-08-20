document.getElementById('addWord').addEventListener("click", showadd);
document.getElementById('addthis').addEventListener("click", combine);
var wordbank = [];
var words = [];

function showadd(){
    document.getElementById('newword').hidden = false;
    document.getElementById('newtrans').hidden = false;
    document.getElementById('newuse').hidden = false;
    document.getElementById('addWord').hidden = true;
    document.getElementById('addthis').hidden = false;
}

function addword(){
    var word = document.getElementById('newword').value;
    var trans = document.getElementById('newtrans').value;
    var use = document.getElementById('newuse').value;
    return [word, trans, use]
}

function createword(arr){
    var obj = {
        word: arr[0],
        trans: arr[1],
        use: arr[2]

    }

    if(!words.includes(obj.word)){
        wordbank.push(obj)
        words.push(obj.word)
    }
}

function combine(){
    createword(addword());
}
