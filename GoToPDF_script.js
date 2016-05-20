javascript:(function(){
	sitePatterns = [
		"http://www.jbc.org/content", // 0
	    "http://jcb.rupress.org/content/", // 1
	    "http://emboj.embopress.org/content/", // 2
	    "http://jcs.biologists.org/content/", // 3
	    "http://dev.biologists.org/content/", // 4
	    "http://mcb.asm.org/content/", // 5
	    "http://circ.ahajournals.org/content/", // 6
	    "http://www.bloodjournal.org/content/", // 7
	    "http://cancerres.aacrjournals.org/content/", // 8
	    "http://jmg.bmj.com/content/", // 9
	    "http://onlinelibrary.wiley.com/doi/", // 10
	    "http://press.endocrine.org/doi/" // 11
		];
	var theUrl = window.location.href;
	for (i = 0; i < sitePatterns.length; i++) {
		if (theUrl.startsWith(i)) {
			if (i <= 9) {
				var garbage = theUrl.indexOf('?');
				theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
				theUrl = theUrl.replace(".long", "");
				window.open(theUrl + '.full.pdf', "_self");
			} else if (i == 10) {
				var garbage = theUrl.indexOf('?');
				theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
				window.open(theUrl.replace('abstract', 'pdf'), "_self");
			} else {
				var garbage = theUrl.indexOf('?');
				theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
				window.open(theUrl.replace('doi', 'doi/pdf'), "_self" );
			}
		} else if (i == sitePatterns.length) {
			alert("I don't understand this URL.")
		} else {
			
		}
	}
})();
