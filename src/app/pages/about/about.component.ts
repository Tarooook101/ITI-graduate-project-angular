import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [NgFor, NgIf],
  animations: [
    trigger('fadeInUp', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerTeam', [
      transition('* => *', [
        query('.team-member', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Simeon Peterson',
      role: 'Founder',
      image: 'assets/images/man1.jpg'
    },
    {
      name: 'Simeon Brekke',
      role: 'Designer',
      image: 'assets/images/man2.jpg'
    },
    {
      name: 'Annie Laurlewitz',
      role: 'Writer',
      image: 'assets/images/man3.jpg'
    },
    {
      name: 'Beth Tapphy',
      role: 'Editor',
      image: 'assets/images/man4.jpg'
    },
    {
      name: 'Lou Bertelli',
      role: 'Photographer',
      image: 'assets/images/man5.jpg'
    },
    {
      name: 'Clem Draughton',
      role: 'Creative Director',
      image: 'assets/images/man6.jpg'
    },
    {
      name: 'Mitchell Legron',
      role: 'Developer',
      image: 'assets/images/man1.jpg'
    },
    {
      name: 'Rosanna Ondricka',
      role: 'Marketing',
      image: 'assets/images/man2.jpg'
    },
    {
      name: 'Alessandra Ovile',
      role: 'Content Manager',
      image: 'assets/images/man3.jpg'
    },
    {
      name: 'Cory Gottlieb',
      role: 'Strategist',
      image: 'assets/images/man4.jpg'
    }
  ];

  contactInfo = [
    {
      number: '1',
      title: '148 N 7th St #519',
      subtitle: 'Brooklyn, NY 11249',
      detail: 'United States'
    },
    {
      number: '2',
      title: 'hello@noiceland.co',
      subtitle: '',
      detail: ''
    },
    {
      number: '3',
      title: 'press@noiceland.co',
      subtitle: '',
      detail: ''
    },
    {
      number: '4',
      title: 'LOOKING FOR INTERNS',
      subtitle: 'interns@noiceland.co',
      detail: ''
    }
  ];
}
