#!/bin/sh

i=0;
s=0;
g=0;
	for tmpl in `find . -name \*.html`
	do
		if [[ "$tmpl" =~ 'old' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'bak' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'dead' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'OLD' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'BAK' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'DEAD' ]]; then
			continue
		fi
		i=$((i+1))
		if grep -q "W2GI_core.js" "$tmpl"
		then
			if grep -q "gme-where2getit" "$tmpl"
			then
				echo "$tmpl already has google maps"
				g=$((g+1))
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js/\/w2gi\/javascript\/ace\/2\.1\/prototype.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_core.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_core.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_maps.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_maps.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_slippymap.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_slippymap.js/' $tmpl
				continue
			fi
			if grep -q "maps.googleapis" "$tmpl"
			then
				echo "$tmpl already has google maps"
				g=$((g+1))
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js/\/w2gi\/javascript\/ace\/2\.1\/prototype.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_core.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_core.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_maps.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_maps.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_slippymap.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_slippymap.js/' $tmpl
				continue
			fi
			echo "changing $tmpl"
			s=$((s+1))
			# need to handle static.where2getit.com as well
			if grep -q "static.where2getit.com/w2gi/javascript/ace" "$tmpl"
			then
				echo "found static.where2getit.com"
				perl -pi -e's/\<script type="text\/javascript" src="(http:|https:)?\/\/static\.where2getit\.com\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js">\<\/script>/\<script type="text\/javascript" src="\/\/maps.googleapis.com\/maps\/api\/js?v=3&client=gme-where2getit">\<\/script>\n\<script type="text\/javascript" src="\/\/static\.where2getit\.com\/w2gi\/javascript\/ace\/2\.1\/prototype.js"><\/script>/' $tmpl
			else
				perl -pi -e's/\<script type="text\/javascript" src="\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js">\<\/script>/\<script type="text\/javascript" src="\/\/maps.googleapis.com\/maps\/api\/js?v=3&client=gme-where2getit">\<\/script>\n\<script type="text\/javascript" src="\/w2gi\/javascript\/ace\/2\.1\/prototype.js">\<\/script>/' $tmpl
			fi
			perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_core.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_core.js/' $tmpl
			perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_maps.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_maps.js/' $tmpl
			perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_slippymap.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_slippymap.js/' $tmpl
		fi
	done
	echo "Finished html templates"
	for tmpl in `find . -name \*.tmpl`
	do
		if [[ "$tmpl" =~ 'old' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'bak' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'dead' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'OLD' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'BAK' ]]; then
			continue
		fi
		if [[ "$tmpl" =~ 'DEAD' ]]; then
			continue
		fi
		i=$((i+1))
		if grep -q "W2GI_core.js" "$tmpl"
		then
			if grep -q "gme-where2getit" "$tmpl"
			then
				echo "$tmpl already has google maps"
				g=$((g+1))
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js/\/w2gi\/javascript\/ace\/2\.1\/prototype.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_core.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_core.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_maps.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_maps.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_slippymap.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_slippymap.js/' $tmpl
				continue
			fi
			if grep -q "maps.googleapis" "$tmpl"
			then
				echo "$tmpl already has google maps"
				g=$((g+1))
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js/\/w2gi\/javascript\/ace\/2\.1\/prototype.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_core.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_core.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_maps.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_maps.js/' $tmpl
				perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_slippymap.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_slippymap.js/' $tmpl
				continue
			fi
			echo "changing $tmpl"
			s=$((s+1))
			if grep -q "static.where2getit.com/w2gi/javascript/ace" "$tmpl"
			then
				echo "found static.where2getit.com"
				perl -pi -e's/\<script type="text\/javascript" src="(http:|https:)?\/\/static\.where2getit\.com\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js">\<\/script>/\<script type="text\/javascript" src="\/\/maps.googleapis.com\/maps\/api\/js?v=3&client=gme-where2getit">\<\/script>\n\<script type="text\/javascript" src="\/\/static\.where2getit\.com\/w2gi\/javascript\/ace\/2\.1\/prototype.js"><\/script>/' $tmpl
			else
				perl -pi -e's/\<script type="text\/javascript" src="\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/prototype.js">\<\/script>/\<script type="text\/javascript" src="\/\/maps.googleapis.com\/maps\/api\/js?v=3&client=gme-where2getit">\<\/script>\n\<script type="text\/javascript" src="\/w2gi\/javascript\/ace\/2\.1\/prototype.js">\<\/script>/' $tmpl
			fi
			perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_core.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_core.js/' $tmpl
			perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_maps.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_maps.js/' $tmpl
			perl -pi -e's/\/w2gi\/javascript\/ace\/(1|2)\.(0|7)(6|7|8|9)?\/W2GI_slippymap.js/\/w2gi\/javascript\/ace\/2\.1\/W2GI_slippymap.js/' $tmpl
		fi
	done
	echo "Finished tmpl templates"
	psql -h postgres-master prod postgres -c "update w2gi.locator set clientsidegeocoding = true, clientsidedirections=true where schemaname = 'cheesecake'"
echo "$s templates changed"
echo "$g google already templates changed"
echo "$i client directories inspected"
