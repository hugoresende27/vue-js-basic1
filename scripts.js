var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Le Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea Lemon",
        "price": 46.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea Orange",
        "price": 23.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water XXX",
        "price": 11.49,
        "active": false,
        "quantity": 1
    }
];

const SelfServiceMachine = {
    data() {
        return {
            products: window.products
        }
    },
    computed: {
        total() {
            return this.products
                .filter(product => product.active)
                .reduce((sum, product) => {
                    return sum + (product.quantity * product.price);
                }, 0);
        }
    },
    methods: {
        total: function() {
            let total = 0;
            this.products.forEach(function(item) {
                if (item.active) {
                    total += item.price * item.quantity
                }
            });

            return total;
        }
    }

}

Vue.createApp(SelfServiceMachine).mount('#app');
 
