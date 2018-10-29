const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices["iPhone X"];

describe("tictactoe-scrumgang.herokuapp.com", () => {
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

  test("Testing tictactoe functionality", async () => {
    await page.goto(url);
    await page.setViewport({ width: 1440, height: 800 });

    //---------------------------Testing a game where X wins---------------------------
    //X starts the game
    var currPlayer = await page.evaluate(() => document.querySelector('#move-announcer').innerText);
    expect(currPlayer).toBe("X, it's your turn!");

    //Takes a screenshot.
    await page.screenshot({path: './test-screenshots/startOfGame.png'});

    //Test click on square 1.
    await page.click('.one');
    var x1 = await page.evaluate(() => document.querySelector('.one').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x1).toBe('X');

    //It should be X's turn
    var currPlayer = await page.evaluate(() => document.querySelector('#move-announcer').innerText);
    expect(currPlayer).toBe("O, it's your turn!");

    //Test click on square 2.
    await page.click('.two');
    var o2 = await page.evaluate(() => document.querySelector('.two').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(o2).toBe('O');

    //Test click on square 9.
    await page.click('.nine');
    var x9 = await page.evaluate(() => document.querySelector('.nine').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x9).toBe('X');

    //Test click on square 5.
    await page.click('.five');
    var o5 = await page.evaluate(() => document.querySelector('.five').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(o5).toBe('O');

    //It should be X's turn
    var currPlayer = await page.evaluate(() => document.querySelector('#move-announcer').innerText);
    expect(currPlayer).toBe("X, it's your turn!");

    //Test click on square 8.
    await page.click('.eight');
    var x8 = await page.evaluate(() => document.querySelector('.eight').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x8).toBe('X');

    //Test click on square 6.
    await page.click('.six');
    var o6 = await page.evaluate(() => document.querySelector('.six').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(o6).toBe('O');

    //X should have 0 points now.
    var xPoints = await page.evaluate(() => document.querySelector('#left-scoreboard').innerText);
    expect(xPoints).toBe("X has 0 point/s!");

    //O should have 0 points now.
    var oPoints = await page.evaluate(() => document.querySelector('#right-scoreboard').innerText);
    expect(oPoints).toBe("O has 0 point/s!");

    //Test click on square 7.
    await page.click('.seven');
    var x7 = await page.evaluate(() => document.querySelector('.seven').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x7).toBe('X');

    //Player X should have won by now.
    var winner = await page.evaluate(() => document.querySelector('#move-announcer').innerText);
    expect(winner).toBe('X wins!');
    
    //X should have 1 point now.
    var xPoints = await page.evaluate(() => document.querySelector('#left-scoreboard').innerText);
    expect(xPoints).toBe("X has 1 point/s!");

    //O should have 0 points now.
    var oPoints = await page.evaluate(() => document.querySelector('#right-scoreboard').innerText);
    expect(oPoints).toBe("O has 0 point/s!");

    //Takes a screenshot
    await page.screenshot({path: './test-screenshots/endOfGame.png'});


    //---------------------------Testing a game where O wins---------------------------
    //Start a new game
    await page.click('#reset-button');
    var currPlayer = await page.evaluate(() => document.querySelector('#move-announcer').innerText);
    expect(currPlayer).toBe("X, it's your turn!");

    //Takes a screenshot.
    await page.screenshot({path: './test-screenshots/startnextGame.png'});

    //X should have 1 point now.
    var xPoints = await page.evaluate(() => document.querySelector('#left-scoreboard').innerText);
    expect(xPoints).toBe("X has 1 point/s!");

    //O should have 0 points now.
    var oPoints = await page.evaluate(() => document.querySelector('#right-scoreboard').innerText);
    expect(oPoints).toBe("O has 0 point/s!");


    //Test click on square 1.
    await page.click('.one');
    var x1 = await page.evaluate(() => document.querySelector('.one').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x1).toBe('X');

    //Test click on square 2.
    await page.click('.two');
    var o2 = await page.evaluate(() => document.querySelector('.two').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(o2).toBe('O');

    //Test click on square 4.
    await page.click('.four');
    var x4 = await page.evaluate(() => document.querySelector('.four').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x4).toBe('X');

    //Test click on square 6.
    await page.click('.five');
    var o5 = await page.evaluate(() => document.querySelector('.five').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(o5).toBe('O');

    //Test click on square 6.
    await page.click('.six');
    var x6 = await page.evaluate(() => document.querySelector('.six').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(x6).toBe('X');

    //X should have 1 point now.
    var xPoints = await page.evaluate(() => document.querySelector('#left-scoreboard').innerText);
    expect(xPoints).toBe("X has 1 point/s!");

    //O should have 0 points now.
    var oPoints = await page.evaluate(() => document.querySelector('#right-scoreboard').innerText);
    expect(oPoints).toBe("O has 0 point/s!");

    //Test click on square 6.
    await page.click('.eight');
    var o8 = await page.evaluate(() => document.querySelector('.eight').innerText.substring(0, 1)); //extract the first letter because it returns extra spaces.
    expect(o8).toBe('O');

    //Player X should have won by now.
    var winner = await page.evaluate(() => document.querySelector('#move-announcer').innerText);
    expect(winner).toBe('O wins!');

    //X should have 1 point now.
    var xPoints = await page.evaluate(() => document.querySelector('#left-scoreboard').innerText);
    expect(xPoints).toBe("X has 1 point/s!");

    //O should have 0 points now.
    var oPoints = await page.evaluate(() => document.querySelector('#right-scoreboard').innerText);
    expect(oPoints).toBe("O has 1 point/s!");
    
    //Takes a screenshot.
    await page.screenshot({path: './test-screenshots/startofNextGame.png'});
  });
});