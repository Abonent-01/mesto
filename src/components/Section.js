class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = selectorContainer;
  };

  addItem(element) {
    this._container.prepend(element);
  };

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  };
};

export default Section;