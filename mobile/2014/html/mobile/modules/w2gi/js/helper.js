var all_locations_flag = 0;

document.observe('dom:loaded', function() {
	tabSwitcher();
	//jQuery_include();

	//hide_filters_on_search();
	//resize_iframe_dynamically();
	//add_data_set_class();
	loadStates();
});

dd_search = null;

var custom_ob = {
	updateRecords : function(recs){
		
		recs.each(function(e){
			if(e.NAME){
				e.STATE_URLENC = e.STATE.toLowerCase();
				e.CITY_URLENC = e.CITY.toLowerCase().replace(/ /g,"-");
			}
		}.bind(this));
			
		return recs;
	}
}

document.observe('dom:loaded', function() {
	ace.mobile.initialize({
		pageIDs : ['search_panel', 'more_info_panel', 'driving_directions_panel'],
		map : {
			//gps : "my_location",
			noCenterMarker : true,
			noBubbles : true,
			googleMapOptions : {
				streetViewControl : false
			}
		},
		touch : true
	});

	dd_search = new ace.mobile.search({
		noCenterMarker : true,
		map : ace.mobile._search.map, // this is the line gets changed when enabling the map when page is loaded; otherwise use (mapID: 'driving_map',)
		formID : 'driving_directions',
		panelID : 'directions_results',
		gps : false,
		noBubbles : true
	});

	var addrval = '';
	$('endaddress').observe('focus', function(event) {
		addrval = $('endaddress').value;
	}.bind(this));
	$('endaddress').observe('blur', function(event) {
		if (addrval != $('endaddress').value) {
			var lat = $('driving_directions').select('#dest_latitude');
			var lon = $('driving_directions').select('#dest_longitude');
			if (lat.length && lon.length) {
				lat = lat[0];
				lat.value = '';
				lon = lon[0];
				lon.value = '';
			}
		}
	}.bind(this));

	//added this to reset the map when it is shared between direction search and the other search form
	$$('#driving_directions_panel #backbutton').invoke("observe", 'click', function(event) {
		var recnum = $$('#driving_directions input#recnum')[0].value;
		ace.mobile._search.map.clearMarkers();
		ace.mobile._search.map.setMap(ace.table.data['results'].records);
		ace.mobile._search.map.showOnMap(recnum);
	});
	////////////////
}.bind(this));

load_driving_directions_panel = function(recnum, panel) {
	var poi = Object.clone(ace.table.getRecord(recnum, panel));
	dd_search.map.clearMarkers();
	dd_search.map.setMap([poi]);
	dd_search.map.showOnMap(recnum);
	var recnum_input = $('driving_directions').select('input#recnum');
	if (recnum_input.length) {
		recnum_input = recnum_input[0];
		recnum_input.value = recnum;
	}
	$('endaddress').value = poi.ADDRESS1 + " " + poi.CITY + ", " + poi.STATE + ", " + poi.POSTALCODE;
	var lat = $('driving_directions').select('#dest_latitude');
	var lon = $('driving_directions').select('#dest_longitude');
	if (lat.length && lon.length) {
		lat = lat[0];
		lat.value = poi.LATITUDE;
		lon = lon[0];
		lon.value = poi.LONGITUDE;
	}
	ace.table.data['directions_results'] = {
		records : [],
		options : {}
	};
	ace.table.addRecord(poi, 'directions_results');
	$('directions_results').update('');
	dd_search.bubbleSearch($('driving_directions'), true, 1);
}

function jQuery_include(){
$body = jQuery('body');
$locationSidebar = jQuery('.location-sidebar');
$locationSidebarDetail = jQuery('.location-sidebar-detail');

// check if mobile based on platform (this is based on a variable set in our Jade)
isMobile = "mobile" == "mobile"

function showLocationDetails() {
    // If mobile, grab current list item because user clicked View Details link
    // If desktop, they clicked on the li
    if (isMobile)
        $this = jQuery(this).closest('li');
    else
        $this = jQuery(this);

    _resultIndex = $this.index();
    _resultLocation = $this.find('.result-title').text();
    _resultAddress = $this.find('.result-address').html();

    // example of filling in data in the detail pane
    $locationSidebarDetail.find('.location-sidebar-title').text(_resultLocation);
    $locationSidebarDetail.find('.detail-address').html(_resultAddress);

    // bring detail pane to its top
    if (!isMobile)
        $locationSidebarDetail.scrollTop(0);

    // slide over to detail pane
    $locationSidebar.addClass('show-detail');
    if (isMobile)
        setWrapperHeight();

    // W2GI - need postMessage here. When I see it, will scroll user to top of browser on mobile 
}

function showMap() {
    // show map
    $body.addClass('show-map');
    // debug code - reload map iframe for rendering purposes
    jQuery('#locationMap iframe').attr('src', function(i, val) {
        return val;
    });
    // add active class to map toggle
    jQuery('.toggle-switch li.active').removeClass('active');
    jQuery('.show-map-view').parent().addClass('active');
    // close search filter if open
    if ($locationSidebar.hasClass('show-filter')) {
        jQuery('.filterToggle').removeClass('active');
        $locationSidebar.removeClass('show-filter');
    }

    // W2GI - need postMessage here. When I see it, will resize iframe to 100% browser height on mobile
}

function hideMap() {
    // show list
    $body.removeClass('show-map');
    // add active class to view toggle
    jQuery('.toggle-switch li.active').removeClass('active');
    jQuery('.show-list-view').parent().addClass('active');

    // W2GI - need postMessage here with jQuery('.location-sidebar-wrapper').height. When I see it, will set iframe height on mobile
}

function setWrapperHeight() {
    // mobile only - define height of wrapper based on height of visible panel
    // mobile only - this function needs to be called whenever the view is changed
    _newHeight = 0;
    if ($locationSidebar.hasClass('show-detail')) {
        _newHeight = jQuery('.location-sidebar-detail').height();
    } else if ($locationSidebar.hasClass('show-directions')) {
        _newHeight = jQuery('.location-sidebar-directions').height();
    } else {
        _newHeight = jQuery('.location-sidebar-results').height();
    }
    jQuery('.location-sidebar-wrapper').height(_newHeight);

    // W2GI - need postMessage here with _newHeight value. When I see it, will set iframe height on mobile
}

// define height of tab containers to match height of active tab
// this needs to be performed whenever the detail pane is repopulated
jQuery('.tab-pane.active').each(function() {
    $this = jQuery(this);
    // get height of the active .tab-pane and set the height of the parent (.tab-panes)
    $this.parent().height($this.height());
})

// mobile only - define height of wrapper based on height of visible panel
// mobile only - this function needs to be called whenever the view is changed
if (isMobile)
    setWrapperHeight();

// toggle opening/closing of search filter
$body.on('click', '.filterToggle', function(event) {
    event.preventDefault();
    $locationSidebar.toggleClass('show-filter');
    if (isMobile) {
        jQuery(this).toggleClass('active');
        hideMap();
        if ($locationSidebar.hasClass('show-filter')) {
            console.log('filter now on - remove this message');
            // W2GI - need postMessage here. When I see it, will resize iframe to height of filter
        } else {
            console.log('filter now off - remove this message');
            // W2GI - need postMessage here with jQuery('.location-sidebar-wrapper').height. When I see it, will set iframe height on mobile
        }
    }
});

if (isMobile) {
    // action for clicking View Details link on mobile
    $locationSidebar.on('click', '.location-view-details', showLocationDetails);
    $locationSidebar.on('click', '.location-view-map', function() {
        // launch native map application
        alert('Launch native Maps application for this location');
    });

    // toggle between List and Map on mobile
    $body.on('click', '.location-toggle a', function(event) {
        event.preventDefault();
        // check which link was clicked
        if (jQuery(this).hasClass('show-map-view'))
            showMap();
        else
            hideMap();
    });
} else {
    // action for search results unless li has .no-page (for Coming Soon results)
    $locationSidebar.on('click', '.location-sidebar-results .results-list li:not(".no-page")', showLocationDetails);
}

// stop click propagation for links area inside search result
$locationSidebar.on('click', '.result-links', function(event) {
    event.stopPropagation();
});

// back to search results from detail pane
$locationSidebar.on('click', '.location-sidebar-title', function() {
    $locationSidebar.removeClass('show-detail');
    if (isMobile)
        setWrapperHeight();
});

// tab switcher
$locationSidebar.on('click', '.tab-switch a', function(event) {
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

    // resize container heights
    $tabContainer.find('.tab-panes').height($paneToActivate.height());
    if (isMobile) {
        setTimeout(function() {
            setWrapperHeight();
        }, 500)
    }
});

// force show directions pane when Directions button is clicked - for reference
jQuery('#getDirections').on('click', function(event) {
    // prevent default 'button' behavior for debugging
    event.preventDefault();

    $locationSidebar.removeClass('show-detail').addClass('show-directions');
    if (isMobile)
        setWrapperHeight();
});
}

function add_data_set_class(){

	$("results").observe('w2gi:updated',function(){
		$$('html')[0].removeClassName('w2gi_poi');
		$$('html')[0].removeClassName('w2gi_maneuvers');
		$$('html')[0].removeClassName('w2gi_more_info');
		$$('html')[0].removeClassName('w2gi_multiple_address');
		$$('html')[0].addClassName('w2gi_' + ace.table.data['panel'].options.attributes['NAME']);
	});
	
	document.observe('w2gi:proximitySearchError',function(evt){
		$$('html')[0].removeClassName('w2gi_poi');
		$$('html')[0].removeClassName('w2gi_maneuvers');
		$$('html')[0].removeClassName('w2gi_more_info');
		$$('html')[0].removeClassName('w2gi_multiple_address');
	});
}

function hide_map() {
	$('location-sidebar').removeClassName('list_hidden');
	$$('.list_view_button').each(function(e) {
		e.addClassName('active');
	});
	$$('.map_view_button').each(function(e) {
		e.removeClassName('active');
	});
	$('map_canvas').addClassName('map_hidden');
	
}

function show_map() {
	$('location-sidebar').addClassName('list_hidden');
	$$('.list_view_button').each(function(e) {
		e.removeClassName('active');
	});
	$$('.map_view_button').each(function(e) {
		e.addClassName('active');
	});
	$('map_canvas').removeClassName('map_hidden');
}


var tempstring;
function clear_field(textinput) {
	tempstring = textinput.value;
	textinput.value = "";
	
	textinput.observe('blur', function(){
		restore_field(textinput);
	});
}

function restore_field(textinput) {
	if(textinput.value === "") {
		textinput.value = tempstring;	
	}
}

function filterToggle(){
	$$('#locator_search .text-submit-wrapper')[0].toggleClassName('show-filter');
}

function get_more_info(recnum) {
	var f = recnum;
	var g = ace.table.data["results"].records.slice(f - 1, f);

	document.fire("w2gi:track", {
		action: "more_info",
		value: g[0].UID
	});

	ace.table.updateFromRecords($("more_info_results"), g, {
		NAME: "more_info"
	});
	
	$("results").toggleClassName("hidden");
	$("more_info_results").toggleClassName("hidden");

}

function tabSwitcher(){
	document.observe("w2gi:updated", function(){
		// tab switcher
		setTimeout(function(){
			$body = jQuery('body');
		
			$$(".tab-switch a").each(function(e){
				e.observe("click", function(ev){
					var dataname = e.getAttribute("data-name");

					$$("#more_info_results .tab-switch li").each(function(e){
						e.removeClassName("active");
						$$("#more_info_results .tab-switch li[data-name='"+dataname+"']")[0].addClassName("active");
						
							jQuery('.tab-pane.active').each(function () {
								$this = jQuery(this);
								// get height of the active .tab-pane and set the height of the parent (.tab-panes)
								$this.parent().height($this.height());
							})
					});
					$$("#more_info_results .tab-pane").each(function(e){
						e.removeClassName("active");
					
						$$("#more_info_results .tab-pane[data-name='"+dataname+"']")[0].addClassName("active");
						
						jQuery('.tab-pane.active').each(function () {
							$this = jQuery(this);
							// get height of the active .tab-pane and set the height of the parent (.tab-panes)
							$this.parent().height($this.height());
						})
					});
				});
			});

		}, 100);
	});
}

function back_to_results() {
	$('more_info_results').addClassName('hidden');
	$('results').removeClassName('hidden');
	$('map_canvas').removeClassName('hidden');
}

function loadStates() {
	ace.collection.appendOptions('filterStates', 'Account::State', {}, 'account_state', 'name', 'description' );
}

function search_by_state() {
	var state_to_search = $("filterStates").value;
	
	if (state_to_search) {
		state_to_search = $$("#filterStates option:selected")[0].innerHTML;
		$("locationSearch").value = state_to_search;
		performClick($("filterSubmit"));
	}
}

function performClick(node) {
	if((navigator.userAgent.match(/Safari/i))) {
		var evObj = document.createEvent('MouseEvents');
		evObj.initMouseEvent('click', true, true, window);
		node.dispatchEvent(evObj);
	}
	else {
		node.click();	
	}
}

function show_all_locations() {
	$("locationSearch").value = "";
	all_locations_flag = 1;

	document.observe("w2gi:updated", function(){
		if(all_locations_flag === 1){
			$$("html")[0].addClassName("w2gi_all_locations");
			all_locations_flag = 0;
		}
		else {
			$$("html")[0].removeClassName("w2gi_all_locations");
		}
	});
	
	ace.mobile._search._search($('getlist_search'));
	
	//SlippyMap.locator.proximitySearch.search($('getlist_search'));
	//performClick($("getlistSubmitBTN"));
} 