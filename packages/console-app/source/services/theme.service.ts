import { DOCUMENT } from "@angular/common"
import { Injectable, Renderer2, Signal, computed, inject, signal } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class Theme {
  private _document = inject(DOCUMENT)
  private _renderer = inject(Renderer2)

  private _theme = signal<'light' | 'dark'>('light')
  private _themeIsLight = computed(() => this._theme() == 'light')
  private _themeIsDark = computed(() => this._theme() == 'dark')

  public get isLight(): Signal<boolean> {
    return this._themeIsLight
  }

  public get isDark(): Signal<boolean> {
    return this._themeIsDark
  }

  constructor() {
    if (this._preferredColorSchemeIsLight()) {
      this.light()
    } else {
      this.dark()
    }
  }

  public toggle(): void {
    if (this._themeIsLight()) {
      this.dark()
    } else {
      this.light()
    }
  }

  public light(): void {
    this._renderer.setAttribute(this._document.body, 'theme', 'light')
    this._theme.set('light')
  }

  public dark(): void {
    this._renderer.setAttribute(this._document.body, 'theme', 'dark')
    this._theme.set('dark')
  }

  private _preferredColorSchemeIsLight(): boolean {
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }
}
