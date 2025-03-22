
const handlingTodoList = {

    data() {
        return {
            todoList : [],
            newItem: ''
        }
    },
    methods: {
        addItem() {
            const trimmedItem = this.newItem.trim();

            if (trimmedItem !== '') {
                // Add item as object to handle "done" state later
                this.todoList.push({ text: trimmedItem, done: false });
                this.newItem = ''; // reset input
            } else {
                alert('Empty item');
            }
        },
        clearAll() {
            this.todoList = [];
        },
        toggleDone(index) {
            // Toggle 'done' status of item
            this.todoList[index].done = !this.todoList[index].done;
        }
    }

};

Vue.createApp(handlingTodoList).mount('#app');