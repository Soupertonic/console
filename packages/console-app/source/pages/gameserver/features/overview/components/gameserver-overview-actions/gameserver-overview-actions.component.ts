import { Component } from '@angular/core'

import { Button } from '@console/ui/components/button';
import { ButtonIcon } from '@console/ui/components/button-icon';
import { ButtonLabel } from '@console/ui/components/button-label';
import { Icon } from '@console/ui/components/icon';
import { Section } from '@console/ui/components/section';
import { SectionContent } from '@console/ui/components/section-content';
import { SectionHeader } from '@console/ui/components/section-header';

@Component({
  standalone: true,
  selector: 'console-gameserver-overview-actions',
  templateUrl: 'gameserver-overview-actions.component.html',
  styleUrl: 'gameserver-overview-actions.component.scss',
  imports: [
    Button,
    ButtonIcon,
    ButtonLabel,
    Icon,
    Section,
    SectionContent,
    SectionHeader,
  ],
})
export class GameserverOverviewActions {
  protected dispatchAction(action: string): void {
    // TODO (soupertonic): Implement action dispatching
  }
}
