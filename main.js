document.getElementById('addWord').addEventListener("click", showadd);
document.getElementById('addthis').addEventListener("click", combine);
document.getElementById("removeword").addEventListener("click", removeword);
document.getElementById('thisword').addEventListener('click', wordsearch)

var setwordbank = [{"word": "parole", "trans": "speech, word", "use": "noun"}];
var wordbank = [];
var allwords = [].concat(setwordbank, wordbank);
var words = [];
var defaultwords = [];
var wordsstrings = [].concat(words, defaultwords);

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
    console.log(words)
}

function removeword(){
    document.getElementById('wordToBeRmvd').hidden = false;
    document.getElementById('removeword').hidden = true;
    document.getElementById('thisword').hidden = false;
}

function wordsearch(){
    var word = document.getElementById('wordToBeRmvd').value
    if(words.includes(word)){
        words.splice(words.indexOf(word), 1)
        wordbank.splice(words.indexOf(word), 1)
    }
}

function wordoftheday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    Math.Seedrandom(today);
    const i = Math.random()*(wordsstrings.length)
    console.log(Math.random())
    //document.getElementById("wordoftheday").appendChild(document.createTextNode("Le mot du jour: " + allwords[i].word + "," + allwords[i].use + ". Anglais: " + allwords[i].trans + "."))
}

wordoftheday()