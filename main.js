function save(name){}
function load(name){}
function download(name){}
function open(name,text){}
var anchors
var docs
var current
function defVars(){var position = []
  anchors = {}
  docs = {0:''}
  for(var i in localStorage){
    if(i.charAt(0)=='d'){
      var j=i.substring(1);docs[j]=localStorage[i]
    }}
  current = localStorage['cur']||0 //To signify that it hasn't been specified.
}
function defWithCookie(){
  anchors = {}
  docs={0:''}
  current = 0
  var key=docCookies.keys()
  for(var i in key){
    if(i=='cur'){
      current=docCookies.getItem(i)
    } else {
      docs[i.substring(1)]=docCookies.getItem(i)
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
