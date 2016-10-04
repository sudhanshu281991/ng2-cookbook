import {Component, Input} from '@angular/core';
import {Blog} from '../model/blogs';

@Component({
     moduleId:module.id.replace("/dist/", "/app/"),
    selector: 'home-blogs',
    templateUrl:'blogs.component.html',
    styleUrls: ['blogs.component.css']
})

export class HomeBlogComponent {
    @Input() blog: Array<Blog>;
}