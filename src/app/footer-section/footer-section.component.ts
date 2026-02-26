import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../types';

@Component({
  standalone: true,
  imports: [],
  selector: 'footer-section',
  templateUrl: 'footer-section.component.html',
  styleUrls: ['footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {
  submitForm() {
    throw new Error('Method not implemented.');
  }
  contactForm: ContactForm = new ContactForm();
  constructor() {}

  ngOnInit() {}
}
