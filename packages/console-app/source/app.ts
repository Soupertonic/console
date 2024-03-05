import { bootstrapApplication } from "@angular/platform-browser";

import { config } from "./app.config";
import { AppComponent } from "./app.component";

bootstrapApplication(AppComponent, config).catch((err: any) =>
  console.error(err),
);
