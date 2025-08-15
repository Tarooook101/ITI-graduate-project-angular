import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css'],
  standalone: true,
  imports: [NgFor],
  animations: [
    trigger('fadeInUp', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ]),
    trigger('headerFade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LatestPostsComponent {
  trackByPostId(index: number, post: any): number {
    return post.id;
  }

  allPosts = [
    {
      id: 1,
      title: 'JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY',
      category: 'ARCHITECTURE',
      author: 'BILL CHISLETT',
      image: 'assets/images/1.jpg'
    },
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
      title: 'THOUSANDS OF PREVIOUSLY UNSEEN PHOTOGRAPHS BY ANDY WARHOL WILL BE MADE PUBLIC THIS AUTUMN',
      category: 'PHOTOGRAPHY',
      author: 'ANNIE LAURLEWITZ',
      image: 'assets/images/4.jpg'
    },
    {
      id: 5,
      title: 'LONDON-BASED VINKA FLORIS STORYTELLING FURNITURE',
      category: 'PRODUCT DESIGN',
      author: 'ANNIE LAURLEWITZ',
      image: 'assets/images/5.jpg'
    },
    {
      id: 6,
      title: 'ANONYMOUS ISRAELI ART COLLECTIVE BROKEN FINGER DIRECT MUSIC VIDEO FOR LIZ AND BECK',
      category: 'GRAPHIC DESIGN',
      author: 'SIMONE DREXLER',
      image: 'assets/images/6.jpg'
    },
    {
      id: 7,
      title: 'SUZANNE SAROFFS METICULOUSLY ARRANGED PHOTOGRAPHS ALTER PERCEPTIONS',
      category: 'PHOTOGRAPHY',
      author: 'BILL FISHBEL',
      image: 'assets/images/7.jpg'
    },
    {
      id: 8,
      title: 'ANI AMIRBASAN\'S PLAYFUL ILLUSTRATIONS CELEBRATE CLUB CULTURE BROWN BODIES AND PERFECT PANACHES',
      category: 'ILLUSTRATION',
      author: 'LOU BARTELLS',
      image: 'assets/images/8.jpg'
    },
    {
      id: 9,
      title: 'RUDY GUEDI\'S DESIGN WORK SITS BETWEEN "FIGURATIVE MOTIVES AND THEIR ABSTRACTED FOUNDATIONS"',
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
      title: 'NEW PLAN FOR ESTD ANIMATORS. FULL PROJECT FILES FOR OTHERS TO DOWNLOAD AND EXPLORE',
      category: 'ANIMATION',
      author: 'GIOVANNI FRANCIS',
      image: 'assets/images/11.jpg'
    },
    {
      id: 12,
      title: 'NO BALLS, ALL BOOKS: IT\'S JULY THINGS',
      category: 'MISCELLANEOUS',
      author: 'GIOVANNI FRANCIS',
      image: 'assets/images/12.jpg'
    },
    {
      id: 13,
      title: 'M&C SAATCHI AND FONTSMITH COLLABORATE ON FONT COLLECTION FOR HOUSE OF ST BARNABAS',
      category: 'ILLUSTRATION',
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
      title: 'NEED A GUIDE TO LAS GRAPHIC DESIGN SCENE? SHOPLIFTERS\' NEW ISSUE HAS GOT YOUR BACK',
      category: 'GRAPHIC DESIGN',
      author: 'ALESSANDRO OVILE',
      image: 'assets/images/3.jpg'
    },
    {
      id: 16,
      title: 'A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO',
      category: 'GRAPHIC DESIGN',
      author: 'CLEM DROUGHTON',
      image: 'assets/images/4.jpg'
    }
  ];
}
