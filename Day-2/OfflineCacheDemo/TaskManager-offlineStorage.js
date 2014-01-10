function addTaskToStorage(taskName){
	var taskId = new Date().getTime().toString();
	window.localStorage.setItem(taskId,taskName);
	return taskId;
}

function removeTaskFromStorage(taskId){
	window.localStorage.removeItem(taskId);
}

function getAllTasksFromStorage(){
	var tasks = [];
	for(var i=0;i<window.localStorage.length;i++){
		var id = window.localStorage.key(i);
		var name = window.localStorage.getItem(id);
		var task = { taskId : id, taskName : name};
		tasks.push(task);
	}
	return tasks;
}