console.log("Message logged from workerscript");
function doWork(){
	for(var i=0;i<10000;i++){
		if (i % 100 === 0){
			self.postMessage({type : "progress", percentCompleted : i / 100});
		}
		for(var j=0;j<1000;j++)
			for(var k=0;k<1000;k++)
			{}
	}	
}
self.addEventListener("message",function(msgEvt){
	if (msgEvt.data.type === "doWork"){
		doWork();
		self.postMessage({type : "completed"});
	}
})
