var map_element = document.getElementsByClassName('map');

function changeMap () {
  console.log('cm run')
  var windowheight = window.innerHeight;
  var difference = windowheight -3;
  map_element[0].style.height = difference +"px";
}

//window.addEventListener("load", changeMap, false);
//window.addEventListener("resize", changeMap, false);

function moreinfo_change() {
    if(window.innerWidth > 800) {
       var topbox = document.getElementsByClassName('form-wrapper');
       var getpoi = document.getElementsByClassName('poi');
       var getmap = document.getElementsByClassName('map');
       topbox[0].style.display = "none";
       getpoi[0].style.top = "25px";
       getpoi[0].style.overflow = "hidden";
       getmap[0].style.pointerEvents ="none";
   } 
}

 function moreinfo_changeback() {
   var topbox = document.getElementsByClassName('form-wrapper');
   var getpoi = document.getElementsByClassName('poi');
   var getmap = document.getElementsByClassName('map');
   topbox[0].style.display = "block";
   getpoi[0].style.top = "";
   //getpoi[0].style.overflow = "auto";
   getmap[0].style.pointerEvents ="all";
}

function getdirections_moreinfo(){ 
    var bubble_open = document.getElementById('open_bubble'); bubble_open.click(); 
    var container_bubble = document.getElementsByClassName('ol-overlaycontainer-stopevent'); 
    var bubble_input = document.getElementById('input_bubble'); 
    var input = document.getElementById('input_moreinfo'); 
    var bubble_submit = document.getElementById('bubble_submit'); 
    container_bubble[0].style.display="none"; 
    bubble_input.value = input.value;
    bubble_submit.click();
}

// MOBILE FUNCTIONS //

function showMap() {
  var mapEl = document.getElementById('mapEl')
   if (mapEl.className.indexOf('active') === -1) {
    console.log(mapEl.className)
    mapEl.className += ' active'
    var poiEl = document.getElementById('poiEl')
    poiEl.className += ' hidden'
    //var getmap = document.getElementsByClassName('map');
    //var getpoi = document.getElementsByClassName('poi');
    var listview = document.getElementById('listview');
    var mapview = document.getElementById('mapview');
    var attrib = document.getElementsByClassName('attribution');
    //getmap[0].style.left = "2%";
    //getpoi[0].style.left="-9000px";
    //getpoi[0].style.height="100px";
    listview.classList.remove('active');
    mapview.classList.add('active');
    attrib[0].style.display="block";
    parent.postMessage("w2gi:iframeHeightUpdated" + "//" + 500 + "//" + $('#w2gi_wrapper').width(),"*");
  }
}

function showList() {
    var mapEl = document.getElementById('mapEl')
    mapEl.className = mapEl.className.replace(' active', '')

    var poiEl = document.getElementById('poiEl')
    poiEl.className = poiEl.className.replace(' hidden', '')

    //var getmap = document.getElementsByClassName('map');
    //var getpoi = document.getElementsByClassName('poi');
    var listview = document.getElementById('listview');
    var mapview = document.getElementById('mapview');
    var attrib = document.getElementsByClassName('attribution');
    //getmap[0].style.left = "-9000px";
    //getpoi[0].style.left="0";
    //getpoi[0].style.height="auto";
    // listview.style.color = "gray";
    // listview.style.backgroundColor = "white";
    // mapview.style.color = "white";
    // mapview.style.backgroundColor = "#014E62";
    listview.classList.add('active');
    mapview.classList.remove('active');
    attrib[0].style.display="none";

    parent.postMessage("w2gi:iframeHeightUpdated" + "//" + poiEl.scrollHeight + "//" + $('#w2gi_wrapper').width(),"*");
}



// Resolves discrepancies between Desktop and Mobile views
function checkWidth() {
  console.log('cw run')
    var indicator = document.getElementById('indicator');
    //var getpoi = document.getElementsByClassName("poi");
    //var getmap = document.getElementsByClassName("map");
    var goback = document.getElementById('back_image');
    var attrib = document.getElementsByClassName('attribution');

    if(window.innerWidth > 801){
        if(indicator.className == "mobile") {
        attrib[0].style.display="block";
        // close_filters_mobile();
        //getpoi[0].style.left="100px";
        //getpoi[0].style.height="auto";
        //getmap[0].style.left="0";
        var check = document.body.contains(goback);
         if (check == true) {
           goback.click();
         } else { 
         }
     }
        indicator.className = "desktop";
    }

    if(window.innerWidth < 802) {
         if(indicator.className == "desktop") {
            attrib[0].style.display="none";
            // close_filters();
            showList();
            var check = document.body.contains(goback);
             if (check == true) {
               goback.click();
             } else {
             }
         }
        indicator.className = "mobile";
    }
}

// window.addEventListener("resize", checkWidth, false);