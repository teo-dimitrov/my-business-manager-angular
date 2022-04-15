import {AbstractControl, ValidationErrors} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;


  if (!value) {
    return null;
  }

  if (!/.{3,}\@.*\.(bg|com|net)/.test(value)) {
    return {
      email: true,
    };
  }
  return null;
}

