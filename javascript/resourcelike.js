var custom_ob = {};

custom_ob = {
    updateRecords : function(recs){
        recs.each(function(e){
            if (e.STATE && e.CITY && e.CLIENTKEY) {
                var locstate = e.STATE.toLowerCase();
                var loccity = unescape(e.CITY.toLowerCase());
                var locuid = e.CLIENTKEY;
                loccity = loccity.replace(/\s+/g,'-');
                e.FBLIKE = '<iframe src="http://www.facebook.com/plugins/like.php?href=http://locations.thecheesecakefactory.com/' + locstate + '/' + loccity + '-' + locuid + '.html&amp;layout=button_count&amp;show_faces=false&amp;width=90&amp;action=like&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe>';
            }
        }.bind(this));

        return recs;
    }
};
