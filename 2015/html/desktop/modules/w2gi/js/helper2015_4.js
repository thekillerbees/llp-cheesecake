var all_locations_flag = 0;

document.observe('dom:loaded', function () {
	jQuery_include();

	hide_filters_on_search();
	//resize_iframe_dynamically();
	add_data_set_class();
	loadSlippyMap();
	loadStates();
	
});

jQuery( window ).load(function() {
 	resizeSideBar();
 	window.addEventListener('resize', resizeSideBar);
});
    

function resizeSideBar(){
	//jQuery('.location-sidebar').height(jQuery('body').height() - 200);
	jQuery('.location-sidebar-wrapper > div').height(jQuery('body').height() - 200);
}

function jQuery_include () {
	$body = jQuery('body');
	$locationSidebar = jQuery('.location-sidebar');
	$locationSidebarDetail = jQuery('.location-sidebar-detail');
	
	

	function setWrapperHeight () {
		// mobile only - define height of wrapper based on height of visible panel
		// mobile only - this function needs to be called whenever the view is changed
		_newHeight = 0;
		if ($locationSidebar.hasClass('show-detail')) {
			_newHeight = jQuery('.location-sidebar-detail').height();
		} else if ($locationSidebar.hasClass('show-directions')) {
			_newHeight = jQuery('.location-sidebar-directions').height();
		} else {
			_newHeight = jQuery('#collection_poi').height();
		}
		jQuery('.location-sidebar-wrapper').height(_newHeight);

		// W2GI - need postMessage here with _newHeight value. When I see it, will set
		// iframe height on mobile
	}

	// toggle opening/closing of search filter
	
	$body.on('click', '.filterToggle', function (event) {
		event.preventDefault();
		$locationSidebar.toggleClass('show-filter');
	});
	
	document.observe("w2gi:updated", function () {
		resizeSideBar();
		
		Event.observe($('locationSearch'), 'keypress', function(event) {
				if (event.keyCode == Event.KEY_RETURN) {
					$('printTEXT').style.display = 'inline';
					//$$('.location-sidebar-bottom li:first-child').invoke('removeClassName','selected');
					$("nearbyTAB").removeClassName('selected');
					$("comingsoonTAB").removeClassName('selected');
				}
		}); 

		// tab switcher
		setTimeout(function () {
			
			$$(".tab-switch a").each(function (e) {
				e.observe("click", function (ev) {
					var dataname = e.getAttribute("data-name");
					$$("#panel .tab-switch li").each(function (e) {
						e.removeClassName("active");
						$$("#panel .tab-switch li[data-name='"+dataname+"']")[0].addClassName("active");

						jQuery('.tab-pane.active').each(function () {
							$this = jQuery(this);
							// get height of the active .tab-pane and set the height of the parent
							// (.tab-panes)
							$this.parent().height($this.height());
						})
					});
					$$("#panel .tab-pane").each(function (e) {
						e.removeClassName("active");
						$$("#panel .tab-pane[data-name='"+dataname+"']")[0].addClassName("active");

						jQuery('.tab-pane.active').each(function () {
							$this = jQuery(this);
							// get height of the active .tab-pane and set the height of the parent
							// (.tab-panes)
							$this.parent().height($this.height());
						})
					});
				});
			});

			jQuery('.tab-pane.active').each(function () {
				$this = jQuery(this);
				// get height of the active .tab-pane and set the height of the parent
				// (.tab-panes)
				$this.parent().height($this.height());
			});

			$body.on('click', '.tab-switch a', function (event) {
				// prevent anchor link behavior
				event.preventDefault();

				$this = jQuery(this);
				_tabName = $this.attr('href').substring(1);
				$tabContainer = $this.closest('.tab-container');
				$paneToActivate = $tabContainer.find('.tab-pane[data-name="' + _tabName + '"]');

				// remove active class from current tab and pane
				$this.closest('.tab-switch').find('.active').removeClass('active');
				$tabContainer.find('.tab-pane.active').removeClass('active');

				// activate new tab/pane
				$this.parent().addClass('active');
				$paneToActivate.addClass('active');

			});
		}, 100);
	});

}




function add_data_set_class () {

	document.observe('w2gi:updated', function () {
		$$('html')[0].removeClassName('w2gi_poi');
		$$('html')[0].removeClassName('w2gi_maneuvers');
		$$('html')[0].removeClassName('w2gi_more_info');
		$$('html')[0].removeClassName('w2gi_multiple_address');
		$$('html')[0].addClassName('w2gi_' + ace.table.data['panel'].options.attributes['NAME']);
	});

	document.observe('w2gi:proximitySearchError', function (evt) {
		$$('html')[0].removeClassName('w2gi_poi');
		$$('html')[0].removeClassName('w2gi_maneuvers');
		$$('html')[0].removeClassName('w2gi_more_info');
		$$('html')[0].removeClassName('w2gi_multiple_address');
	});
}

function resize_iframe_dynamically () {
	document.observe('dom:loaded', function () {
		setTimeout(function () {
			parent.postMessage("w2gi:iframeHeightUpdated" + "//" + $('w2gi_wrapper').scrollHeight + "//" + $('w2gi_wrapper').scrollWidth, "*");
		}, 10);
	});

	// INITIAL RESULTS ARE RETURNED
	document.observe('w2gi:updated', function () {
		setTimeout(function () {
			parent.postMessage("w2gi:iframeHeightUpdated" + "//" + $('w2gi_wrapper').scrollHeight + "//" + $('w2gi_wrapper').scrollWidth, "*");
		}, 10);
	});

	// SLICE IS UPDATED
	document.observe('w2gi:sliceUpdated', function () {
		setTimeout(function () {
			parent.postMessage("w2gi:iframeHeightUpdated" + "//" + $('w2gi_wrapper').scrollHeight + "//" + $('w2gi_wrapper').scrollWidth, "*");
		}, 10);
	});

	// NO RESULTS ARE RETURNED
	document.observe('w2gi:proximitySearchError', function () {
		setTimeout(function () {
			parent.postMessage("w2gi:iframeHeightUpdated" + "//" + (parseInt($('w2gi_wrapper').scrollHeight) + 300) + "//" + $('w2gi_wrapper').scrollWidth, "*");
		}, 10);
	});

	// BROWSER IS RESIZED
	Event.observe(window, "resize", function () {
		setTimeout(function () {
			parent.postMessage("w2gi:iframeHeightUpdated" + "//" + $('w2gi_wrapper').scrollHeight + "//" + $('w2gi_wrapper').scrollWidth, "*");
		}, 10);
	});
}

var custom_ob = {
	updateRecords : function (recs) {

		recs.each( function (e) {
			if (e.NAME) {
				e.STATE_URLENC = e.STATE.toLowerCase();
				e.CITY_URLENC = e.CITY.toLowerCase().replace(/ /g, "-");
			}
			
			if (e.LARGEPARTIES){
				e.LARGEPARTIES_flag = "1";			
			}else {
				e.LARGEPARTIES_flag = "0";
			}
			
		}.bind(this));
		

		return recs;
	}
}

function loadSlippyMap () {
	var options = {
		dynamicSearch : false,
		geoip : true,
		theme : null,
		routeStyle : {
			strokeWidth : 8,
			strokeOpacity : .5,
			strokeColor : '#0000FF'
		},
		controls : [new OpenLayers.Control.PanZoomBar (), new OpenLayers.Control.Navigation ()]
	};

	OpenLayers.IMAGE_RELOAD_ATTEMPTS = 2;
	OpenLayers.ImgPath = '/cheesecake/2014/assets/images/zoombar/';
	SlippyMap.load('map', 'panel', options);
	window.onunload = function () {
		SlippyMap.unload()
	};
}

function loadStates () {
	ace.collection.appendOptions('filterStates', 'Account::State', {}, 'account_state', 'name', 'description');
}

var tempstring;
function clear_field (textinput) {
	tempstring = textinput.value;
	textinput.value = "";

	textinput.observe('blur', function () {
		restore_field(textinput);
	});
}

function restore_field (textinput) {
	if (textinput.value === "") {
		textinput.value = tempstring;
	}
}

function more_info_from_icon (poinum) {
	performClick($("more_info_" + poinum));
}

function performClick (node) {
	if ((navigator.userAgent.match(/Safari/i))) {
		var evObj = document.createEvent('MouseEvents');
		evObj.initMouseEvent('click', true, true, window);
		node.dispatchEvent(evObj);
	} else {
		node.click();
	}

}

function get_directions_from_more_info () {
	var start_address = $$("#panel #driving_directions_mask input[type='text']")[0].value;
	var end_address = ace.table.data['panel'].records[0].ADDRESS1 + ", " + ace.table.data['panel'].records[0].CITY + ", " + ace.table.data['panel'].records[0].STATE + ", " + ace.table.data['panel'].records[0].POSTALCODE;

	$("start_address").value = start_address;
	$("end_address").value = end_address;

	performClick($("driving_directions_button"));

	return false;
}

function search_by_state () {
	var state_to_search = $("filterStates").value;

	if (state_to_search) {
		state_to_search = $$("#filterStates option:selected")[0].innerHTML;
		if (state_to_search == "Puerto Rico") {
			$("country").value = "";
		} else if (state_to_search == "Oklahoma") {
			state_to_search = "Oklahoma, OK";
		} else if (state_to_search == "Washington") {
			state_to_search = "WA";
		} else if (state_to_search == "District of Columbia") {
			state_to_search = "District of Columbia, DC";
		}
		$("locationSearch").value = state_to_search;
		performClick($("filterSubmit"));
	}
	
	$("nearbyTAB").removeClassName('selected');
	$("comingsoonTAB").removeClassName('selected');
	$("country").value = "US";
}

function hide_filters_on_search () {
	document.observe("w2gi:updated", function () {
		$$(".location-sidebar").each(function (e) {
			e.removeClassName("show-filter")
		});
	});
}

function show_all_locations () {
	$("printTEXT").style.display = "none";
	$("COMINGSOON").value = "";

	$("locationSearch").value = "";
	all_locations_flag = 1;

	//$$('.location-sidebar-bottom li:first-child').invoke('removeClassName','selected');

	document.observe("w2gi:updated", function () {
		if (all_locations_flag === 1) {
			$$("html")[0].addClassName("w2gi_all_locations");
			all_locations_flag = 0;
		} else {
			$$("html")[0].removeClassName("w2gi_all_locations");
		}
	});

	SlippyMap.locator.proximitySearch.search($('getlist_search'));
}

function show_comingsoon () {
	$("printTEXT").style.display = "none";
	//$(this).addClassName('selected');
	//$$('.location-sidebar-bottom li:first-child').invoke('addClassName','selected');
	$("nearbyTAB").removeClassName('selected');
	$("comingsoonTAB").addClassName('selected');

	$("COMINGSOON").value = "1";
	SlippyMap.locator.proximitySearch.search($('getlist_search'),{alertError:false,
		onError: function(){$('panel').update('<div style="padding:10px; font-size:14px;">Currently no locations are opening in the next 60 days. Please check back later.</div>')}
		});
	

}
