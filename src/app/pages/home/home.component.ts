import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink],
  animations: [
    trigger('fadeInUp', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query('.card-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Hero Section Data
  heroPost = {
    id: 1,
    title: 'JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY',
    category: 'ARCHITECTURE',
    author: 'BILL CHISLETT',
    description: 'Since opening its doors in May 2019, this idyllic design studio has been creating monumental work and shows no signs of slowing down.',
    image: 'assets/images/1.jpg',
    featured: true
  };

  // First 3 Cards Section
  firstThreeCards = [
    {
      id: 2,
      title: 'HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN',
      category: 'PHOTOGRAPHY',
      author: 'ALESSANDRO OVILE',
      image: 'assets/images/2.jpg'
    },
    {
      id: 3,
      title: 'BOWLCUT LAUNCH A NEW SUMMER COLLECTION THAT PAYS HOMAGE TO "LIL LEGENDS"',
      category: 'PRODUCT DESIGN',
      author: 'GIOVANNI FRANCESJ',
      image: 'assets/images/3.jpg'
    },
    {
      id: 4,
      title: 'THOUSANDS OF PREVIOUSLY UNSEEN PHOTOGRAPHS BY ANDY WARHOL',
      category: 'PHOTOGRAPHY',
      author: 'ANNIE LAURLEWITZ',
      image: 'assets/images/4.jpg'
    }
  ];

  // Second 3 Cards Section
  secondThreeCards = [
    {
      id: 5,
      title: 'LONDON-BASED VINKA FLORIS STORYTELLING FURNITURE',
      category: 'PRODUCT DESIGN',
      author: 'ANNIE LAURLEWITZ',
      image: 'assets/images/5.jpg'
    },
    {
      id: 6,
      title: 'ANONYMOUS ISRAELI ART COLLECTIVE BROKEN FINGER',
      category: 'GRAPHIC DESIGN',
      author: 'SIMONE DREXLER',
      image: 'assets/images/6.jpg'
    },
    {
      id: 7,
      title: 'SUZANNE SAROFFS METICULOUSLY ARRANGED PHOTOGRAPHS',
      category: 'PHOTOGRAPHY',
      author: 'BILL FISHBEL',
      image: 'assets/images/7.jpg'
    }
  ];

  // First 4 Cards Section
  firstFourCards = [
    {
      id: 8,
      title: 'ANI AMIRBASAN\'S PLAYFUL ILLUSTRATIONS CELEBRATE CLUB CULTURE',
      category: 'ILLUSTRATION',
      author: 'LOU BARTELLS',
      image: 'assets/images/8.jpg'
    },
    {
      id: 9,
      title: 'RUDY GUEDI\'S DESIGN WORK SITS BETWEEN FIGURATIVE MOTIVES',
      category: 'GRAPHIC DESIGN',
      author: 'SIMONE PETERSON',
      image: 'assets/images/9.jpg'
    },
    {
      id: 10,
      title: 'HOW ALEX PRAGER MADE THE WORLD STOP AND STARE',
      category: 'PHOTOGRAPHY',
      author: 'GIOVANNI FRANCIS',
      image: 'assets/images/10.jpg'
    },
    {
      id: 11,
      title: 'NEW PLAN FOR ESTD ANIMATORS. FULL PROJECT FILES',
      category: 'ANIMATION',
      author: 'GIOVANNI FRANCIS',
      image: 'assets/images/11.jpg'
    }
  ];

  // Second 4 Cards Section
  secondFourCards = [
    {
      id: 12,
      title: 'NO BALLS, ALL BOOKS: IT\'S JULY THINGS',
      category: 'MISCELLANEOUS',
      author: 'GIOVANNI FRANCIS',
      image: 'assets/images/12.jpg'
    },
    {
      id: 13,
      title: 'M&C SAATCHI AND FONTSMITH COLLABORATE ON FONT COLLECTION',
      category: 'TYPOGRAPHY',
      author: 'ANNIE LAURLEWITZ',
      image: 'assets/images/1.jpg'
    },
    {
      id: 14,
      title: 'FRED ROWSON DIRECTS FILM FOR YEARS AND YEARS',
      category: 'PHOTOGRAPHY',
      author: 'CORY GOTTLIEB',
      image: 'assets/images/2.jpg'
    },
    {
      id: 15,
      title: 'SHOPLIFTERS\' NEW ISSUE HAS GOT YOUR BACK',
      category: 'GRAPHIC DESIGN',
      author: 'ALESSANDRO OVILE',
      image: 'assets/images/3.jpg'
    }
  ];

  // First 2 Cards Section
  firstTwoCards = [
    {
      id: 16,
      title: 'A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO',
      category: 'GRAPHIC DESIGN',
      author: 'CLEM DROUGHTON',
      description: 'An in-depth look at the evolution of one of the most recognizable logos in sports history.',
      image: 'assets/images/4.jpg'
    },
    {
      id: 17,
      title: 'NEED A GUIDE TO LAS GRAPHIC DESIGN SCENE?',
      category: 'GRAPHIC DESIGN',
      author: 'ALESSANDRO OVILE',
      description: 'Discover the vibrant and diverse graphic design community thriving in Los Angeles.',
      image: 'assets/images/5.jpg'
    }
  ];

  // Second 2 Cards Section
  secondTwoCards = [
    {
      id: 18,
      title: 'FRED ROWSON DIRECTS FILM FOR YEARS AND YEARS',
      category: 'PHOTOGRAPHY',
      author: 'CORY GOTTLIEB',
      description: 'Behind the scenes of creating visually stunning music videos that capture emotion.',
      image: 'assets/images/6.jpg'
    },
    {
      id: 19,
      title: 'M&C SAATCHI COLLABORATE ON FONT COLLECTION',
      category: 'ILLUSTRATION',
      author: 'ANNIE LAURLEWITZ',
      description: 'When typography meets social impact: creating fonts for meaningful causes.',
      image: 'assets/images/7.jpg'
    }
  ];

  trackByPostId(index: number, post: any): number {
    return post.id;
  }
}
