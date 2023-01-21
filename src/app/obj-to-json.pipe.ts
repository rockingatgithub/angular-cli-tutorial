import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToJson'
})
export class ObjToJsonPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return JSON.parse(value)
  }

}
