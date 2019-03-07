import { Component } from "@angular/core";

@Component({
    selector: 'border',
    template: `
    <div style='border:3px solid black; border-radius:4px; width:200px; box-shadox:4px 4px #FF0000'>
        <p>Company: </p>
        <b><ng-content></ng-content></b>
    </div>
    `
})

export class BorderComponent {

}