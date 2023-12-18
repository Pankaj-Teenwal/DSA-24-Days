const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const orders = [
    { userId: 1, id: 101, name: "Product A", price: 10 },
    { userId: 1, id: 102, name: "Product B", price: 20 },
    { userId: 2, id: 103, name: "Product C", price: 15 },
  ];

//   const mergedResponse = [
//     {
//       userId: 1,
//       userName: "Alice",
//       orders: [
//         { orderId: 101, name: "Product A", price: 10 },
//         { orderId: 102, name: "Product B", price: 20 },
//       ],
//     },
//     {
//       userId: 2,
//       userName: "Bob",
//       orders: [{ orderId: 103, name: "Product C", price: 15 }],
//     },
//     {
//       userId: 3,
//       userName: "Charlie",
//       orders: [],
//     },
//   ];

  function MergingObject(users, orders) {
    let data = [];
    for (let i = 0; i < users.length; i++) {
      let obj = {};
      obj["userId"] = users[i]["id"];
      obj["userName"] = users[i]["name"];

      let data1 = [];
      for (let j = 0; j < orders.length; j++) {
        let obj1 = {};
        if (users[i]["id"] == orders[j]["userId"]) {
          obj1["orderId"] = orders[j].id;
          obj1["name"] = orders[j].name;
          obj1["price"] = orders[j].price;
          data1.push(obj1);
        }
      }

      obj.orders = data1;

      data.push(obj);
    }
    return data;
  }
  console.log(MergingObject(users, orders));