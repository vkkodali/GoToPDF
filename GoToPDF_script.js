javascript:(function(){
	var theUrl = window.location.href;
	if (theUrl.startsWith("http://www.jbc.org/content") || 
	    theUrl.startsWith("http://jcb.rupress.org/content/") || 
	    theUrl.startsWith("http://emboj.embopress.org/content/") || 
	    theUrl.startsWith("http://jcs.biologists.org/content/") || 
	    theUrl.startsWith("http://mcb.asm.org/content/") || 
	    theUrl.startsWith("http://circ.ahajournals.org/content/") ||
	    theUrl.startsWith("http://www.bloodjournal.org/content/") ||
	    theUrl.startsWith("http://jmg.bmj.com/content/") ){
		var garbage = theUrl.indexOf('?');
		theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
		theUrl = theUrl.replace(".long", "");
		window.open(theUrl + '.full.pdf', "_self");
	} else if (theUrl.startsWith("http://onlinelibrary.wiley.com/doi/")) {
		var garbage = theUrl.indexOf('?');
		theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
		window.open(theUrl.replace('abstract', 'pdf'), "_self");
	} else if (theUrl.startsWith("http://press.endocrine.org/doi/")){
		var garbage = theUrl.indexOf('?');
		theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
		window.open(theUrl.replace('doi', 'doi/pdf'), "_self" );
	}	else {
		alert("Don't know what's going on here!")
	}
})();
