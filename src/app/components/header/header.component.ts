import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  @ViewChild('navbarElement') navbarElement: ElementRef;

  ngOnInit() {
  }

  toggleNavbar() {
    const nativeElement = this.navbarElement.nativeElement;
    if (nativeElement.classList.contains('show')) {
      nativeElement.classList.remove('show');
    } else {
      nativeElement.classList.add('show');
    }
  }

}
