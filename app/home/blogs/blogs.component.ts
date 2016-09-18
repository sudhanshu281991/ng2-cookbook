import {Component, Input} from '@angular/core';
import {Blog} from '../model/blogs';

@Component({
    selector: 'home-blogs',
    templateUrl:'./app/home/blogs/blogs.component.html',
    styleUrls: ['./app/home/blogs/blogs.component.css']
})

export class HomeBlogComponent {
    @Input() blog: Array<Blog>;
}