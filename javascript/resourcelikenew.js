var custom_ob = {};

custom_ob = {
    updateRecords : function(recs){
        recs.each(function(e){
            if (e.STATE && e.CITY && e.CLIENTKEY) {
                var locstate = e.STATE.toLowerCase();
                var loccity = unescape(e.CITY.toLowerCase());
                var locuid = e.CLIENTKEY;
                loccity = loccity.replace(/\s+/g,'-');
                e.FBLIKE ='' + locstate + '%252F' + loccity + '-' + locuid + '.html';
            }
        }.bind(this));

        return recs;
    }
};
