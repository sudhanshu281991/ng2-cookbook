import {Component, Input, trigger, state, style, transition, animate, OnChanges} from '@angular/core';

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
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(-100%)' }))
            ])
        ]),
        trigger('heroState', [
            state('in_active', style({ transform: 'translateX(0) scale(1)' })),
            state('a_ctive', style({ transform: 'translateX(0) scale(1.1)' })),
            transition('in_active => a_ctive', animate('100ms ease-in')),
            transition('a_ctive => in_active', animate('100ms ease-out')),
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