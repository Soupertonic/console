import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideNoopNgZone } from "./app.providers";

export const config: ApplicationConfig = {
  providers: [provideRouter(routes), provideNoopNgZone()],
};
