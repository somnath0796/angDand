import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "counter",
    //inputs: [ 'count'],
    //outputs: ['countChanged'],
    template: `
        <div (click) = 'countEvent()'>
            Please click here...
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