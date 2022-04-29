function scrollPanel(poinum) {

	var from = $('panel').scrollTop;
	var to = $$('#panel .location_row')[poinum - 1].offsetTop

	if(to > from)
		var difference = to - from;
	else if (from > to)
		var difference = from - to;
	
	if(difference < 500)
		var max_speed = 350;
	else
		var max_speed = difference  - 500;

	divScroller(from, to, max_speed);
}




function divScroller(from, to, step_size) {
	if(to > from) {
		if(to - from < Math.ceil(Math.pow(to - from, 1/2)) + 10 ) {
			setTimeout(function() {
				$('panel').scrollTop = to;
			}, 1);
		}
		else {
			setTimeout(function() {
				$('panel').scrollTop += step_size;
				divScroller(from+step_size, to, Math.ceil(Math.pow(to - from, 1/2)) + 10 );
			}, 1);
		}
	}
	
	if(from > to) {
		if(from - to < Math.ceil(Math.pow(from - to, 1/2)) + 10 ) {
			setTimeout(function() {
				$('panel').scrollTop = to;
			}, 1);
		}
		setTimeout(function() {
			$('panel').scrollTop -= step_size;
			divScroller(from- step_size, to, Math.ceil(Math.pow(from - to, 1/2)) + 10 );
		}, 1);
	}
	
	return false;
}