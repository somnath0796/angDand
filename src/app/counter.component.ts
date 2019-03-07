import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "counter",
    //inputs: [ 'count'],
    //outputs: ['countChanged'],
    template: `
        <div (click) = 'countEvent()'>
           <p style='color:#00f;'> Please click here... </p>
        </div>
    `
})

export class CounterComponent {
    @Input() count: number;

    @Output() public countChanged = new EventEmitter();

    countEvent() {

        this.countChanged.emit();
        this.count++;
        alert(this.count);
    }
}