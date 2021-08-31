function fire(state,script){
	if(state){
		res = browser.contentScripts.register
		({matches: ["http://*/*","https://*/*"],
		js: [{file:"harmonizer.js"}]
		});
		return res;
	}else{
		if(script != null){
			script.then((script)=>script.unregister());
		}
	}
}
function main(){
	let state = false;
	let script = null;
	browser.browserAction.onClicked.
		addListener((e)=>{
		state = !state;	
		script=fire(state,script);
	});
	console.log("Harmonizer intialized!");
}
main();
