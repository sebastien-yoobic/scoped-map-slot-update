import { Component } from '@stencil/core';

@Component({
  tag: 'slot-map-comp',
  styleUrl: 'slot-map-comp.css',
  scoped: true
})
export class SlotMapComponent {

  render() {
    return (
      <div class="slot-map-comp-container">
        <slot>
        </slot>
        <span>After Slot</span>
      </div>
    );
  }
}
