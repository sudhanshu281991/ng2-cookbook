import {Theme} from './theme-interface';

export interface User{
   name:string;
   age?:number;
   gender?:string;
   role?:string;
   theme?:Theme;
   topics?:string;
   isActive:boolean;
   toggle?:string;
}