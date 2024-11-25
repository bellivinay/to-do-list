let taskId = 1;
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
  const taskContent = taskInput.value.trim();
  if (!taskContent) return;

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.setAttribute('data-id', taskId);

  taskDiv.innerHTML = `
    <span class="task-title">${taskContent}</span>
    <div class="task-actions">
      <button onclick="markComplete(${taskId})">Complete</button>
      <button onclick="deleteTask(${taskId})">Delete</button>
    </div>
  `;
  taskDiv.style.borderLeftColor = '#6a4caf'; // Dynamic color
  taskList.appendChild(taskDiv);

  taskInput.value = '';
  taskId++;
}

function markComplete(taskId) {
  const task = document.querySelector(`[data-id="${taskId}"]`);
  task.style.textDecoration = 'line-through';
}

function deleteTask(taskId) {
  const task = document.querySelector(`[data-id="${taskId}"]`);
  task.remove();
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}

function openSettings() {
  document.getElementById('settingsModal').style.display = 'flex';
}

function closeSettings() {
  document.getElementById('settingsModal').style.display = 'none';
}
