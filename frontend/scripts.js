```javascript
document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Fetch tasks from the API
    async function fetchTasks() {
        try {
            const response = await fetch('/tasks');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const tasks = await response.json();
            renderTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            taskList.innerHTML = '<p>Error loading tasks.</p>';
        }
    }

    function renderTasks(tasks) {
        taskList.innerHTML = '';
        if (!tasks || tasks.length === 0) {
            taskList.innerHTML = '<p>No tasks yet.</p>';
            return;
        }

        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <span>${task.title}</span>
                <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
                <button class="completeBtn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="deleteBtn">Delete</button>
            `;
            taskList.appendChild(taskItem);

            // Event listeners for task interaction
            taskItem.addEventListener('click', function(event) {
                if (event.target.classList.contains('completeBtn')) {
                    task.completed = !task.completed;
                    db.update(task).then(() => {
                        renderTasks(fetchTasks()); // Refresh the task list
                    });
                } else if (event.target.classList.contains('deleteBtn')) {
                    db.delete(task).then(() => {
                        renderTasks(fetchTasks()); // Refresh the task list
                    });
                }
            });
        });
    }

    // Initial fetch of tasks
    fetchTasks();

    // Add task functionality
    addTaskBtn.addEventListener('click', async function() {
        const title = prompt('Enter task title:');
        const description = prompt('Enter task description:');

        if (title && description) {
            try {
                const response = await fetch('/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, description })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const newTask = await response.json();
                renderTasks(fetchTasks()); // Refresh the task list
            } catch (error) {
                console.error('Error creating task:', error);
                alert('Error creating task.');
            }
        }
    });
});
```