//Шина событий

export class EventBus {
  listeners: Record<string, Array<() => void>>

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback:  () => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback:  () => void): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: (...args: unknown[]) => void) {
      listener(...args)
    });
  }
}