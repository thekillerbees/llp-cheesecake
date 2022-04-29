var custom_ob = {
	updateRecords : function(recs){
		
		recs.each(function(e){
			if(e.DELIVERYLINK2){
			 e.DELIVERYLINK2FLAG = '1';			
			}
			
		}.bind(this));
		
		return recs;
	}
}
