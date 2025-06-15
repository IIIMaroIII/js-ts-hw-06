interface IStorage {
  getItems(): string[]
  addItem(newItem: string): void
  removeItem(itemToRemove: string): void
}

export class Storage implements IStorage {
  constructor(private items: string[]) {
    this.items = items
  }
  getItems(): string[] {
    return this.items
  }
  addItem(newItem: string): void {
    this.items.push(newItem)
  }
  removeItem(itemToRemove: string): void {
    if (!this.items.includes(itemToRemove)) {
      console.log('There are no matching')
    }
    const indx = this.items.findIndex((el) => el === itemToRemove)
    if (indx > 0) {
      this.items.splice(indx, 1)
    }
  }
}

/**
 * Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
 *  Клас очікує лише один аргумент — початковий масив товарів, 
 * який записується до створеного об'єкта в приватну властивість items.
Оголоси наступні методи класу:
getItems() — повертає масив поточних товарів у приватній властивості items.
addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove
 і видаляє його з масиву товарів у приватній властивості items об'єкта.
 */
