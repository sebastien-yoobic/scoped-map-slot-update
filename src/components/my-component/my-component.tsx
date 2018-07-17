import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop({mutable: true}) items: Array<string> = ['a','b','c'];

  @Method()
  addItem(item: string){
    this.items = [...this.items, item];
  }

  render() {
    return (
      <slot-map-comp>
        {this.items.map(item =>
            <div>
              <span>{item}</span>
            </div>
        )}
      </slot-map-comp>
    );
  }
}
