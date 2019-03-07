import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name : 'Convert'
})

export class ConvertPipe implements PipeTransform {
    transform( value: number, format : string): String{
        if(format=='CtoF')
            return ((value * 9/5) + 32) + "F";
        else if(format=='FtoC')
            return ((value - 32) * 5/9) + "C";
    }
}