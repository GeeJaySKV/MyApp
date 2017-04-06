import { Component } from '@angular/core';
     
@Component({
    selector: 'preloader',
    templateUrl: `./app/preloader/preloader.component.html`            
})

export class PreloaderComponent { 
   
}

(function(){
    if (event.type === 'ready' || document.readyState === 'complete'){
    let opacityNum: number = 1;
    let opacityStr: string;
    let timer = setInterval(function(){
    opacityStr = opacityNum.toString();
    document.getElementById('hellopreloader').style.opacity = opacityStr;
    opacityNum -= 0.03;
}, 50);
    setTimeout(function() {
        clearInterval(timer);
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