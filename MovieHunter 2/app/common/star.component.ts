import {Component, Input, OnInit } from 'angular2/core';

@Component({
    selector: 'star',
    templateUrl: 'app/common/star.component.html',
    styleUrls: ['app/common/star.component.css']
})
export class StarComponent implements OnInit {
    @Input() rating: number;
    starPercent: string;
    
    ngOnInit() {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starPercent = (this.rating * 86/5) + "px";
    }    
}