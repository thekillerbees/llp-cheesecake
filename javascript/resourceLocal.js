var custom = {};

custom.templates = {
    main_loc_templ: {
        'checks' : [
            ['main_loc', 'eq' , '1' ]
        ]
    },

   other_loc_templ: {
        'checks' : [
            ['main_loc', 'eq' , '' ]
        ]
    }

};

var custom_ob = {};

custom_ob = {
    active : false,

    tempRec : null,

    updateRecords : function(recs){
        if(recs.length && recs.length > 0 && !custom_ob.active){
            var html = $('store_detail').innerHTML;
            html = html.interpolate(recs[0]);
            $('store_detail_display').innerHTML = html;
            custom_ob.active = true;
            custom_ob.tempRec = recs[0];
        } else if(custom_ob.tempRec != null && recs[0].UID && recs[0].UID != ''){
            var t = [custom_ob.tempRec];
            recs.each(function(e, i){
                if(e.UID != custom_ob.tempRec.UID){
                    e.RECNUM = i+2;
                    e.POINUM = i+2;
                    t.push(e);
                }else{
                }
				

				
            }.bind(this));
            recs = t;
        }
		
		recs.each(function(e){
			e.SHOWSHOUR = (e.SPECIALHOURS && e.SPECIALHOURS != '') ? '1' : '';
			
			if(e.CITY){
			 e.CITY = e.CITY.toUpperCase();
			 e['CITY2'] = e.CITY.gsub(' ', '-');
			}
			if(e.PROVINCE){
			 e.PROVINCE = e.PROVINCE.toUpperCase();	
			  e['PROVINCE2'] = e.PROVINCE.gsub(' ', '-');		 			 
			}
		}.bind(this));
		
		

        return recs;
    }
}; 