/* ------------------------------------
  Plugin Developed by Leonardo Paiva
  Author: Leonardo Souza Paiva | contato@leonardopaiva.com | www.leonardopaiva.com
  https://github.com/leonardopaiva/
------------------------------------ */
/* Component: Custom Select */
/* Purpose: provide general functions to e4m plugins */
//------------------------------
var E4M  = E4M || {};

E4M.Functions = {

	//Quando iniciar o módulo
	setUp: function() {
		console.log("E4M.Functions iniciado");
	},


	strPos: function strpos (haystack, needle, offset) {
	    // Finds position of first occurrence of a string within another
	    //
	    // version: 1109.2015
	    // discuss at: http://phpjs.org/functions/strpos    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	    // +   improved by: Onno Marsman
	    // +   bugfixed by: Daniel Esteban
	    // +   improved by: Brett Zamir (http://brett-zamir.me)
	    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);    // *     returns 1: 14
	    var i = (haystack + '').indexOf(needle, (offset || 0));
	    return i === -1 ? false : i;
	},

	trim: function Trim(str){
		return str.replace(/^\s+|\s+$/g,"");
	},

	empty: function empty (mixed_var) {
	    // !No description available for empty. @php.js developers: Please update the function summary text file.
	    //
	    // version: 1109.2015
	    // discuss at: http://phpjs.org/functions/empty
	    // +   original by: Philippe Baumann
	    // +      input by: Onno Marsman
	    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	    // +      input by: LH
	    // +   improved by: Onno Marsman
	    // +   improved by: Francesco
	    // +   improved by: Marc Jansen
	    // +   input by: Stoyan Kyosev (http://www.svest.org/)
	    // *     example 1: empty(null);
	    // *     returns 1: true
	    // *     example 2: empty(undefined);
	    // *     returns 2: true
	    // *     example 3: empty([]);
	    // *     returns 3: true
	    // *     example 4: empty({});
	    // *     returns 4: true
	    // *     example 5: empty({'aFunc' : function () { alert('humpty'); } });
	    // *     returns 5: false
	    var key;

	    if (mixed_var === "" || mixed_var === 0 || mixed_var === "0" || mixed_var === null || mixed_var === false || typeof mixed_var === 'undefined') {
	        return true;
	    }

	    if (typeof mixed_var == 'object') {
	        for (key in mixed_var) {
	            return false;
	        }
	        return true;
	    }

	    return false;
	},

	getValNumForm: function(idInput) {

		var valor = this.trim($("#"+idInput).val());
		valor = Math.ceil(valor);
		valor = parseInt(valor);

		if(isNaN(valor)){
			E4M.Feedback.chamar("Você deve digitar um número inteiro válido",E4M.Feedback.Const.ERRO);
			return 0;
		}else{
			if(valor == ""){
				return 0;
			}else{
				return valor;
			}
		}

	},

	getClosest: function (el, tag) {
		// Finds position first occurrence of 'tag' or "id" or "class" from 'el' to up
	  	// this is necessary since nodeName is always in upper case
	  	// bugs: still not working if the target have more than one class, need fix
	  	//variables
	  	var search = null;
	  	//defining el type
	  	if(tag[0] == "#"){
	  		search = 'id';
	  		tag = tag.substr(this.strPos(tag,"#",0)+1);
	  	}else if(tag[0] == "."){
	  		search = 'className';
	  		tag = tag.substr(this.strPos(tag,".",0)+1);
	  		console.log('still not working if target have more than one class');
	  	}else{
	  		search = 'nodeName';
		  	tag = tag.toUpperCase();
		}
	  	//searching target
	  	do {
	    	if (el[search] === tag) {
	      	// tag name is found! let's return it. :)
	      	return el;
	    	}
	  	} while (el = el.parentNode);
	  	// not found :(
	  	return null;
	},

	/* FADE IN FADE OUT */
	fadeOut: function(id, time){
		this.fade(id, time, 100, 0);
	},

	fadeIn: function (id, time) {
	    this.fade(id, time, 0, 100);
	},

	fade: function(id, time, ini, fin) {
	    var target = document.getElementById(id);
	    var alpha = ini;
	    var inc;
	    if (fin >= ini) {
	        inc = 2;
	        target.style.display= "block";
	    } else {
	        inc = -2;
	        target.style.display= "none";
	    }
	    timer = (time * 1000) / 50;
	    var i = setInterval(
	        function() {
	            if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
	                clearInterval(i);
	            }
	            E4M.Functions.setAlpha(target, alpha);
	            alpha += inc;
	        }, timer);
	},

	setAlpha: function(target, alpha) {
	    target.style.filter = "alpha(opacity="+ alpha +")";
	    target.style.opacity = alpha/100;
	},

	//getData
	getData: function(e,target){
		return e.getAttribute(target);
	}

};