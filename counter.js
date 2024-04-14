export class Counter {
  #value; // Private field
  #selector;
  #name;
  #actions;

  constructor(name, options = {}) {
    const defaultOptions = {
      value: 0,
      actions: ['add', 'minus'],
      range: {
        use: false,
        minValue: Number.MIN_SAFE_INTEGER,
        maxValue: Number.MAX_SAFE_INTEGER,
      },
    };

    const mergedOptions = { ...defaultOptions, ...options };

    this.#selector = document.querySelector('.' + name);
    this.#name = name;
    this.#value = mergedOptions.value;
    this.#actions = mergedOptions.actions;
    this.range = mergedOptions.range;

    this.#events();
  }
  
  #events() {
    this.#selector.addEventListener('click', event => {
      const target = event.target;      
      const action = target.dataset.action;
      if (!action) {
        return;
      }
      this.#event_onClick(action);

      this.#dispatchQuantityChangeEvent(action);

    });
  }

  #event_onClick(action) {
    if (!this.#actions.includes(action)) {
      console.error("Unrecognized action.");
      return;
    }

    const newValue = action === 'add' ? this.#value + 1 : this.#value - 1;
    if (!this.isInRange(newValue)) {
      alert(`Range is between ${this.range.minValue} and ${this.range.maxValue}`);
      return;
    }

    this.update(newValue);
    this.render();
  }

  #dispatchQuantityChangeEvent(action) {
    const event = new CustomEvent('quantityChange', {
      detail: {
        action: action,
        value: this.#value,
      }
    });

    this.#selector.dispatchEvent(event);
    console.log(event);
  }

  isInRange(value) {
    if (!this.range.use) {
      // Skip checking, so it acts like range is OK
      return true;
    }

    return value >= this.range.minValue && value <= this.range.maxValue;
  }
  
  update(newValue) {
    this.#value = newValue; // Modifying private field
  }
  
  getValue() {
    return this.#value; // Accessing private field
  }
  
  render() {
    this.#selector.querySelector('.value').value = this.getValue();
  }

  addEventListener(eventName, callback) {
    this.#selector.addEventListener(eventName, callback);
  }
}
