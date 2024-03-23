import { Component, inject } from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { Button, ButtonIcon, ButtonLabel } from '@console/ui/components/button'

@Component({
  standalone: true,
  selector: 'console-gameserver-menu-board',
  templateUrl: 'gameserver-menu-board.component.html',
  styleUrl: 'gameserver-menu-board.component.scss',
  imports: [RouterLink, Button, ButtonIcon, ButtonLabel],
})
export class GameserverMenuBoard {
  private _router = inject(Router)
  private _activatedRoute = inject(ActivatedRoute)

  protected navigateToOverviewView(): void {
    this._navigate('overview')
  }

  protected navigateToTerminalView(): void {
    this._navigate('terminal')
  }

  protected navigateToPluginsView(): void {
    this._navigate('plugins')
  }

  protected navigateToPlayersView(): void {
    this._navigate('players')
  }

  protected navigateToActionsView(): void {
    this._navigate('actions')
  }

  protected navigateToLogsView(): void {
    this._navigate('logs')
  }

  protected navigateToStatisticsView(): void {
    this._navigate('statistics')
  }

  protected navigateToFilesView(): void {
    this._navigate('files')
  }

  protected navigateToDatabasesView(): void {
    this._navigate('databases')
  }

  protected navigateToBackupsView(): void {
    this._navigate('backups')
  }

  private _navigate(route: string): void {
    this._router.navigate([route], { relativeTo: this._activatedRoute })
  }
}
