class Section {
  constructor({ renderer }, сontainer) {
    this._renderer = renderer;
    this._container = сontainer;
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