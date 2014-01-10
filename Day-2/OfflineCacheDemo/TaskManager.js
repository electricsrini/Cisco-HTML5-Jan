
	var txtTask, ulTaskList;

	window.addEventListener("DOMContentLoaded",init);
	function init(){
		txtTask = document.getElementById("txtTask");
		ulTaskList= document.getElementById("ulTaskList");
		document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompletedClick);
		document.getElementById("btnYes").addEventListener("click",onBtnYesClick);
		document.getElementById("btnNo").addEventListener("click",onBtnNoClick);
		applicationCache.addEventListener("updateready",onCacheUpdateReady);
		loadAllTasksFromStorage();
		
	}
	function onCacheUpdateReady(){
		document.getElementById("divAppUpgradeMsg").style.display = "block";
	}
	function onBtnYesClick(){
		window.location.reload();
	}
	function onBtnNoClick(){
		document.getElementById("divAppUpgradeMsg").style.display = "none";
	}
	function loadAllTasksFromStorage(){

		var tasks = getAllTasksFromStorage()
		for(var i=0;i<tasks.length;i++){
			var task = tasks[i];
			addTaskToUI(task.taskId,task.taskName);
		}
	}
	function onBtnAddTaskClick(){
		 var taskName = txtTask.value;
		 var taskId = addTaskToStorage(taskName);

		 addTaskToUI(taskId,taskName);
	}
	function addTaskToUI(taskId, taskName){
		var newTaskItem = document.createElement("li");
		 newTaskItem.innerHTML = taskName;
		 newTaskItem.setAttribute("task-id",taskId);
		 newTaskItem.addEventListener("click",onTaskItemClick);
		 ulTaskList.appendChild(newTaskItem);
	}
	function onTaskItemClick(){
		if (this.classList.contains("completed")){
			this.classList.remove("completed");
		} else {
			this.classList.add("completed");
		}
	}
	function onBtnRemoveCompletedClick(){
		for(var i = ulTaskList.children.length-1;i>=0;i--){
			var taskItem = ulTaskList.children[i];
			if (taskItem.classList.contains("completed")){
				var taskId = taskItem.getAttribute("task-id");
				removeTaskFromStorage(taskId);
				taskItem.remove();
			}
		}
	}
