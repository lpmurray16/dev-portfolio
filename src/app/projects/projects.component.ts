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
      title: 'GamerLegacy',
      description:
        'A video game library powered by the RAWG API. Track completed and upcoming games, get release alerts, and share a ranked top 20 with friends.',
      projectUrl: 'https://gamer-legacy-frontend.vercel.app/home/all',
    },
    {
      title: 'Retro-Terminal Hangman',
      description:
        'A retro-inspired hangman game for creating public or private puzzles, sharing them by code, and joining live community sessions.',
      projectUrl: 'https://pb-hangman-frontend.vercel.app/#/home',
    },
    {
      title: 'Quizzicle',
      description:
        'A live, Kahoot-inspired quiz platform. Build and share image-supported quizzes, host multiplayer games, or explore community quizzes solo.',
      projectUrl: 'https://quizzicle.xyz/',
    },
    {
      title: 'TeamForge',
      description:
        'A real-time team and scoreboard tool. Build teams randomly or manually, invite players with a six-character code, and track the game through the winner screen.',
      projectUrl: 'https://teamforge.buzz/',
    },
    {
      title: 'NexHire',
      description:
        'A streamlined recruitment workspace for organizing candidates and job openings, created to support the day-to-day needs of a working recruiter.',
      projectUrl: 'https://nexhire.xyz/',
    },
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
