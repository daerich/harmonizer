function harmonize(){
const matchpunc = /[:*_](i|I)nnen/g;
const andreg = /(\S+)(I|i)nnen\s+und\s+\1/g;
const whitespace = /^\s+/g;
const taglist = ['p']/*,'h1','h2','h3','h4','h5','h6' ]*/;
for(let ind = 0;ind < taglist.length;ind++){
	let elem = document.getElementsByTagName(taglist[ind]);
	for(let ind = 0;ind < elem.length;ind++){
		let itm = elem.item(ind);
		if(whitespace.test(itm.textContent)){ /* Clean trim (Fixes Wordpress) */
			continue;
		}
		let newStr = itm.innerText.replaceAll(matchpunc,"");
		newStr = newStr.replaceAll(andreg,"$1");
		itm.innerText = newStr;
		}
}
}
harmonize();
