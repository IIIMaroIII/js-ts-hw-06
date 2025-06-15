interface IStringBuilder {
  getValue(): string
  padEnd(str: string): void
  padStart(str: string): void
  padBoth(str: string): void
}

export default class StringBuilder implements IStringBuilder {
  constructor(private value: string) {
    this.value = value
  }
  getValue(): string {
    return this.value
  }
  padEnd(str: string): void {
    this.value = `${this.value}${str}`
  }
  padStart(str: string): void {
    this.value = `${str}${this.value}`
  }
  padBoth(str: string): void {
    this.value = `${str}${this.value}${str}`
  }
}

/**
 *  getValue() — повертає поточне значення приватної властивості value.
    padEnd(str) — отримує параметр str (рядок) і додає його в кінець 
значення приватної властивості value об'єкта, який викликає цей метод.
    padStart(str) — отримує параметр str (рядок) і додає його 
на початок значення приватної властивості value об'єкта, який викликає цей метод.
    padBoth(str) — отримує параметр str (рядок) і додає його
 на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
 */
