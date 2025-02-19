import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group-component',
  templateUrl: './counter-group-component.component.html',
  styleUrls: ['./counter-group-component.component.css']
})
export class CounterGroupComponentComponent {
  counters:{ num :number} []= [
    {num :1},
    {num :2},
    {num :3}
  ]

  get sum(){
    return this.counters.reduce((result,current) => result + current.num, 0)
  }

  onAdd() {
    this.counters.push({num:0});
  }

  onRemove(index: number) {
    this.counters.splice(index, 1);
  }
  
  onResetAll() {
    this.counters.forEach(counter => counter.num = 0);
  }
}
