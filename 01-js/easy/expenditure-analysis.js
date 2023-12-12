/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = [];
  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let amount = transactions[i].price;
    let found = false;

    for (let j = 0; j < categoryTotals.length; j++) {
      console.log(categoryTotals[j].hasOwnProperty(category));
      if (categoryTotals[j].hasOwnProperty(category)) {
        categoryTotals[j][category] += amount;
        found = true;
        break;
      }
    }
    if (!found) {
      let newObj = { [category]: amount };
      categoryTotals.push(newObj);
    }
  }
  return categoryTotals;
}

module.exports = calculateTotalSpentByCategory;
