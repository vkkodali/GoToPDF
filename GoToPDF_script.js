javascript:(function(){
	sitePatterns = [
		/* highwire.org style links ending in content/ go here */
		"http://www.jbc.org/content",
		"http://jcb.rupress.org/content/",
		"http://emboj.embopress.org/content/",
		"http://jcs.biologists.org/content/",
		"http://dev.biologists.org/content/",
		"http://mcb.asm.org/content/",
		"http://jvi.asm.org/content/",
		"http://circ.ahajournals.org/content/",
		"http://www.bloodjournal.org/content/",
		"http://cancerres.aacrjournals.org/content/",
		"http://jmg.bmj.com/content/",
		"http://www.jneurosci.org/content/",
		"http://www.pnas.org/content/",
		"http://jasn.asnjournals.org/content/",
		"http://physiolgenomics.physiology.org/content/",
		/* wiley online library link */
		"http://onlinelibrary.wiley.com/doi/",
		/* this one appears to be specific for J. Endocrinol */
		"http://press.endocrine.org/doi/"
		];
	if (window.location.hostname === "www.sciencedirect.com") {
		window.open(document.getElementById('pdfLink'), "_self");
	} else {
		var theUrl = window.location.href;
		for (i = 0; i < sitePatterns.length; i++) {
			if (theUrl.startsWith(sitePatterns[i])) {
				if (i <= (sitePatterns.length - 3)) {
					/* code to remove everything after a ? copied from: */
					/* http://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character */
					var garbage = theUrl.indexOf('?');
					theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
					theUrl = theUrl.replace(".long", "");
					window.open(theUrl + '.full.pdf', "_self");
					break;
				} else if (i == (sitePatterns.length - 2)) {
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
	}
})();
