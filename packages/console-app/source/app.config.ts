import {
  ApplicationConfig,
  NgZone,
  Provider,
  ɵNoopNgZone,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

const provideNoopNgZone = (): Provider => {
  return { provide: NgZone, useClass: ɵNoopNgZone };
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNoopNgZone()],
};
