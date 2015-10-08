function refreshDoc(){
  // Puts your doc into data -- but does not put it on the localstorage
  var o=splitText($('#doc').val())
  var t=o.title
  var l=o.text
  getAnchors(docs[current])
  refreshNotes(clone(anchors))
  docs[t].text=l
}
/****************************
 * Saving/loading
 * 
 * (rather boring)
 * **************************/
function saveAll(){
  // Saves all docs in storage
}
function load(name){
  // Pulls the named file from local storage/cookie
}
function download(name){
  // I might cut this because copy-paste is easy and download is harder
}
function open(name,text){
  // Pretty much going to be a New->copy->paste->copy->paste macro.
}

/************************
 * Variable declarations
 * 
 * **********************/
var anchors
var docs
var current
var position=[]
var curNote=-1
function defVars(){
  position = []
  anchors = {}
  docs = {1:{
    text:'',
    notes: []
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
  current = localStorage['cur']||1 //To signify that it hasn't been specified.
}
function defWithCookie(){
  anchors = {}
  docs={1:{text:'',notes:[]}}
  current = 1
  var key=docCookies.keys()
  for(var i in key){
    if(i=='cur'){
      current=docCookies.getItem(i)||1
    } else if(i.charAt(0)=='t') {
      docs[i.substring(1)].text=docCookies.getItem(i)
    } else if(i.charAt(0)=='a'){
      var j=i.substring(1);
      docs[j].notes=localStorage[i]
    }
  }
}
/**************************
 * System functions
 * i.e. refreshing & parsing
 * ************************/
function depth(text){
  var i=-1
  var done=false
  while(!done){
    i++
    var s=''
    var t=''
    var reg=new RegExp('\n'+repeat('=',i))
    var reg2=new RegExp('\n'+repeat('\\|',i))
    done=!(reg.test(text)||reg2.test(text))
  }
  return i;
}
function getAnchors(text){
  var n = selection('text')
  var t = text.substring(0,n)
  return getAnchors(t)
}
function getAnchorsInner(t){
  var text=t
  var l=t.split('\n')
  var r=depth(text)+1
  var i = r
  var a={}
  a[r]=l.shift() //Gets the title, and gets it the hell out.
  var lastindex=0
  while(i>0){
    var last=undefined
    for(var j=lastindex;j<l.length;j++){
      if((new RegExp(repeat('=',i))).test(l[j])){
        lastindex=j
        last=l[j].substring(i)
      }
      if(new RegExp(repeat('\\|',r-i)).test(l[j])){
        lastindex=j
        last=l[j].substring(r-i)
      }
    }
    a[i]=last||a[i+1]
  }
  for(var i in l){
    var t = testLn(l[i])
    if(t){ // Placeholder for when custom anchor support is added.
      a[t[0]]=t[1]
    }
  }
}
function checkAnchor(a, text){
  var b=getAnchorsInner(text)
  for(var i in b){if(b[i]!==a[i]){return false}}
  return true
}

function refresh(){
  getAnchors(docs[current])
  refreshDoc()
  refreshExplorer(docs[current])
  refreshNotes(clone(anchors))
}

function sectionsOf(text){
  var r = depth(text)
  t=text.split('\n')
  var a=[[t.shift(),0]]
  while(t.length){
    var line=t.shift()
    var x=0
    while((new RegExp(repeat('\\|',x))).test(line)||(new RegExp(repeat('=',r-x))).test(line)){
      x++
    } // NOTE: THIS IS BACKWARDS COMPARED TO THE ANCHORS!!!
    x--
    if(x){
      t.push([line.substring(0,x),x])
    }
  }
  return a
}

function refreshExplorer(a){
  
}

function refreshNotes(a){
  var anot=[]
  var anoted=[]
  for(var i in docs[current].notes){
    anot=anot.concat(docs[current].notes[i].split('\n--//--\n'))
  }
  docs[current].notes=anot
  for(var i in anot){
    anoted[i]=[anot[i],checkAnchor(a,anot[i]),i]
  }
  refreshNoteList(anoted)
}
function refreshNoteList(list){
  var a=""
  while(list.length){
    var i=list.shift()
    var name=i[0].split('\n')[0]
    var b=i[1]
    var c=i[2]
    a+="<div id='note"+c+"'"+"'onclick='switchNote("+c+")'"
    a+="class="+(b ? "'activeNote'" : "'passiveNote'")+">"+name+"</div>" //Need onclicks!!! Figure this out later?
  }
  $('div').removeClass('openNote')
  $('.class'+activeNote).addClass('openNote') // Not sure yet what this'll do.
} // Probably a bug here
function switchNote(id){
  activeNote=id
  $('div').removeClass('openNote')
  $('.class'+id).addClass('openNote')
}

function displayNotes(){
  return docs[current].join('\n--//--\n') // If people do this manually, it will be a shortcut for multi-note-creation.
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
function repeat(s,t){
  var a=''
  while(t>0){a+=s;t--}
  return a
}
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
} //Makes sure I can actually USE localstorage. If not, only 1 doc for that person, probably :(

function selection(id){return document.getElementById(id).selectionStart}
function testLn(line){
  
}

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
} // From a stackexchange post
