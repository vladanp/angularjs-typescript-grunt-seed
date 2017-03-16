'use strict';

var homePage = function () {
  this.homeTitle = element(by.css('.home-title'));
  this.homeData = element.all(by.repeater('item in home.items'));
}

module.exports = new homePage();
