import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import movieData from '../../../assets/movies.json';
import peopleData from '../../../assets/people.json';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  people = peopleData;
  movies = movieData;
  
  scrollCarousel(direction: string): void {
    const carousel = document.getElementById('movieCarousel');
    if (!carousel) return;
    
    // คำนวณความกว้างของ 1 card + gap
    const cardWidth = 168; // ความกว้างของภาพ
    const gap = 16; // gap-4 = 16px
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'left') {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    
    // Update button visibility
    setTimeout(() => this.updateButtonVisibility(), 100);
  }

  private updateButtonVisibility(): void {
    if (this.movies.length <= 6) return; // ไม่ต้องทำอะไรถ้า <= 6
    
    const carousel = document.getElementById('movieCarousel');
    const leftButton = document.getElementById('scrollLeft');
    const rightButton = document.getElementById('scrollRight');
    
    if (!carousel || !leftButton || !rightButton) return;
    
    // Show/hide left button
    if (carousel.scrollLeft <= 0) {
      leftButton.classList.add('opacity-0', 'invisible');
    } else {
      leftButton.classList.remove('opacity-0', 'invisible');
    }
    
    // Show/hide right button
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= maxScroll - 10) { // -10 for tolerance
      rightButton.classList.add('opacity-0', 'invisible');
    } else {
      rightButton.classList.remove('opacity-0', 'invisible');
    }
  }

  ngAfterViewInit(): void {
    if (this.movies.length > 6) {
      this.updateButtonVisibility();
      
      // Listen for scroll events
      const carousel = document.getElementById('movieCarousel');
      if (carousel) {
        carousel.addEventListener('scroll', () => this.updateButtonVisibility());
      }
    }
  }

  ngOnDestroy(): void {
    // Clean up event listeners
    const carousel = document.getElementById('movieCarousel');
    if (carousel) {
      carousel.removeEventListener('scroll', () => this.updateButtonVisibility());
    }
  }
}

