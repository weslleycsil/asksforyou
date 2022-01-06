var type = "IE";	//Variable used to hold the browser name
var sURL = unescape(window.location.pathname);

BrowserSniffer();

//detects the capabilities of the browser
function BrowserSniffer() {
	if (navigator.userAgent.indexOf("Opera")!=-1 && document.getElementById) type="OP";		//Opera
	else if (document.all) type="IE";														//Internet Explorer e.g. IE4 upwards
	else if (document.layers) type="NN";													//Netscape Communicator 4
	else if (!document.all && document.getElementById) type="MO";							//Mozila e.g. Netscape 6 upwards
	else type = "IE";		//I assume it will not get here
}

//Show and hide a layer

function ShowLayer(id, action){
	if (type=="IE") eval("document.all." + id + ".style.visibility='" + action + "'");
	if (type=="NN") eval("document." + id + ".visibility='" + action + "'");
	if (type=="MO" || type=="OP") eval("document.getElementById('" + id + "').style.visibility='" + action + "'");
}

//Display and don't display a layer

function displayLayer(id, action){
	if (type=="IE") eval("document.all." + id + ".style.display='" + action + "'");
	if (type=="NN") eval("document." + id + ".display='" + action + "'");
	if (type=="MO" || type=="OP") eval("document.getElementById('" + id + "').style.display='" + action + "'");
}