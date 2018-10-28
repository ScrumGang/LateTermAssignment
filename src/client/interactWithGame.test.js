const puppeteer = require("puppeteer");

describe("tictactoe-scrumgang.herokuapp.com", () => {
  let browser, page;
  let url = "http://localhost:5000";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Search results found for 'Puppeteer'", async () => {
    await page.goto(url);

    await page.click('.one');
    var x1 = await page.evaluate(() => document.querySelector('.one').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x1).toBe('X');


  });
});