import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: 'error-messages',
  template: `
    <label style="color:red" *ngIf="errorMessage !== null">
      <p class="custom-error-message">{{errorMessage}}</p>
    </label>
  `
})
export class ErrorMessages {

  @Input() control: FormControl;
  @Input() group: FormGroup;

  constructor() {
  }

  get errorMessage() {
    if (this.control) {
      for (let propertyName in this.control.errors) {
        if (this.control.touched) {
          return CustomValidators.getErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    if (this.group) {
      for (let propertyName in this.group.errors) {
        if (this.group.touched) {
          return CustomValidators.getErrorMessage(propertyName, this.group.errors[propertyName]);
        }
      }
    }

    return null;
  }
}
