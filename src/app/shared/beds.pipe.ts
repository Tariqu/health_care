import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "beds",
})
export class BedsPipe implements PipeTransform {
  transform(value: string, ...args): unknown {
    return Number(value) % 10;
  }
}
