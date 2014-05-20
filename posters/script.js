$(function() {
    
    /* syntax highlighting */
	$('pre code').each(function(i, e) {
		hljs.highlightBlock(e, '    ')
	});
    
    /* toggle demo code blocks */
	$('pre.show').on("click", function() {
		this.className = this.className.indexOf("show") !== -1 ?
    		this.className.replace("show", "collapse") : this.className.replace("collapse", "show");
	});
    
    
});