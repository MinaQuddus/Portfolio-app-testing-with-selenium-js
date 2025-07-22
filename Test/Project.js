
// const { ableToSwitchToFrame } = require("selenium-webdriver/lib/until");
 const {Builder, By, until} = require('selenium-webdriver');


 async function project(params) {

 const driver = await new Builder().forBrowser('chrome').build();
await driver.get("https://minaquddus.github.io/Portfolio/");

const controlls  = await driver.wait(
    until.elementLocated(By.className('controlls')));
await driver.wait (until.elementIsVisible(controlls));
await controlls.click();
await driver.wait(until.urlContains('#portfolio'));
const pageTitle = await driver.getTitle();
console.log('navigation sunccessful. project page title',pageTitle);
await driver.quit();
} 
project();
