const products = [
    { id: 1, name: "Product A", price: 100, category: "Electronics" },
    { id: 2, name: "Product B", price: 20, category: "Clothing" },
    { id: 3, name: "Product C", price: 50, category: "Electronics" },
    { id: 4, name: "Product D", price: 10, category: "Clothing" },
];

const filteredProduct = products.filter((item) => {
    if (item.category === "Electronics") {
        return item;
    }
})

for (let i = 0; i < filteredProduct.length; i++) {
    for (let j = i + 1; j < filteredProduct.length; j++) {
        if (filteredProduct[i].price > filteredProduct[j].price) {
            let temp = filteredProduct[i];
            filteredProduct[i] = filteredProduct[j];
            filteredProduct[j] = temp;
        }
    }
}

console.log(filteredProduct)