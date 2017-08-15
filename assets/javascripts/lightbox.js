$(document).ready(function() {
  // the file extension regex matching on supported image and pdf types
  var extensionRegex = /\.(png|jpe?g|gif|pdf)$/i;

    // modify thumbnail links in wiki content -> add filename from ./img/@alt to url to support fancybox preview
    $("div.wiki a.thumbnail").attr('href', function(i, v){
      return v.replace(/\/attachments\/(\d+)/g,'/attachments/download/$1') + '/' + $(this).children('img').attr('alt').replace(/(.*\.(png|jp(e)?g|gif))(\s\(.*\))?/g,'$1');
    });

    // modify thumbnails and magnifier links in journal details -> add filename to url to support fancybox preview
    $("div.journal div.thumbnails a, div.journal ul.details li a.icon-magnifier").attr('href', function(i, v){
      return v.replace(/\/attachments\/(\d+)/g,'/attachments/download/$1');
    });

    // add rel attribute to detail links of the same journal entry
    $("div.journal ul.details li a.icon-magnifier").attr('rel', function(i, v){
      return 'image-details-' + $(this).closest('div.journal').attr('id');
    });

    // add rel attribute to thumbnails of the same journal entry
    $("div.journal div.thumbnails a").attr('rel', function(i, v){
      return 'thumbnails-' + $(this).closest('div.journal').attr('id');
    });

    // #40 DMSF support: add class="thumbnail" to DMSF macro thumbnails
    $("a[data-downloadurl][href^='/dmsf/files/'][href$='/view']").each(function(i, obj) {
      var filename = $(this).attr('data-downloadurl').split(':')[1];
      // Also support PDF preview in lightbox
      var isPdf = filename.match(/\.pdf$/i);
      // Bugfix: only apply thumbnail class to image and pdf links
      if(filename.match(extensionRegex)) {
        $(this)
          .attr('class', 'thumbnail')
          .attr('data-fancybox-type', isPdf ? 'iframe' : 'image')
          .attr('title', filename)
          .removeAttr('target')
          .removeAttr('data-downloadurl');
      }
    });

    // Add Fancybox to image links
	$("div.attachments a.lightbox," +
      "div.attachments a.lightbox_preview," +
	  "div.journal ul.details a[href$='.png']," +
	  "div.journal ul.details a[href$='.PNG']," +
	  "div.journal ul.details a[href$='.jpg']," +
	  "div.journal ul.details a[href$='.JPG']," +
	  "div.journal ul.details a[href$='.jpeg']," +
	  "div.journal ul.details a[href$='.JPEG']," +
	  "div.journal ul.details a[href$='.gif']," +
	  "div.journal ul.details a[href$='.GIF']," +
	  "div.journal div.thumbnails a," +
	  "div.wiki a.thumbnail," +
	  "div.attachments a.swf," +
	  ".avatar a").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
			openSpeed		: 300,
			closeSpeed		: 150
		});

    // Add Fancybox to PDF links
    $("div.attachments a.pdf").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
			openSpeed		: 300,
			closeSpeed		: 150,
			width			: '90%',
			height			: '90%',
			autoSize		: true,
			iframe : {
				preload: false
			}
		});
});
