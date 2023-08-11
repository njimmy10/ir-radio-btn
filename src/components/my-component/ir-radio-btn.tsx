import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'ir-radio-btn',
  styleUrl: 'ir-radio-btn.css',
})
export class MyComponent {
  @State() data = [
    {
      id: 1,
      label: 'Radio Button 1',
      selected: false,
    },
    {
      id: 2,
      label: 'Radio Button 2',
      selected: false,
    },
    {
      id: 3,
      label: 'Radio Button 3',
      selected: false,
    },
  ];

  _handleClick(item) {
    this.data = this.data.map((i) => ({
      ...i,
      selected: i.id === item.id ? !i.selected : false,
    }));
  }

  _renderButton(item) {
    return (
      <div>
        <input
          class="state iradio_square-red hover mr-1"
          type="radio"
          onClick={() => this._handleClick(item)}
          value={item.id}
          checked={item.selected}
        />
        <label>{item.label}</label>
      </div>
    );
  }

  render() {
    return <div>{this.data.map((item) => this._renderButton(item))}</div>;
  }
}
