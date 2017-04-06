import { Component, EventEmitter, Input, Output } from '@angular/core';
     
@Component({
    selector: 'registration',
    templateUrl: `./app/registration/registration.component.html`,
    styleUrls:  [`./app/registration/registration.component.css`]             
})
export class RegistrationComponent {
    element: any;
    val: any;
    loginKeyDown = function(){
        if (event.type === 'ready' || document.readyState === 'complete'){
            this.element = document.getElementById('login');
            this.val = this.element.value;
            let temp2: any;
            temp2 = this.val;
            let keycode: any = window.event.keyCode;
                
            if (keycode >= 48 && keycode <= 57){
        }
            else if (keycode >= 65 && keycode <= 90){
                    
        }
            else if (keycode >= 97 && keycode <= 122){

        }

            else if(keycode == 64){
                 if (this.val.replace(/[^@]/g,"").length > 0){
                    return false;                
            }
                 else if (this.val == '' && keycode == 64){
                    return false;                   
            }             
            else if ((String.fromCharCode(keycode) === '@' && String(temp2.charAt(temp2.length - 1)) === '.')){                  
                    return false;    
                }
                 else if ((String.fromCharCode(keycode) === '@' && String(temp2.charAt(temp2.length - 1)) === '_')){                  
                    return false;    
                }
                
        }
            else if(keycode == 95){
                 if (this.val.replace(/[^_]/g,"").length > 0){
                    return false;                
            }
                 else if (this.val == '' && keycode == 95){
                    return false;                   
            }             
            else if (String.fromCharCode(keycode) === '_' && String(temp2.charAt(temp2.length - 1)) === '.'){                  
                    return false;    
                }
                 else if ((String.fromCharCode(keycode) === '_' && String(temp2.charAt(temp2.length - 1)) === '@')){                  
                    return false;    
                }
        }

            else if (keycode == 46 || keycode == 95){
                    let temp: number = 0;
                    
                    if (this.val == '' && keycode == 46){
                    return false;
                }
                    else if (this.val == '' && keycode == 95){
                    return false;    
                }
                    else if (this.val.replace(/[^.]/g,"").length > 2){
                    return false;
                }
                    else if (String.fromCharCode(keycode) === '.' && String(temp2.charAt(temp2.length - 1)) === '.'){                  
                    return false;    
                }
                    else if (String.fromCharCode(keycode) === '.' && String(temp2.charAt(temp2.length - 1)) === '@'){                  
                    return false;    
                }
                else if (String.fromCharCode(keycode) === '.' && String(temp2.charAt(temp2.length - 1)) === '_'){                  
                    return false;    
                }
                                          
        }
        
        else{
                return false;
            }
    }
}
        authorization = function(){
            let loginInput: any;
            let login: any;
            let passwordInput: any;
            let password: any;
            loginInput = document.getElementById('login');
            login = loginInput.value;
            passwordInput = document.getElementById('password');
            password = passwordInput.value;
           if(login === 'geejay.skv@gmail.com' && password === 'cnshrekmrbhbkk'){
                alert('правильно');
           }
           else{
               alert('не правильно');
           }
        }
}
