const {Builder, By, Until}= require('selenium-webdriver');

async function testPortfolio() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://minaquddus.github.io/Portfolio/');
    console.log("succesfully loaded")
 
 
 const title = await driver.getTitle();
 console.log("page title is: ",title);

 const header = await driver.findElement(By.css('header'));
 console.log("header loaded");

const controlls = await driver.findElement(By.className('controlls'));
const tag = await controlls.getTagName();
  console.log('Element with class "controlls" is a:', tag);



  await driver.quit(); 
} 
 
testPortfolio();
