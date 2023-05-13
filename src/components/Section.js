class Section {
  constructor({ renderer }, selectorContainer) {
    this._renderer = renderer;
    this._container = selectorContainer;
  }

  addItem(item) {
    const card = this._renderer(item);
    this._container.prepend(card);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }
}

export default Section;