import {Component, Input} from '@angular/core';
import {Blog} from '../model/blogs';

@Component({
    selector: 'home-blogs',
    template: `
    <h3 class="row">
       BLOGS
    </h3> 
   <a  class="col-md-3" *ngFor="let blogs of blog">
       <h4 class="col-md-12 text-center" [innerHTML]="blogs.PostedBy"></h4>
       <span class="col-md-12 text-center">{{blogs.Text}}</span>
       <h4 class="col-md-12 text-center">{{blogs.PostedOn}}</h4>
   </a>   `,
    styles: [`
       a{
           border:1px solid #efefef;
           margin-right:10px;
           height:250px;
           cursor:pointer;
       }
   `]
})

export class HomeBlogComponent {
    @Input() blog: Array<Blog>;
}