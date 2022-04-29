var custom_ob = {};

custom_ob = {
    updateRecords : function(recs){
        recs.each(function(e){
            if (e.STATE && e.CITY && e.CLIENTKEY) {
                var locstate = e.STATE.toLowerCase();
                var loccity = unescape(e.CITY.toLowerCase());
                var locuid = e.CLIENTKEY;
                loccity = loccity.replace(/\s+/g,'-');
                e.FBLIKE = '<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Flocations.thecheesecakefactory.com%2F' + locstate + '%2F' + loccity + '-' + locuid + '.html&amp;send=false&amp;layout=standard&amp;width=255&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=35&amp;appId=151842091556200" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:35px;" allowTransparency="true"></iframe>';
				
				e.FBURL = '<div class="fb-like" data-href="http://locations.thecheesecakefactory.com/ca/anaheim-127.html" data-send="false" data-width="450" data-show-faces="false"></div>';
				
				
				
				//<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Flocations.thecheesecakefactory.com%2Fca%2Fanaheim-127.html&amp;send=false&amp;layout=standard&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=35&amp;appId=151842091556200" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:35px;" allowTransparency="true"></iframe>
				
				//e.FBLIKE = '<iframe src="http://www.facebook.com/plugins/like.php?href=http%253A%252F%252Flocations.thecheesecakefactory.com%252F' + locstate + '%252F' + loccity + '-' + locuid + '.html&amp;layout=button_count&amp;show_faces=false&amp;width=90&amp;action=like&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe>';
				
            }
        }.bind(this));

        return recs;
    }
};
