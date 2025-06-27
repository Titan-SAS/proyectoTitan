import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-why-choose-style-one',
    templateUrl: './why-choose-style-one.component.html',
    styleUrls: ['./why-choose-style-one.component.scss'],
})
export class WhyChooseStyleOneComponent {

    slidesvideos: OwlOptions = {
        nav: true,
        margin: 25,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            515: {
                items: 1,
            },
            935: {
                items: 1,
            },
            1115: {
                items: 1,
            },
            1320: {
                items: 1,
            },
        },
    };
}
