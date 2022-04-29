var Lst;

function highlightLinks(obj){

	if(typeof(obj)=="string") {

		obj=document.getElementById(obj);

	}

	if(Lst){

		Lst.className="";

	}

	obj.className="selected";

	Lst=obj;

}



function mouseOverHighlight(currentNode){

	if(currentNode.className!="selected"){

		if((currentNode.style!=null)&&(currentNode.style.display!="none")){

		}else{

			if((currentNode.childNodes[0]!=null)&&(currentNode.childNodes[0].style!=null)&&(currentNode.childNodes[0].style.display!="none")){

			}else{

				currentNode.className="selectedHover";

			}

		}

	}

}



function mouseOutHighlight(currentNode){

	if(currentNode.className!="selected"){

		if((currentNode.style!=null)&&(currentNode.style.display!="none")){

		}else{

			if((currentNode.childNodes[0]!=null)&&(currentNode.childNodes[0].style!=null)&&(currentNode.childNodes[0].style.display!="none")){

			}else{

				currentNode.className="";

			}

		}

	}

}



function setSelectedMenuCatOnLoad(){

	var menuCatNAVID="leftNav_levelOne";

	var menuCatItemTagName="a";

	var styleToSwitchTo="selected";

	var currentLocation=document.location.href;

	currentLocation=currentLocation.substring(0,currentLocation.lastIndexOf("/")+1);

	var allMenuCatNodes=document.getElementById(menuCatNAVID).getElementsByTagName(menuCatItemTagName);

	var currentMenuCatNodeLocation;

	for(x=0;x<allMenuCatNodes.length;x++){

		currentMenuCatNodeLocation=allMenuCatNodes[x].getAttribute("href");

		if(currentMenuCatNodeLocation == contentName){

			allMenuCatNodes[x].parentNode.className=styleToSwitchTo;break;

		}

	}

}	



function setSelectedMenuItemOnLoad(){

	var menuCatNAVID="leftNav_levelTwo";

	var menuCatItemTagName="a";

	var styleToSwitchTo="selected";

	var highlightCompleted=false;

	var firstNode;

	var currentLocation=document.location.href;

	var stringToRemove=document.location.protocol+"//"+document.location.hostname;

	if(currentLocation.indexOf(stringToRemove)!=-1){

		currentLocation=currentLocation.substring(stringToRemove.length);

	}

	var allMenuCatNodes=document.getElementById(menuCatNAVID).getElementsByTagName(menuCatItemTagName);

	var currentMenuCatNodeLocation;

	for(x=0;x<allMenuCatNodes.length;x++){

		currentMenuCatNodeLocation=allMenuCatNodes[x].getAttribute("href");

		if((firstNode==null)&&(allMenuCatNodes[x].parentNode.tagName=="LI")){

			firstNode=allMenuCatNodes[x].parentNode;

		}

		if(currentMenuCatNodeLocation.indexOf(stringToRemove)!=-1){

			currentMenuCatNodeLocation=currentMenuCatNodeLocation.substring(stringToRemove.length);

		}

		if(currentLocation==currentMenuCatNodeLocation){

			allMenuCatNodes[x].parentNode.className=styleToSwitchTo;

			highlightCompleted=true;

			break;

		}

	}

	if((!highlightCompleted)&&(firstNode!=null)){

		firstNode.className=styleToSwitchTo;

	}

}