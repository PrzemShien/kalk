'use strict';


(function(){
    function Calculator(form, result){
        this._form = document.getElementById(form);
        this._result = document.getElementById(result);
        this._collectionInputs = document.querySelectorAll('#' + form + ' input');
        this._collectionButtons = document.querySelectorAll('#' + form + ' button');
        this._res = '';
        this._assignEvents();
    }
    
    Calculator.prototype._assignEvents = function(){
        this._form.addEventListener('submit', this._resultCalkulator.bind(this));
        
    }
    
    Calculator.prototype._makeCalculations = function(){
        this._num1 = parseFloat(this._collectionInputs[0].value);
        this._num2 = parseFloat(this._collectionInputs[1].value);
    }
    
    Calculator.prototype._doSubstraction = function(){
        this._makeCalculations();
        this._res = this._num1 - this._num2;
        console.log(this._res);
        }

    
    Calculator.prototype._doAddition = function(){
        this._makeCalculations();
        this._res = this._num1 + this._num2;
        console.log(this._res);

    }
    
    Calculator.prototype._doMultiplication = function(){
        this._makeCalculations();
        this._res = this._num1 * this._num2;
        console.log(this._res);
    }
    
    Calculator.prototype._doDivision = function(){
       this._makeCalculations();
        this._res = this._num1 / this._num2;
        console.log(this._res);
    }
    
    Calculator.prototype._calcHandler = function(){
        
        function handler(n){
            return function(){
                if(n == 0) this._doAddition();
                if(n == 1) this._doDivision();
                if(n == 2) this._doMultiplication();
                if(n == 3) this._doSubstraction();
            }
        }
        for(var i = 0; i < this._collectionButtons.length; i++){
            this._collectionButtons[i].addEventListener('click', handler(i))
        }
    }
    
    Calculator.prototype._resultCalkulator = function(e){
                e.preventDefault();
        
        this._calcHandler()
          
        this._result.innerHTML = this._res;    
    }
    new Calculator('formHtml', 'resultHtml');
    
})();
