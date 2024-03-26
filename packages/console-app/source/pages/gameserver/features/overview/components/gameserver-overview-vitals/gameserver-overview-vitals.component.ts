import { Component } from '@angular/core'

import { Icon } from '@console/ui/components/icon';
import { Meter } from '@console/ui/components/meter';
import { MeterLabel } from '@console/ui/components/meter-label';
import { MeterValue } from '@console/ui/components/meter-value';
import { Section } from '@console/ui/components/section';
import { SectionContent } from '@console/ui/components/section-content';
import { SectionHeader } from '@console/ui/components/section-header';

@Component({
  standalone: true,
  selector: 'console-gameserver-overview-vitals',
  templateUrl: 'gameserver-overview-vitals.component.html',
  styleUrl: 'gameserver-overview-vitals.component.scss',
  imports: [
    Icon,
    Meter,
    MeterLabel,
    MeterValue,
    Section,
    SectionContent,
    SectionHeader,
  ],
})
export class GameserverOverviewVitals {}
