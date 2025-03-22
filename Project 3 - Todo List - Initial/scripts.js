
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
                this.todoList.push({ text: trimmedItem, done: false });
                this.newItem = '';
                localStorage.setItem("todos", JSON.stringify(this.todoList));
            } else {
                alert('Empty item');
            }
        },
        storeTodos() {
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            console.log('updated');
        }
        // clearAll() {
        //     this.todoList = [];
        // },
        // toggleDone(index) {
        //     this.todoList[index].done = !this.todoList[index].done;
        // }
    },
    created() {
        this.todoList = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todoList;
    },
    updated() {
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    }

};

Vue.createApp(handlingTodoList).mount('#app');