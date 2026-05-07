const API_BASE = 'https://jsonplaceholder.typicode.com';
let tasks = [];        
let currentFilter = 'all';  
let searchQuery = '';

const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const activeCount = document.getElementById('active-count');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');
const emptyState = document.getElementById('empty-state');
document.getElementById('user-name').textContent = 'Ярослав Сергійович';
document.getElementById('user-email').textContent = 'exampleemail@gmai.com';

//Допоміжні функції
function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 4000);
}

function hideError() {
    errorMessage.classList.add('hidden');
}

function updateEmptyState() {
    const filteredTasks = getFilteredAndSearchedTasks();
    if (filteredTasks.length === 0 && tasks.length === 0) {
        emptyState.classList.remove('hidden');
        taskList.classList.add('hidden');
    } else if (filteredTasks.length === 0 && tasks.length > 0) {
        emptyState.classList.remove('hidden');
        taskList.classList.add('hidden');
        emptyState.querySelector('p').textContent = 'Немає завдань за вибраним фільтром';
        emptyState.querySelector('small').textContent = 'Спробуйте змінити фільтр або пошук';
    } else {
        emptyState.classList.add('hidden');
        taskList.classList.remove('hidden');
    }
    
    if (tasks.length === 0) {
        emptyState.querySelector('p').textContent = 'Немає завдань';
        emptyState.querySelector('small').textContent = 'Додайте нове завдання вище';
    }
}

// Лічильник задач
function updateActiveCounter() {
    const activeTasks = tasks.filter(task => !task.completed);
    activeCount.textContent = activeTasks.length;
}

function getFilteredAndSearchedTasks() {
    let filtered = [...tasks];
    
    if (currentFilter === 'active') {
        filtered = filtered.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filtered = filtered.filter(task => task.completed);
    }
    
    // Пошук за текстом
    if (searchQuery && searchQuery.trim() !== '') { 
        const searchLower = searchQuery.toLowerCase();
        filtered = filtered.filter(task => task.title.toLowerCase().includes(searchLower));
    }
    
    return filtered;
}

// Оновлення активного фільтра 
function updateActiveFilter() {
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Отримання кольорової іконки для чекбокса
function createTaskElement(task) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.dataset.id = task.id;
    
    if (task.completed) {
        li.classList.add('completed');
    }
    
    // Чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('task-checkbox');
    
    // Текст завдання
    const span = document.createElement('span');
    span.textContent = task.title;
    span.classList.add('task-title');
    
    // Кнопка видалення
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('task-delete');
    
    li.append(checkbox, span, deleteBtn);
    return li;
}

// Відображення списку завдань
function renderTasks() {
    const filteredTasks = getFilteredAndSearchedTasks();
    
    // Очищуємо список
    taskList.innerHTML = '';
    
    if (filteredTasks.length === 0) {
        updateEmptyState();
        return;
    }
    
    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
    
    updateEmptyState();
}

// ===== API =====
async function loadInitialData() {
    showLoader();
    hideError();
    
    try {
        const [todosResponse, userResponse] = await Promise.all([
            fetch(`${API_BASE}/todos?_limit=20`),
            fetch(`${API_BASE}/users/1`)
        ]);
        
        if (!todosResponse.ok || !userResponse.ok) {
            throw new Error('Помилка завантаження даних');
        }
        
        const [todos, user] = await Promise.all([
            todosResponse.json(),
            userResponse.json()
        ]);
        
        tasks = todos.map(todo => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }));
        
        updateActiveCounter();
        renderTasks();
        
    } catch (error) {
        console.error('Помилка завантаження...', error);
        showError('Не вдалося завантажити завдання.');
    } finally {
        hideLoader();
    }
}

// Додавання нового завдання
async function addTask(title) {
    if (!title.trim()) return;
    
    showLoader();
    hideError();
    
    try {
        const response = await fetch(`${API_BASE}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: title.trim(),
                completed: false,
                userId: 1
            })
        });
        
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }
        
        const newTask = await response.json();
        
        const taskToAdd = {
            id: newTask.id,
            title: newTask.title,
            completed: false
        };
        
        tasks.unshift(taskToAdd); 
        updateActiveCounter();
        renderTasks();
        
        taskInput.value = '';
        addButton.disabled = true;
        
    } catch (error) {
        console.error('Помилка створення:', error);
        showError('Не вдалося створити завдання. Спробуйте пізніше.');
    } finally {
        hideLoader();
    }
}

// Оновлення статусу завдання
async function toggleTaskStatus(id, completed) {
    showLoader();
    hideError();
    
    try {
        const response = await fetch(`${API_BASE}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ completed })
        });
        
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }
        
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = completed;
            updateActiveCounter();
            renderTasks();
        }
        
    } catch (error) {
        console.error('Помилка оновлення:', error);
        showError('Не вдалося оновити завдання. Спробуйте пізніше.');
    
        const taskElement = document.querySelector(`.task-item[data-id="${id}"]`);
        if (taskElement) {
            const checkbox = taskElement.querySelector('.task-checkbox');
            if (checkbox) {
                checkbox.checked = !completed;
            }
        }
    } finally {
        hideLoader();
    }
}

// Видалення завдання
async function deleteTask(id) {
    showLoader();
    hideError();
    
    try {
        const response = await fetch(`${API_BASE}/todos/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }
        
        tasks = tasks.filter(task => task.id !== id);
        updateActiveCounter();
        renderTasks();
        
    } catch (error) {
        console.error('Помилка видалення:', error);
        showError('Не вдалося видалити завдання. Спробуйте пізніше.');
    } finally {
        hideLoader();
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function handleSearch(value) {
    searchQuery = value;
    renderTasks();
}

//Обробка події
taskList.addEventListener('click', (event) => {
    const target = event.target;
    const taskItem = target.closest('.task-item');
    
    if (!taskItem) return;
    
    const taskId = Number(taskItem.dataset.id);
    
    if (target.classList.contains('task-delete')) {
        deleteTask(taskId);
    }
    
    if (target.classList.contains('task-checkbox')) {
        const isChecked = target.checked;
        toggleTaskStatus(taskId, isChecked);
    }
});

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = taskInput.value.trim();
    if (title) {
        addTask(title);
    }
});

taskInput.addEventListener('input', () => {
    addButton.disabled = taskInput.value.trim() === '';
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        taskInput.value = '';
        addButton.disabled = true;
        taskInput.blur(); 
    }
});

searchInput.addEventListener('input', debounce((event) => {
    handleSearch(event.target.value);
}, 300));

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        updateActiveFilter();
        renderTasks();
    });
});

//Ініціалізація
function init() {
    loadInitialData();
    addButton.disabled = true;
}
init();