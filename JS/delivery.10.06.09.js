// These functions are used for the Delivery Available graphic in location details listings.

// Created 04/02/2008 JSG - updated 07/02/2009

var strDeliveryNotice

strDeliveryNotice = "This delivery company is not affiliated with The Cheesecake Factory. By clicking 'OK' you agree to be directed to a website not controlled or monitored by The Cheesecake Factory. Please review the Links section of our Terms and Conditions of Use for more information."   

// ===============================

function delivery_boston() {

	if (confirm(strDeliveryNotice)==true) {

		DeliveryWindow=window.open('https://www.diningin.com/menu.aspx?bu=1&restaurantID=1100170','DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_dallas() {

	if (confirm(strDeliveryNotice)==true) {

		DeliveryWindow=window.open('https://www.diningin.com/menu.aspx?bu=4&restaurantID=1100224','DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_oc() {

	if (confirm(strDeliveryNotice)==true) {

		DeliveryWindow=window.open('http://www.rotr.com/myrestaurants.aspx?linkID=KDEG4733kd','DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_ege(intLocation) {

	if (confirm(strDeliveryNotice)==true) {

		var strURL

		if (intLocation == null) {

			strURL = "http://www.eatgoodexpress.com/ordering/menu/menuIndex.aspx?fran=sprinTX&rid=cheesecake";

		} else {

			switch(intLocation) {

			case 71:

				strURL = "http://www.eatgoodexpress.com/ordering/menu/menuIndex.aspx?fran=sprinTX&rid=cheesecake";

				break;

			default:

				strURL = "http://www.eatgoodexpress.com/ordering/menu/menuIndex.aspx?fran=sprinTX&rid=cheesecake";

				break;

			}

		}

		DeliveryWindow=window.open(strURL,'DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_waiter(intLocation) {

	if (confirm(strDeliveryNotice)==true) {

		var strURL

		if (intLocation == null) {

			strURL = "http://waiter.com/cheesecakefactory";

		} else {

			switch(intLocation) {

			case 34:

				strURL = "http://waiter.com/cheesecakefactory/cheesecakefactory34.location.html";

				break;

			case 58:

				strURL = "http://waiter.com/cheesecakefactory/cheesecakefactory58.location.html";

				break;

			case 65:

				strURL = "http://waiter.com/cheesecakefactory/cheesecakefactory65.location.html";

				break;

			case 102:

				strURL = "http://waiter.com/cheesecakefactory/cheesecakefactory102.location.html";

				break;

			default:

				strURL = "http://waiter.com/cheesecakefactory";

				break;

			}

		}

		DeliveryWindow=window.open(strURL,'DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_labite() {

	if (confirm(strDeliveryNotice)==true) {

		var strURL;

		strURL = "https://www.labite.com/cheesecake-factory.aspx";

		DeliveryWindow=window.open(strURL,'DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_delicious() {

	if (confirm(strDeliveryNotice)==true) {

		var strURL;

		strURL = "http://deliciousdelivery.net/cheesecake-factory.html";

		DeliveryWindow=window.open(strURL,'DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_checkout(intLocation) {

	if (confirm(strDeliveryNotice)==true) {

		var strURL

		if (intLocation == null) {

			strURL = "http://1031.deliverycheckout.com/DirectRestaurantLink.aspx?t=1&m=717";

		} else {

			switch(intLocation) {

			case 5:

				strURL = "http://1034.deliverycheckout.com/DirectRestaurantLink.aspx?t=1&r=399";

				break;				

			case 9:

				strURL = "http://1034.deliverycheckout.com/DirectRestaurantLink.aspx?t=1&r=400";

				break;				

			case 66:

				strURL = "http://1031.deliverycheckout.com/DirectRestaurantLink.aspx?t=1&r=853";

				break;				

			case 72:

				strURL = "http://1031.deliverycheckout.com/DirectRestaurantLink.aspx?t=1&r=854";

				break;

			default:

				strURL = "http://1031.deliverycheckout.com/DirectRestaurantLink.aspx?t=1&m=717";

				break;

			}

		}

		DeliveryWindow=window.open(strURL,'DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}

// ===============================

function delivery_rotr(intLocation) {

	if (confirm(strDeliveryNotice)==true) {

		var strURL

		if (intLocation == null) {

			strURL = "http://www.rotr.com/Delivery_Selection.aspx?linkID=KDEG4733kd";

		} else {

			switch(intLocation) {

			case 34:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/San-Francisco/Cheesecake-Factory-Dt-Sf.aspx";

				break;

			case 108:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Huntington-Beach/Cheesecake-Factory-Hb.aspx";

				break;

			case 25:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Irvine/Cheesecake-Factory-Irvine.aspx";

				break;

			case 28:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/San-Diego/Cheesecake-Factory-Mission.aspx";

				break;

			case 33:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Mission-Viejo/Cheesecake-Factory-MV.aspx";

				break;

			case 6:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Newport-Beach/Cheesecake-Factory-Nb.aspx";

				break;

			case 65:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Palo-Alto/Cheesecake-Factory-Palo-Alto.aspx";

				break;

			case 91:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Ranch-Cucamonga/Cheesecake-Factory-Rc.aspx";

				break;

			case 123:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Riverside/Cheesecake-Factory-Riverside.aspx";

				break;

			case 55:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Summerlin/Cheesecake-Factory-Summerlin.aspx";

				break;

			case 100:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Henderson/Cheesecake-Factory-Henderson.aspx";

				break;

			case 47:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Bellevue/Cheesecake-Factory-Bellevue.aspx";

				break;

			case 43:

				strURL = "http://www.rotr.com/restaurant-food-delivery/menus/Seattle/Cheesecake-Factory-Seattle.aspx";

				break;

				

			default:

				strURL = "http://www.rotr.com/Delivery_Selection.aspx?linkID=KDEG4733kd";

				break;

			}

		}

		DeliveryWindow=window.open(strURL,'DeliveryWindow', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=50,top=50'); 

	}

}



