javascript:(function(){
	sitePatterns = [
		/* wiley online library link */
		"http://onlinelibrary.wiley.com/doi/",
		/* this one appears to be specific for J. Endocrinol */
		"http://press.endocrine.org/doi/",
		/* specific to journals from mary ann liebert publishers */
		"http://online.liebertpub.com/doi/abs/",
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
		"http://mbe.oxfordjournals.org/content/"
		];
	if (window.location.hostname === "www.sciencedirect.com") {
		window.location = document.getElementById('pdfLink');
	} else if (window.location.hostname === "link.springer.com") {
		window.location = document.getElementById('action-bar-download-article-pdf-link');
	} else {
		var theUrl = window.location.href;
		for (i = 0; i < sitePatterns.length; i++) {
			if (theUrl.startsWith(sitePatterns[i])) {
				if (i == 0) {
					/* code to remove everything after a ? copied from: */
					/* http://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character */
					var garbage = theUrl.indexOf('?');
					theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
					window.location = theUrl.replace('abstract', 'pdf');
					break;
				} else if (i == 1) {
					var garbage = theUrl.indexOf('?');
					theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
					window.location = theUrl.replace('doi', 'doi/pdf');
					break;
				} else if (i == 2) {
					window.location = theUrl.replace('/abs/', '/pdf/');
				} else {
					var garbage = theUrl.indexOf('?');
					theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
					theUrl = theUrl.replace(".long", "");
					window.location = theUrl + '.full.pdf';
					break;
				}
			} else if (i == (sitePatterns.length - 1)) {
				alert("I don't understand this URL.");
			} else {

			}
		}
	}
})();
