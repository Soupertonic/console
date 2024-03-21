import { Route } from '@angular/router'
import { GameserverComponent } from './gameserver.component'

export default [
  {
    path: ':id',
    component: GameserverComponent,
    children: [
      {
        path: 'actions',
        loadComponent: () =>
          import('./features/actions/gameserver-actions.component').then(
            (c) => c.GameserverActionsComponent
          ),
      },
      {
        path: 'backups',
        loadComponent: () =>
          import('./features/backups/gameserver-backups.component').then(
            (c) => c.GameserverBackupsComponent
          ),
      },
      {
        path: 'databases',
        loadComponent: () =>
          import('./features/databases/gameserver-databases.component').then(
            (c) => c.GameserverDatabasesComponent
          ),
      },
      {
        path: 'files',
        loadComponent: () =>
          import('./features/files/gameserver-files.component').then(
            (c) => c.GameserverFilesComponent
          ),
      },
      {
        path: 'logs',
        loadComponent: () =>
          import('./features/logs/gameserver-logs.component').then(
            (c) => c.GameserverLogsComponent
          ),
      },
      {
        path: 'overview',
        loadComponent: () =>
          import('./features/overview/gameserver-overview.component').then(
            (c) => c.GameserverOverviewComponent
          ),
      },
      {
        path: 'players',
        loadComponent: () =>
          import('./features/players/gameserver-players.component').then(
            (c) => c.GameserverPlayersComponent
          ),
      },
      {
        path: 'plugins',
        loadComponent: () =>
          import('./features/plugins/gameserver-plugins.component').then(
            (c) => c.GameserverPluginsComponent
          ),
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./features/statistics/gameserver-statistics.component').then(
            (c) => c.GameserverStatisticsComponent
          ),
      },
      {
        path: 'terminal',
        loadComponent: () =>
          import('./features/terminal/gameserver-terminal.component').then(
            (c) => c.GameserverTerminalComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ],
  },
] satisfies Route[]
