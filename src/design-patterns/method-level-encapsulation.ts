interface IItem {
  name: string;
  price: number;
  quantity: number;
}

interface IOrder {
  items: IItem[];
  country: string;
}
/**-
  * The getOrderTotal function calculates the total price of an order.
  * The total price is calculated by summing the price of each item in the order and adding the tax based on the country.
  * The tax rate is determined by the getTaxRate function.
  * @param order - The order object containing the items and the country.
  * @returns The total price of the order including tax.
  * 
*/
function getOrderTotal(order: IOrder): number {
  let total = 0;

  order.items.forEach(item => {
    total += item.price * item.quantity;
  });

  total += total * getTaxRate(order.country);

  return total;
}

function getTaxRate(country: string): number {
  switch (country) {
    case 'USA':
      return 0.07;
    case 'UK':
      return 0.2;
    case 'AUS':
      return 0.1;
    default:
      return 0;
  }
}

const order: IOrder = {
  items: [
    { name: 'Book', price: 10, quantity: 1 },
    { name: 'Pen', price: 1, quantity: 2 },
  ],
  country: 'USA',
};

console.log(getOrderTotal(order)); // 21.7
