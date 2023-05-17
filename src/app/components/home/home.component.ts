import { Component, AfterViewInit  } from '@angular/core';
// // @ts-ignore
// import SimpleLightbox from 'simplelightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // new SimpleLightbox({
    //   elements: '#portfolio a.portfolio-box'
    // });
  }
}