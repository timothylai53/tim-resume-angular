import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactInfo = [
    {
      type: 'Phone',
      value: '013-648 3581',
      link: 'tel:+60136483581',
      icon: '📞'
    },
    {
      type: 'Email',
      value: 'timothylai53@gmail.com',
      link: 'mailto:timothylai53@gmail.com',
      icon: '✉️'
    },
    {
      type: 'GitHub',
      value: 'github.com/timothylai53',
      link: 'https://github.com/timothylai53',
      icon: '💻'
    },
    {
      type: 'Instagram',
      value: '@timothyjunhong',
      link: 'https://instagram.com/timothyjunhong',
      icon: '📸'
    }
  ];
}
