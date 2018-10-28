const puppeteer = require("puppeteer");

describe("Google.com", () => {
  let browser, page;
  let url = "https://tictactoe-scrumgang.herokuapp.com/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Server responds with 200 status code", async () => {
    const response = await page.goto(url);
    // Check that the server responds with a 200 status message
    await expect(response.status()).toBe(200);
  });

});
