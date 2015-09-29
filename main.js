function saveAs(name,name){}
function saveCur(name){
  splitText($('#doc').)// Takes the currently opened file and overwrites the localstorage/cookie thing with it.
}
function saveAuto(name){
  saveAs(name,name) // Shorthand
}
function saveAll(){
  // Saves all docs
}
function load(name){
  // Pulls the named file from local storage/cookie
}
function download(name){
  // I might cut this because copy-paste is easy and download is harder
}
function open(name,text){
  // Pretty much going to be a New->copy->paste macro.
}
var anchors
var docs
var current
var position=[]
function defVars(){
  position = []
  anchors = {}
  docs = {0:{
    text:'',
    notes: ''
  }}
  for(var i in localStorage){
    if(i.charAt(0)=='t'){
      var j=i.substring(1);
      docs[j].text=localStorage[i]
    }
    if(i.charAt(0)=='a'){
      var j=i.substring(1);
      docs[j].notes=localStorage[i]
    }
  }
  current = localStorage['cur']||0 //To signify that it hasn't been specified.
}
function defWithCookie(){
  anchors = {}
  docs={0:{text:'',notes:''}}
  current = 0
  var key=docCookies.keys()
  for(var i in key){
    if(i=='cur'){
      current=docCookies.getItem(i)
    } else if(i.charAt(0)=='t') {
      docs[i.substring(1)].text=docCookies.getItem(i)
    } else if(i.charAt(0)=='a'){
      var j=i.substring(1);
      docs[j].notes=localStorage[i]
    }
  }
}

function getAnchors(text){
  
}

function refresh(){
  getAnchors(docs[current])
  refreshExplorer(clone(anchors))
  refreshNotes(clone(anchors))
}

function refreshExplorer(a){
  
}

function refreshNotes(a){
  
}


/*************************
 * Helper funcs
 * 
 * (i.e. no more sysfuncs)
 * ***********************/

function clone(o){ // makes a duplicate so as to avoid trouble
  var a={}
  for(var i in o){a[i]=o[i]}
  return a;
}
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
} //Makes sure I can actually USE localstorage. If not, only 1 doc for that person :(
