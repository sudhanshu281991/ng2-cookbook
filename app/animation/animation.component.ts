import {Component, Input, trigger, state, style, transition, animate, OnChanges, keyframes,group} from '@angular/core';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    templateUrl: 'animation.component.html',
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({
                opacity: 1,
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('hidden', style({
                opacity: 0,
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('shown <=> hidden', animate('.5s ease-out')),
            //transition('hidden => shown', animate('2s ease-in'))
        ]),
        trigger('flyInOut', [
            state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
            transition('void => *', [
                style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                group([
                    animate('0.3s 0.1s ease', style({
                        transform: 'translateX(0)',
                        width: 120
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('0.3s ease', style({
                        transform: 'translateX(50px)',
                        width: 10
                    })),
                    animate('0.3s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ]),
        trigger('heroState', [
            state('in_active', style({ transform: 'translateX(0) scale(1)' })),
            state('a_ctive', style({ transform: 'translateX(0) scale(1.1)' })),
            transition('in_active => a_ctive', animate('500ms ease-in')),
            transition('a_ctive => in_active', animate('500ms ease-out')),
            transition('void => in_active', [
                style({ transform: 'translateX(-100%) scale(1)' }),
                animate(100)
            ]),
            transition('in_active => void', [
                animate(100, style({ transform: 'translateX(100%) scale(1)' }))
            ]),
            transition('void => a_ctive', [
                style({ transform: 'translateX(0) scale(0)' }),
                animate(200)
            ]),
            transition('a_ctive => void', [
                animate(200, style({ transform: 'translateX(0) scale(0)' }))
            ])
        ])
    ],
    styles: [`
       .row{
           padding:10px;
       }
       button{
           margin-top:20px;
       }
       .fading-elm{
           background-color:#efefef;
           padding:10px;
           width:auto;
       }
    `]
})

export class AnimationComponent {
    visibility = 'shown';
    fadding = 'in';
    users: any;
    toggleDiv() {
        this.visibility = this.visibility !== 'shown' ? 'shown' : 'hidden';
    }
    toggleFade() {
        this.fadding = this.fadding === 'in' ? 'void' : 'in';
    }
    constructor() {
        [
            this.users = [
                { name: 'Sudhanshu', state: 'in_active' },
                { name: 'Sud', state: 'in_active' },
                { name: 'Happy', state: 'in_active' },
                { name: 'Good', state: 'in_active' }
            ]
        ]
    }


}