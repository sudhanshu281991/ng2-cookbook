import {Component,OnInit} from '@angular/core';
import {User} from '../models/user-interface';
import {Theme} from '../models/theme-interface';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    selector: 'forms-controls',
    templateUrl: 'forms-controls.component.html',
})

export class FormsControlComponent implements OnInit{
    public user: User;
    //The dummy data
    public genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];

    public roles = [
        { value: 'admin', display: 'Administrator' },
        { value: 'guest', display: 'Guest' },
        { value: 'custom', display: 'Custom' }
    ];

    public themes: Array<Theme> = [
        { backgroundColor: 'black', fontColor: 'white', display: 'dark' },
        { backgroundColor: 'white', fontColor: 'dark', display: 'Light' },
        { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
    ];
    public topics=[
        {value:'game',display:'Gaming'},
        {value:'tech',display:'technology'},
        {value:'life',display:'LifeStyle'}
    ];
    public toggles =[
        {value:'toggled',display:'Toggled'},
        {value:'untoggled',display:'UnToggled'},
    ]
    //End of the dummy data

    ngOnInit(){
        //initialize our model here
        this.user={
            name:'',
            gender:this.genders[0].value,
            role:this.roles[0].value,
            theme:this.themes[0],
            isActive:false,
            toggle:this.toggles[1].value,
            topics:this.topics[1].value
        }
    }
}