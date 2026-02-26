import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card.component';

interface ProjectItem {
  title: string;
  description: string;
  projectUrl: string;
}

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: ProjectItem[] = [
    {
      title: 'NeoBrutal Hangman',
      description:
        '(Angular, Python, Supabase) A simple hangman game with a NeoBrutalism design UI.',
      projectUrl: 'https://neo-hangman.vercel.app/',
    },
    {
      title: 'MovieTracker',
      description:
        '(Angular, Firebase) Search, save, and track movies you have watched or want to watch.',
      projectUrl: 'https://lp-movietracker.netlify.app/',
    },
    {
      title: 'MyFavoriteThings',
      description: '(React, Supabase) Public slideshow/image storage app built for family use.',
      projectUrl: 'https://mfts.netlify.app/',
    },
    {
      title: 'WishyList',
      description: '(React, Supabase) Flexible wishlist and online shopping item organizer.',
      projectUrl: 'https://wishylist.netlify.app/',
    },
    {
      title: 'Notes App',
      description: '(Next.js, Filess.io) Lightweight notes app experiment entirely in Next.js.',
      projectUrl: 'https://lm-notes-app.vercel.app/',
    },
    {
      title: 'Astro Auto Parts',
      description: 'Landing page refactor created for an interview to showcase UI/UX skills.',
      projectUrl: 'https://astro-auto-parts.vercel.app/',
    },
  ];
}
