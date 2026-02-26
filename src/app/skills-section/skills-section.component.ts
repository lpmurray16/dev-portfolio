import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

interface SkillCard {
  title: string;
  description: string;
}

@Component({
  selector: 'skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly skills: SkillCard[] = [
    {
      title: 'HTML5 / CSS3 / JavaScript',
      description:
        'A strong foundation and still a constant growth area. Every role and personal project keeps sharpening these skills.',
    },
    {
      title: 'React',
      description:
        'My first framework deep-dive. I used React in many personal builds to better understand patterns and component design.',
    },
    {
      title: 'Java',
      description:
        'Most DePaul coursework was Java-centric, including OOP and data structures, which gave me a durable engineering base.',
    },
    {
      title: 'Python',
      description:
        'Simple syntax but very capable. I use Python for quick problem solving, scripting, and practical experiments.',
    },
    {
      title: 'MySQL',
      description:
        'Comfortable with relational databases and backend data modeling, including ORM-driven and direct SQL workflows.',
    },
    {
      title: 'WordPress',
      description:
        'Hands-on CMS experience including customization work, plugin fundamentals, and practical content-driven site delivery.',
    },
    {
      title: 'Angular',
      description:
        'My current framework focus. I value its structure, tooling, and strong patterns for maintainable frontend apps.',
    },
    {
      title: 'C#',
      description:
        'Learned quickly through prior Java/C++ fundamentals and now use it in professional backend workflows at The Flybook.',
    },
  ];

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const cards = Array.from(this.elementRef.nativeElement.querySelectorAll('.skill-card'));

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => this.observer?.observe(card));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
