/* ------------------------------------
  Plugin Developed by Leonardo Paiva
  Author: Leonardo Souza Paiva | contato@leonardopaiva.com | www.leonardopaiva.com
  https://github.com/leonardopaiva/E4M.CustomSelect
------------------------------------ */
/* Component: Custom Select */
/* Purpose: provide a customized select */
/* Created 10/10/2014 */
/* updates to-do */
//------------------------------
var E4M = E4M || {};

E4M.CustomSelect = {
  _fakeSelect:".fake-select",
  _bool: false,
  _text: null,
  //startModule
  setUp: function () {
    this.bindEvents();
    this.setAllInputHidden();
  },

  bindEvents: function() {
    var that = this;
    //fakeSelect event handler
    $(this._fakeSelect).click(function(event){
      event.preventDefault();
      that.showSelectEventHandler.apply(that, arguments);
    });
  },

  showSelectEventHandler: function(event){
    this.hideAllSelect(event.currentTarget);
    this.showSelect(event.currentTarget);
    this.changeActiveItem(event.target);
  },

  showSelect: function(target){
    if(!this._bool){
      $(target).addClass('active');
    }

    this._bool = false;
  },

  hideAllSelect: function(target){
    if($(target).hasClass('active')){
      this._bool = true;
    }

    $(this._fakeSelect).removeClass('active');
  },

  changeActiveItem: function(target){
    var value = $(target).attr('data-value');
    if(typeof(value) != 'undefined' && !$(target).hasClass('active')){
      this.setActiveItem(target);
      this.setInputHidden(target);
    }
  },

  setActiveItem: function(target){
    var parent = $(target).closest(this._fakeSelect);
    this._text = $(target).attr('data-value');
    $(parent).find("li.active")
      .html(this._text)
      .attr('data-value',this._text);

    this.setActiveItemComplement();
  },

  setInputHidden: function(target){
    var value = $(target).attr('data-value');
    var parent = $(target).closest(this._fakeSelect);
    var inputTarget = $(parent).attr('data-input');
    $("[name='"+inputTarget+"']").val(value);
  },

  setAllInputHidden: function(){
    $(this._fakeSelect).each(function(){
      var parent = this;
      var value = $(parent).find('li.active').attr('data-value');
      var inputTarget = $(parent).attr('data-input');
       $("[name='"+inputTarget+"']").val(value);
    })
  },

  //ABSTRACT
  //will be implemented by other module
  setActiveItemComplement: function(){}
}