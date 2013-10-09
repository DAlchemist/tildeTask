function ieErrorPage(){
	$('body').children().hide();
	$('#ieError').show();
	$('body').css('background-color', 'white');
}
function ieDetect () {
	
	if(navigator.appName.indexOf("Internet Explorer")!=-1){     //yeah, he's using IE
	    var badBrowser= (
	    	navigator.appVersion.indexOf("MSIE 8")==-1 &&   //v8 is ok
	        navigator.appVersion.indexOf("MSIE 9")==-1 &&   //v9 is ok
	        navigator.appVersion.indexOf("MSIE 1")==-1  //v10, 11, 12, etc. is fine too
	    )

	    if(badBrowser){
	       ieErrorPage();
	    }
	}
}

$(function(){
	ieDetect();
})