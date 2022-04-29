#!/bin/sh

if ! grep -q "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\"/>" jon.html
then
	echo "found it"
	perl -pi -e's/\<head>/\<head>\n\<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"\/>/' jon.html
fi
