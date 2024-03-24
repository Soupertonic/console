import { Component, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Button } from '@console/ui/components/button'
import { ButtonIcon } from '@console/ui/components/button-icon'

@Component({
  standalone: true,
  selector: 'console-app-navigation-menu',
  templateUrl: 'app-navigation-menu.component.html',
  styleUrl: 'app-navigation-menu.component.scss',
  imports: [Button, ButtonIcon],
})
export class AppNavigationMenu {
  private _router = inject(Router)
  private _activatedRoute = inject(ActivatedRoute)

  protected navigateRoute(route: string): void {
    this._router.navigate([route], { relativeTo: this._activatedRoute })
  }

  protected isActiveRoute(route: string): boolean {
    return this._router.isActive(
      this._router.createUrlTree([route], { relativeTo: this._activatedRoute }),
      { paths: 'subset', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' }
    )
  }
}
