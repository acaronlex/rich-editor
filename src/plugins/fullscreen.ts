export class Fullscreen {
  private container: HTMLElement;
  private isActive = false;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  toggle(): void {
    this.isActive = !this.isActive;
    this.container.classList.toggle('re-fullscreen', this.isActive);
    document.body.style.overflow = this.isActive ? 'hidden' : '';
  }

  get active(): boolean {
    return this.isActive;
  }

  destroy(): void {
    if (this.isActive) {
      this.toggle();
    }
  }
}
