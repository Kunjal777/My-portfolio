let taskIdCounter = 0;

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskId = `task-${taskIdCounter++}`;
  const li = document.createElement('li');
  li.id = taskId;

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button onclick="toggleTask('${taskId}')">✔️</button>
      <button onclick="deleteTask('${taskId}')">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
});

function toggleTask(id) {
  const task = document.getElementById(id);
  task.querySelector('.task-text').classList.toggle('completed');
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}
