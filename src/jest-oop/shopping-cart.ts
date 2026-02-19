/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    shopping-cart.ts
 * @author  Paula Díaz Jorge
 * @date    19/02/2026
 */

/**
 * @desc    A simple shopping cart class that allows adding, removing items and calculating totals.
 */
export class ShoppingCart {
  private items = new Map<string, { price: number; qty: number }>();

  /**
   *  @desc   Adds an item to the cart. If the item already exists, it updates the quantity.
   *          Price must be non-negative and quantity must be positive.
   * @param name 
   * @param price 
   * @param qty 
   */
  add(name: string, price: number, qty: number = 1): void {
    if (price < 0) throw new Error("price must be >= 0");
    if (qty <= 0) throw new Error("qty must be > 0");

    const existing = this.items.get(name);
    if (!existing) {
      this.items.set(name, { price, qty });
      return;
    }

    if (existing.price !== price) throw new Error("price mismatch");
    existing.qty += qty;
  }

  /**
   * @desc   Removes a given quantity of an item from the cart. If quantity exceeds existing, 
   *         it removes the item completely. Quantity must be positive and item must exist in the cart.
   * @param name 
   * @param qty 
   */
  remove(name: string, qty: number = 1) {
    if (qty <= 0) throw new Error("qty must be > 0");

    const existing = this.items.get(name);
    if (!existing) throw new Error("item not found");

    if (qty >= existing.qty) {
      this.items.delete(name);
    } else {
      existing.qty -= qty;
    }
  }

  /**
   * @desc  Returns the quantity of a given item in the cart. If the item does not exist, it returns 0.
   * @param name 
   * @returns quantity of the item in the cart
   */
  getQuantity(name: string) {
    return this.items.get(name)?.qty ?? 0;
  }

  /**
   * @desc  Checks if an item exists in the cart.
    * @param name 
    * @returns true if the item exists in the cart, false otherwise
    */
  hasItem(name: string) {
    return this.items.has(name);
  }

  /**
   * @desc  Checks if an item exists in the cart. Alias for hasItem.
   * @param name 
   * @returns true if the item exists in the cart, false otherwise
   */
  has(name: string) {
    return this.items.has(name);
  }

  /**
   * @desc  Returns the total quantity of items in the cart.
   * @returns total quantity of items in the cart
   */
  getItemCount() {
    let total = 0;
    for (const { qty } of this.items.values()) total += qty;
    return total;
  }

  /**
   * @desc  Returns the total price of all items in the cart.
   * @returns total price of all items in the cart
   */
  getSubtotal() {
    let total = 0;
    for (const { price, qty } of this.items.values()) total += price * qty;
    return total;
  }

  /**
   * @desc  Clears all items from the cart.
   */
  clear() {
    this.items.clear();
  }
}
