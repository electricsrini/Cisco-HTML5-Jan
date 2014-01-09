console.log("Message logged from workerscript");
function someWork(){
	console.log("some work is executed");
}
self.addEventListener("message",function(msgEvt){
	if (msgEvt.data === "doWork"){
		someWork();
		self.postMessage("completed");
	}
})
