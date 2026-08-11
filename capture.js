const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage({
        viewport: {
            width: 1440,
            height: 900
        },
        deviceScaleFactor: 1
    });

    const URL = "http://127.0.0.1:5500/frontend/index.html";

    console.log("Opening BookCompass...");
    await page.goto(URL, {
        waitUntil: "domcontentloaded"
    });

    await page.waitForTimeout(2000);

    fs.mkdirSync("screenshots", { recursive: true });

    async function screenshot(name) {
        console.log(`Taking: ${name}`);

        await page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: false
        });
    }

    // =========================
    // 1. HOME
    // =========================

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);

    await screenshot("01_home");


    // =========================
    // 2. SCROLL THROUGH PAGE
    // =========================

    const scrollPositions = [
        ["02_section_1", 700],
        ["03_section_2", 1400],
        ["04_section_3", 2100],
        ["05_section_4", 2800]
    ];

    for (const [name, position] of scrollPositions) {

        await page.evaluate((y) => {
            window.scrollTo({
                top: y,
                behavior: "instant"
            });
        }, position);

        await page.waitForTimeout(800);

        await screenshot(name);
    }


    // =========================
    // 3. SEARCH BOOK
    // =========================

    const input = page.locator("#bookInput");

    if (await input.count()) {

        console.log("Book input found.");

        await input.scrollIntoViewIfNeeded();

        await input.fill(
            "Mystery thriller with unexpected twists"
        );

        await page.waitForTimeout(500);

        await screenshot("06_search");
    }
    else {

        console.log("WARNING: bookInput not found.");
    }


    // =========================
    // 4. CLICK FIND MY BOOK
    // =========================

    const button = page.locator("#findBtn");

    if (await button.count()) {

        console.log("Find My Book button found.");

        await button.click();

        console.log("Waiting for recommendations...");

        await page.waitForTimeout(5000);

        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await page.waitForTimeout(1000);

        await screenshot("07_recommendations");

    }
    else {

        console.log("WARNING: findBtn not found.");
    }


    // =========================
    // 5. FIRST BOOK CARD
    // =========================

    const card = page.locator(".lib-card").first();

    if (await card.count()) {

        console.log("Book card found.");

        await card.scrollIntoViewIfNeeded();

        await page.waitForTimeout(700);

        await card.screenshot({
            path: "screenshots/08_book_card.png"
        });

        console.log("Saved: 08_book_card");
    }
    else {

        console.log("WARNING: No .lib-card found.");
    }


    // =========================
    // 6. OPEN BOOK DETAILS
    // =========================

    if (await card.count()) {

        await card.click();

        await page.waitForTimeout(700);

        const modal = page.locator("#bookModal");

        if (await modal.count()) {

            await modal.screenshot({
                path: "screenshots/09_book_details.png"
            });

            console.log("Saved: 09_book_details");

        } else {

            console.log("WARNING: bookModal not found.");
        }
    }


    // =========================
    // 7. FULL PAGE
    // =========================

    await page.screenshot({
        path: "screenshots/10_full_page.png",
        fullPage: true
    });

    console.log("\n================================");
    console.log("DONE!");
    console.log("Screenshots saved in:");
    console.log("./screenshots/");
    console.log("================================\n");

    await browser.close();
})();