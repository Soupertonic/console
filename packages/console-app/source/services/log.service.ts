import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class Log {
  private _info = console.info.bind(console.info)
  private _warn = console.warn.bind(console.warn)
  private _error = console.error.bind(console.error)

  public trace(message: string): void {
    this._info(
      `%c ${this._level('TRACE')} `, 'background: #ff43e3; color: #000000;',
      '|', this._elapsed(),
      '|', this._callee(),
      '|', message,
    )
  }

  public info(message: string): void {
    this._info(
      `%c ${this._level('INFO')} `, 'background: #438aff; color: #000000;',
      '|', this._elapsed(),
      '|', this._callee(),
      '|', message,
    )
  }

  public warn(message: string): void {
    this._warn(
      `%c ${this._level('WARN')} `, 'background: #dd9f1e; color: #000000;',
      '|', this._elapsed(),
      '|', this._callee(),
      '|', message,
    )
  }

  public error(message: string): void {
    this._error(
      `%c ${this._level('ERROR')} `, 'background: #eb2f06; color: #000000;',
      '|', this._elapsed(),
      '|', this._callee(),
      '|', message,
    )
  }

  private _level(severity: string): string {
    return severity.padEnd(5, ' ')
  }

  private _elapsed(): string {
    return (performance.now() / 1000).toFixed(3).padStart(8, ' ')
  }

  private _callee(): string | undefined {
    return (new Error()).stack?.split('\n')[3].trim().split(' ')[1]
  }
}
