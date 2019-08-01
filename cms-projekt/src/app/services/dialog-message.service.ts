import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class DialogMessageService {
  constructor(private _snackBar: MatSnackBar, private zone: NgZone) {}

  displayMessage(message: string, class_css: string) {
    this.zone.run(() => {
        this._snackBar.open(message, "Zamknij", {
          duration: 10000,
          panelClass: [class_css],
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
    });
  }
}
