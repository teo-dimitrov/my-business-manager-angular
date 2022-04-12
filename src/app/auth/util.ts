import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

// export function usernameValidator(control: AbstractControl): ValidationErrors | null {
//   const value = control.value;
//
//   if (!value) {
//     return null;
//   } if (value.length > 3){
//     return{
//       username: true,
//     };
//   }
//   return null;
// }

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  // if (control.errors && Object.keys(control.errors).filter(errorName => errorName !== 'email').length > 0) {
  //     return null;
  // }

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


export function passwordMatch(passwordFormControl: AbstractControl) {
  const validtorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
    if (passwordFormControl.value !== rePasswordFormControl.value) {
      return {
        passwordMissmatch: true
      }
    }

    return null;
  }

  return validtorFn;
}

export function passwordMatch2(passwordFormControl: AbstractControl): ValidationErrors | null {
  const passwordGroup = passwordFormControl.parent as FormGroup;

  if (!passwordGroup) {
    return null;
  }

  const {password, rePassword} = passwordGroup.controls;
  if (password.value !== rePassword.value) {
    return {
      passwordMatch2: true
    }
  }

  return null;
}
