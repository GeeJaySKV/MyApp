"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.loginKeyDown = function () {
            if (event.type === 'ready' || document.readyState === 'complete') {
                this.element = document.getElementById('login');
                this.val = this.element.value;
                var temp2 = void 0;
                temp2 = this.val;
                var keycode = window.event.keyCode;
                if (keycode >= 48 && keycode <= 57) {
                }
                else if (keycode >= 65 && keycode <= 90) {
                }
                else if (keycode >= 97 && keycode <= 122) {
                }
                else if (keycode == 64) {
                    if (this.val.replace(/[^@]/g, "").length > 0) {
                        return false;
                    }
                    else if (this.val == '' && keycode == 64) {
                        return false;
                    }
                    else if ((String.fromCharCode(keycode) === '@' && String(temp2.charAt(temp2.length - 1)) === '.')) {
                        return false;
                    }
                    else if ((String.fromCharCode(keycode) === '@' && String(temp2.charAt(temp2.length - 1)) === '_')) {
                        return false;
                    }
                }
                else if (keycode == 95) {
                    if (this.val.replace(/[^_]/g, "").length > 0) {
                        return false;
                    }
                    else if (this.val == '' && keycode == 95) {
                        return false;
                    }
                    else if (String.fromCharCode(keycode) === '_' && String(temp2.charAt(temp2.length - 1)) === '.') {
                        return false;
                    }
                    else if ((String.fromCharCode(keycode) === '_' && String(temp2.charAt(temp2.length - 1)) === '@')) {
                        return false;
                    }
                }
                else if (keycode == 46 || keycode == 95) {
                    var temp = 0;
                    if (this.val == '' && keycode == 46) {
                        return false;
                    }
                    else if (this.val == '' && keycode == 95) {
                        return false;
                    }
                    else if (this.val.replace(/[^.]/g, "").length > 2) {
                        return false;
                    }
                    else if (String.fromCharCode(keycode) === '.' && String(temp2.charAt(temp2.length - 1)) === '.') {
                        return false;
                    }
                    else if (String.fromCharCode(keycode) === '.' && String(temp2.charAt(temp2.length - 1)) === '@') {
                        return false;
                    }
                    else if (String.fromCharCode(keycode) === '.' && String(temp2.charAt(temp2.length - 1)) === '_') {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        };
        this.authorization = function () {
            var loginInput;
            var login;
            var passwordInput;
            var password;
            loginInput = document.getElementById('login');
            login = loginInput.value;
            passwordInput = document.getElementById('password');
            password = passwordInput.value;
            if (login === 'geejay.skv@gmail.com' && password === 'cnshrekmrbhbkk') {
                alert('правильно');
            }
            else {
                alert('не правильно');
            }
        };
    }
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            templateUrl: "./app/registration/registration.component.html",
            styleUrls: ["./app/registration/registration.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map