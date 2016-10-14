"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AnimationComponent = (function () {
    function AnimationComponent() {
        this.visibility = 'shown';
        this.fadding = 'in';
        [
            this.users = [
                { name: 'Sudhanshu', state: 'in_active' },
                { name: 'Sud', state: 'in_active' },
                { name: 'Happy', state: 'in_active' },
                { name: 'Good', state: 'in_active' }
            ]
        ];
    }
    AnimationComponent.prototype.toggleDiv = function () {
        this.visibility = this.visibility !== 'shown' ? 'shown' : 'hidden';
    };
    AnimationComponent.prototype.toggleFade = function () {
        this.fadding = this.fadding === 'in' ? 'void' : 'in';
    };
    AnimationComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'animation.component.html',
            animations: [
                core_1.trigger('visibilityChanged', [
                    core_1.state('shown', core_1.style({
                        opacity: 1,
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    core_1.state('hidden', core_1.style({
                        opacity: 0,
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    core_1.transition('shown <=> hidden', core_1.animate('.5s ease-out')),
                ]),
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.3s 0.1s ease', core_1.style({
                                transform: 'translateX(0)',
                                width: 120
                            })),
                            core_1.animate('0.3s ease', core_1.style({
                                opacity: 1
                            }))
                        ])
                    ]),
                    core_1.transition('* => void', [
                        core_1.group([
                            core_1.animate('0.3s ease', core_1.style({
                                transform: 'translateX(50px)',
                                width: 10
                            })),
                            core_1.animate('0.3s 0.2s ease', core_1.style({
                                opacity: 0
                            }))
                        ])
                    ])
                ]),
                core_1.trigger('heroState', [
                    core_1.state('in_active', core_1.style({ transform: 'translateX(0) scale(1)' })),
                    core_1.state('a_ctive', core_1.style({ transform: 'translateX(0) scale(1.1)' })),
                    core_1.transition('in_active => a_ctive', core_1.animate('500ms ease-in')),
                    core_1.transition('a_ctive => in_active', core_1.animate('500ms ease-out')),
                    core_1.transition('void => in_active', [
                        core_1.style({ transform: 'translateX(-100%) scale(1)' }),
                        core_1.animate(100)
                    ]),
                    core_1.transition('in_active => void', [
                        core_1.animate(100, core_1.style({ transform: 'translateX(100%) scale(1)' }))
                    ]),
                    core_1.transition('void => a_ctive', [
                        core_1.style({ transform: 'translateX(0) scale(0)' }),
                        core_1.animate(200)
                    ]),
                    core_1.transition('a_ctive => void', [
                        core_1.animate(200, core_1.style({ transform: 'translateX(0) scale(0)' }))
                    ])
                ])
            ],
            styles: ["\n       .row{\n           padding:10px;\n       }\n       button{\n           margin-top:20px;\n       }\n       .fading-elm{\n           background-color:#efefef;\n           padding:10px;\n           width:auto;\n       }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=animation.component.js.map