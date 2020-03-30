var tasks = {};
function addTask() {
  n += 1;
  var ullist = document.getElementById("tasklist");
  var task = document.getElementById("tasktext").value;
  var checkbox = document.createElement("input");
  checkbox.setAttribute("id", "checkbox"+n);
  var label = document.createElement("label")
  var list = document.createElement("li");
  label.appendChild(document.createTextNode(task));
  list.appendChild(checkbox);
  list.appendChild(label);
  ullist.insertBefore(list, ullist.childNodes[0]);
  checkbox.type= "checkbox";
  tasks["timestamp "+n] = new Date;
  tasks["task "+n] = task;
}
