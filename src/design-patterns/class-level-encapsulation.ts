interface IItem {
  name: string;
  price: number;
  quantity: number;
}

class Order {
  private lineItems: IItem[];
  private country: string;
  private state: string;
  private city: string;

  constructor(lineItems: IItem[], country: string, state: string, city: string) {
    this.lineItems = lineItems;
    this.country = country;
    this.state = state;
    this.city = city;
  }

  /**
   * This method returns the total price of the Order
   * @returns - The total price of the Order
   * */
  public getOrderTotal(): number {
    let total = 0;
    this.lineItems.forEach((item) => {
      total += item.price * item.quantity;
    })
    total += total * TaxCalculator.getTaxRate(this.country, this.state, this.city);
    return total;
  }
}

class TaxCalculator {
  /**
   * This method returns the tax rate based on the country, state, and city
   * @param country - The country of the Order
   * @param state - The state of the Order
   * @param city - The city of the Order
      * @returns - The tax rate for the Order
   */
  public static getTaxRate(country: string, state: string, city: string): number {
    if (country === 'US') {
      return this.getUSTax(state);
    } else if (country === 'EU') {
      return this.getEUTax(country);
    } else if (country === 'China') {
      return this.getChineseTax(city);
    }
    return 0;
  }

  /**
    * This method returns the tax rate for US based on the state
    * @param state - The state of the Order
      * @returns - The tax rate for the state
    */
  private static getUSTax(state: string): number {
    if (state === 'NY') {
      return 10;
    } else if (state === 'CA') {
      return 8;
    }
    return 0
  }

  /**
  * This method returns the tax rate for EU based on the country
  * @param country - The country of the Order
    * @returns - The tax rate for the country
  */
  private static getEUTax(country: string): number {
    if (country === 'Germany') {
      return 5;
    } else if (country === 'France') {
      return 3;
    }
    return 0
  }

  /**
  * This method returns the tax rate for China based on the city
  * @param product - The product of the Order
    * @returns - The tax rate for the product
    */
  private static getChineseTax(product: string): number {
    if (product === 'Electronics') {
      return 5;
    } else if (product === 'Clothing') {
      return 2;
    }
    return 0
  }
}

const order = new Order([{ name: 'Laptop', price: 1000, quantity: 1 }], 'US', 'NY', 'NYC');
console.log(order.getOrderTotal()); // Output: 1100
