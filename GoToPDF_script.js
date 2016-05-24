javascript:(function(){
	sitePatterns = [
		"http://www.jbc.org/content",
		"http://jcb.rupress.org/content/",
		"http://emboj.embopress.org/content/",
		"http://jcs.biologists.org/content/",
		"http://dev.biologists.org/content/",
		"http://mcb.asm.org/content/",
		"http://circ.ahajournals.org/content/",
		"http://www.bloodjournal.org/content/",
		"http://cancerres.aacrjournals.org/content/",
		"http://jmg.bmj.com/content/",
		"http://onlinelibrary.wiley.com/doi/",
		"http://press.endocrine.org/doi/"
		];
	var theUrl = window.location.href;
	for (i = 0; i < sitePatterns.length; i++) {
		if (theUrl.startsWith(sitePatterns[i])) {
			if (i <= 9) {
				var garbage = theUrl.indexOf('?');
				theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
				theUrl = theUrl.replace(".long", "");
				window.open(theUrl + '.full.pdf', "_self");
				break;
			} else if (i == 10) {
				var garbage = theUrl.indexOf('?');
				theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
				window.open(theUrl.replace('abstract', 'pdf'), "_self");
				break;
			} else {
				var garbage = theUrl.indexOf('?');
				theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
				window.open(theUrl.replace('doi', 'doi/pdf'), "_self" );
				break;
			}
		} else if (i == (sitePatterns.length - 1)) {
			alert("I don't understand this URL.");
		} else {

		}
	}
})();
