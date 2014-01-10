function addTaskToStorage(taskName){
	var taskId = new Date().getTime().toString();
	console.log("Task is expected to be sent to server using AJAX");
	return taskId;
}

function removeTaskFromStorage(taskId){
	//window.localStorage.removeItem(taskId);
	console.log("Task is expected to be remove from server storage");
}

function getAllTasksFromStorage(){
	console.log("There are dummy tasks... however the tasks are expected from the server using AJAX");
	var tasks = [];
	for(var i=1;i<=10;i++){
		var task = { taskId : new Date().getTime() + 100, taskName : "Task - " + i};
		tasks.push(task);
	}
	return tasks;
}