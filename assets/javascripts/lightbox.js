$(document).ready(function() {
    $("div.attachments a.lightbox, div.attachments a.swf").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
    		openSpeed		:	400, 
    		closeSpeed		:	200
  		});

    $("div.attachments a.pdf").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
    		openSpeed		:	400, 
    		closeSpeed		:	200,
			width			: '100%',
			height			: '100%',
			autoSize		: true,
			iframe : {
				preload: false
			}
		});
});