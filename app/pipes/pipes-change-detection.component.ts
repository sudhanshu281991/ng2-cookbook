import {Component} from '@angular/core';

@Component({
    selector:'change-detection',
    template:`
      <h4 class="row">Pipes and change detection</h4>
      <input type="text" #box
             (keyup.enter)="addHero(box.value,canFly);box.value='';"
             placeholder="Name">
      <input type "checkbox"  name="Can fly">       
      <div *ngFor="let hero of heroes">{{hero.name}}</div>       
    `
})

export class PipesChangeDetection{
    heroes:any[]=[];
    canFly:boolean=true;
    addHero(name:string,canFly:any){
        name=name.trim();
        if(!name) return;
        let hero={
            name,
            canFly:this.canFly
        };
        this.heroes.push(hero);

    }

}