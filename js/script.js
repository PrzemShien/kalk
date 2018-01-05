'use strict';

//var collectionInputs = document.querySelectorAll('input');
//console.log(collectionInputs);
//
//var num1 = 0;
//var num2 = 0;
//var res = 0;
//
//var divCollection = document.querySelectorAll('button');
//console.log(divCollection);
////for(var i = 0; i<divAnch.length; i++){
//divCollection[0].addEventListener('click', function(){
//        if(divCollection[0].innerHTML == '-'){
//        num1 = parseFloat(collectionInputs[0].value);
//        num2 = parseFloat(collectionInputs[1].value);
//        res = num1 - num2;    
//        document.getElementById('result').innerHTML = res;}
//    })
//divCollection[1].addEventListener('click', function(){
//        if(divCollection[1].innerHTML == '+'){
//        num1 = parseFloat(collectionInputs[0].value);
//        num2 = parseFloat(collectionInputs[1].value);
//        res = num1 + num2;    
//        document.getElementById('result').innerHTML = res;}
//    })
//divCollection[2].addEventListener('click', function(){
//        if(divCollection[2].innerHTML == '/'){
//        num1 = parseFloat(collectionInputs[0].value);
//        num2 = parseFloat(collectionInputs[1].value);
//        res = num1 / num2;    
//        document.getElementById('result').innerHTML = res;}
//    })
//divCollection[3].addEventListener('click', function(){
//        if(divCollection[3].innerHTML == '*'){
//        num1 = parseFloat(collectionInputs[0].value);
//        num2 = parseFloat(collectionInputs[1].value);
//        res = num1 * num2;    
//        document.getElementById('result').innerHTML = res;}
//    })


(function(){
    function Calkulator(form, result){
        this._form = document.getElementById(form);
        this._result = document.getElementById(result);
        this._collectionInputs = document.querySelectorAll('#' + form + ' input');
        this._collectionButtons = document.querySelectorAll('#' + form + ' button');
//        console.log(this._collectionButtons);
        this._res = '';
        
        this._assignEvents();
    }
    
    Calkulator.prototype._assignEvents = function(){
        this._form.addEventListener('click', this._resultCalkulator.bind(this));
        
    }
    
    Calkulator.prototype._doSubstraction = function(){
        this._num1 = parseFloat(this._collectionInputs[0].value);
        this._num2 = parseFloat(this._collectionInputs[1].value);
        this._res = this._num1 - this._num2;
//        console.log(this._res);
        }

    
    Calkulator.prototype._doAddition = function(){
        this._num1 = parseFloat(this._collectionInputs[0].value);
        this._num2 = parseFloat(this._collectionInputs[1].value);
        this._res = this._num1 + this._num2;
//        console.log('tak');
//        console.log(this._num1);
//        console.log(this._num2);
    }
    
    Calkulator.prototype._doMultiplication = function(){
        this._num1 = parseFloat(this._collectionInputs[0].value);
        this._num2 = parseFloat(this._collectionInputs[1].value);
        this._res = this._num1 * this._num2;
//        console.log(this._res);
    }
    
    Calkulator.prototype._doDivision = function(){
        this._num1 = parseFloat(this._collectionInputs[0].value);
        this._num2 = parseFloat(this._collectionInputs[1].value);
        this._res = this._num1 / this._num2;
//        console.log(this._res);
    }
    
    Calkulator.prototype._resultCalkulator = function(e){
        e.preventDefault();
        for(var i = 0; i < this._collectionButtons.length; i++){
        this._collectionButtons[0].addEventListener('submit', this._doSubstraction(), true);
        this._collectionButtons[1].addEventListener('submit', this._doAddition(), true);
        this._collectionButtons[2].addEventListener('submit', this._doMultiplication(), true);
        this._collectionButtons[3].addEventListener('submit', this._doDivision(), true);
        }
        this._result.innerHTML = this._res;
        
    }
    
var calk = new Calkulator('formHtml', 'resultHtml');
    

    }());




//(function(){
//    function Karta(nazwa){
//        this._nazwa = document.getElementById(nazwa);
//        this._wejscie = document.querySelector('input');
//        
//        this._podajNazwe();
//    }
//
//     Karta.prototype._podajNazwe = function(){
//        this._nazwa.addEventListener('click', this._wykonajFunkcje.bind(this), true);
//        console.log(this._nazwa);
//    }
//    
//    Karta.prototype._pobierzPole = function(){
//        this._wartosc = this._wejscie.value
//    }
//    
//    Karta.prototype._wykonajFunkcje = function(e){
////        e.preventDefault();
//        this._pobierzPole();
//        this._nazwa.innerHTML = this._wartosc + RODZAJ;
//    }
//
//    
//    var obiekt = new Karta('plansza');
//    
//    
//}());




