import { Route } from '@angular/router'
import { Gameserver } from './gameserver.component'

export default [
  {
    path: ':id',
    component: Gameserver,
    children: [
      {
        path: 'actions',
        loadComponent: () => import('./features/actions').then((c) => c.GameserverActions),
      },
      {
        path: 'backups',
        loadComponent: () => import('./features/backups').then((c) => c.GameserverBackups),
      },
      {
        path: 'databases',
        loadComponent: () => import('./features/databases').then((c) => c.GameserverDatabases),
      },
      {
        path: 'files',
        loadComponent: () => import('./features/files').then((c) => c.GameserverFiles),
      },
      {
        path: 'logs',
        loadComponent: () => import('./features/logs').then((c) => c.GameserverLogs),
      },
      {
        path: 'overview',
        loadComponent: () => import('./features/overview').then((c) => c.GameserverOverview),
      },
      {
        path: 'players',
        loadComponent: () => import('./features/players').then((c) => c.GameserverPlayers),
      },
      {
        path: 'plugins',
        loadComponent: () => import('./features/plugins').then((c) => c.GameserverPlugins),
      },
      {
        path: 'statistics',
        loadComponent: () => import('./features/statistics').then((c) => c.GameserverStatistics),
      },
      {
        path: 'terminal',
        loadComponent: () => import('./features/terminal').then((c) => c.GameserverTerminal),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ],
  },
] satisfies Route[]
