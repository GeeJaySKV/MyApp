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
var PreloaderComponent = (function () {
    function PreloaderComponent() {
    }
    PreloaderComponent = __decorate([
        core_1.Component({
            selector: 'preloader',
            templateUrl: "./app/preloader/preloader.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());
exports.PreloaderComponent = PreloaderComponent;
(function () {
    if (event.type === 'ready' || document.readyState === 'complete') {
        var opacityNum_1 = 1;
        var opacityStr_1;
        var timer_1 = setInterval(function () {
            opacityStr_1 = opacityNum_1.toString();
            document.getElementById('hellopreloader').style.opacity = opacityStr_1;
            opacityNum_1 -= 0.03;
        }, 50);
        setTimeout(function () {
            clearInterval(timer_1);
            document.getElementById('hellopreloader').remove();
        }, 2500);
    }
})();
/*(function(){
    if (event.type === 'ready' || document.readyState === 'complete') {
    setTimeout(function() {
            document.getElementById('hellopreloader').remove();
}, 1500);
    }
})();*/ 
//# sourceMappingURL=preloader.component.js.map