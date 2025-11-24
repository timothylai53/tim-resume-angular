import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css',
})
export class Hobbies {
  hobbies = [
    {
      title: 'Coding',
      description: 'Exploring new technologies and building creative solutions.',
      image: 'assets/hobbies/coding.jpg'
    },
    {
      title: 'Watch Movie',
      description: 'Enjoying cinematic storytelling and analyzing film techniques.',
      image: 'assets/hobbies/movie.jpg'
    },
    {
      title: 'Play Drum',
      description: 'Expressing rhythm and energy through percussion.',
      image: 'assets/hobbies/drum.jpg'
    }
  ];
}
