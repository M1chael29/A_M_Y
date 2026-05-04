import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones limpias según la clase generada por el script
import { Hero } from '../components/hero/hero';
import { Stats } from '../components/stats/stats';
import { FeaturesGrid } from '../components/features-grid/features-grid';
import { SolutionsGrid } from '../components/solutions-grid/solutions-grid';
import { Workflow } from '../components/workflow/workflow';
import { TestimonioTerminal } from '../components/testimonio-terminal/testimonio-terminal';
import { CtaSection } from '../components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    Stats,
    FeaturesGrid,
    SolutionsGrid,
    Workflow,
    TestimonioTerminal,
    CtaSection
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home { }
