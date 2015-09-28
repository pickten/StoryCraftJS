function save(name){}
function load(name){}
function download(name){}
function open(name,text){}

var position = []
var anchors = {}
var docs = {0:""}
var current = 0 //To signify that it hasn't been specified.

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
