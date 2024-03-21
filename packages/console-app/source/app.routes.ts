import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: 'gameserver', loadChildren: () => import('./pages/gameserver/gameserver.routes') },
]
