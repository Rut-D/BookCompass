BOOKCOMPASS SCREENSHOT AUTOMATION

1. Open your BookCompass project in VS Code.

2. Start the frontend with Live Server.
   Usually:
   http://127.0.0.1:5500/index.html

3. If your URL is different, open capture.js and change:
   const URL = "http://127.0.0.1:5500/index.html";

4. Open a terminal in this folder and run:

   npm init -y
   npm install playwright
   npx playwright install chromium

5. Run:

   node capture.js

The script will create a screenshots folder containing:
01_home.png
02_how_it_works.png
03_search.png
04_recommendations.png
05_book_card.png
06_book_details.png
07_full_page.png

For the recommendation screenshots, your Python backend should also be running at:
http://127.0.0.1:5000

If the backend is not running, the frontend/full-page screenshots can still be captured.
