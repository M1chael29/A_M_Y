import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* ─── Interfaces ────────────────────────────────────────── */
interface Stat {
  value:    number;
  suffix:   string;
  label:    string;
  animated: number; // valor que se incrementa en pantalla
}

/* ═══════════════════════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════════════════════ */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('heroRef') heroRef!: ElementRef<HTMLElement>;

  /* ── Estado del componente ── */
  isVisible      = false;
  statusLabel    = 'Online';
  typedText      = '';
  isCursorBlinking = false;

  /* ── Stats ── */
  stats: Stat[] = [
    { value: 120, suffix: '+', label: 'Proyectos',    animated: 0 },
    { value: 8,   suffix: '+', label: 'Años de exp.', animated: 0 },
    { value: 98,  suffix: '%', label: 'Satisfacción', animated: 0 },
  ];

  /* ── Textos para typewriter ── */
  private readonly typewriterPhrases = [
    'que convierte visitas.',
    'que genera resultados.',
    'con propósito.',
    'a medida para vos.',
  ];

  /* ── Internos ── */
  private phraseIndex   = 0;
  private charIndex     = 0;
  private isDeleting    = false;
  private typeTimer!:   ReturnType<typeof setTimeout>;
  private counterTimer!: ReturnType<typeof setTimeout>;
  private observer!:    IntersectionObserver;
  private rafId!:       number;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly ngZone: NgZone,
  ) {}

  /* ─────────────────────────────────────────────────────── */
  ngOnInit(): void {
    console.log('%cAMY_HERO: Deploy_Marine_Theme_Active', 'color:#A88469;font-family:monospace;font-size:12px;');
    this.statusLabel = 'Online';
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimer);
    clearTimeout(this.counterTimer);
    cancelAnimationFrame(this.rafId);
    this.observer?.disconnect();
  }

  /* ─── Intersection observer — activa animaciones al entrar en viewport ── */
  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.isVisible) {
          this.ngZone.run(() => {
            this.isVisible = true;
            this.cdr.markForCheck();

            // Secuencia de entrada
            this.scheduleTypewriter(900);
            this.scheduleCounters(800);
          });
        }
      },
      { threshold: 0.15 },
    );

    const el = this.heroRef?.nativeElement
             ?? document.querySelector('.hero') as HTMLElement;

    if (el) this.observer.observe(el);
    else     this.triggerAll(); // fallback
  }

  private triggerAll(): void {
    this.isVisible = true;
    this.scheduleTypewriter(900);
    this.scheduleCounters(800);
    this.cdr.markForCheck();
  }

  /* ─── Typewriter ──────────────────────────────────────── */
  private scheduleTypewriter(delay: number): void {
    this.typeTimer = setTimeout(() => this.tick(), delay);
  }

  private tick(): void {
    const phrase  = this.typewriterPhrases[this.phraseIndex];
    const speed   = this.isDeleting ? 40 : 70;
    const pauseMs = this.isDeleting ? 0 : 2200;

    if (!this.isDeleting) {
      // Escribir
      this.typedText = phrase.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === phrase.length) {
        // Fin de escritura — pausa antes de borrar
        this.isCursorBlinking = true;
        this.typeTimer = setTimeout(() => {
          this.isCursorBlinking = false;
          this.isDeleting = true;
          this.tick();
        }, pauseMs);
        this.cdr.markForCheck();
        return;
      }
    } else {
      // Borrar
      this.typedText = phrase.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting  = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.typewriterPhrases.length;
      }
    }

    this.cdr.markForCheck();
    this.typeTimer = setTimeout(() => this.tick(), speed);
  }

  /* ─── Contadores animados ─────────────────────────────── */
  private scheduleCounters(delay: number): void {
    this.counterTimer = setTimeout(() => {
      this.stats.forEach((stat, i) => {
        setTimeout(() => this.animateCounter(stat), i * 150);
      });
    }, delay);
  }

  private animateCounter(stat: Stat): void {
    const duration = 1800; // ms
    const start    = performance.now();

    const step = (now: number) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo
      const ease = progress === 1
        ? 1
        : 1 - Math.pow(2, -10 * progress);

      stat.animated = Math.floor(ease * stat.value);
      this.cdr.markForCheck();

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      } else {
        stat.animated = stat.value;
        this.cdr.markForCheck();
      }
    };

    this.rafId = requestAnimationFrame(step);



  }
}
