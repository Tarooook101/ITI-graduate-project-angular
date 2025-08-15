import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [NgFor]
})
export class FooterComponent {
  currentYear = 2018;

  categoriesLinks = [
    'Animation',
    'Interactive Design',
    'Architecture',
    'Miscellaneous',
    'Graphic Design',
    'Photography',
    'Illustration',
    'Product Design'
  ];

  informationLinks = [
    'about',
    'contact',
    'terms'
  ];

  followUsLinks = [
    'instagram',
    'facebook',
    'twitter'
  ];

  templateLinks = [
    'Image License Info',
    'Powered by Webflow'
  ];

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;

    if (emailInput && emailInput.value) {
      console.log('Newsletter subscription:', emailInput.value);
      emailInput.value = ''; 
    }
  }
}
