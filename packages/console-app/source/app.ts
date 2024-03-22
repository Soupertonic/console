import { bootstrapApplication } from '@angular/platform-browser'

import { config } from './app.config'
import { App } from './app.component'

bootstrapApplication(App, config).catch((err: any) => console.error(err))
