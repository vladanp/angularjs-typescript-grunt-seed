'use strict';

var home = require('../pages/home.page.js');

describe('My app', function () {

  beforeEach(function () {
    browser.get('http://localhost:9001/#!/home');
  });

  it('should test home title', function () {
    expect(home.homeTitle.getText()).toBe("Hi! I am from home controller");
  });

  it('should test home data', function () {
    expect(home.homeData.count()).toBe(5);
  });
});
