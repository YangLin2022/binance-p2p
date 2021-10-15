import { VercelRequest, VercelResponse } from '@vercel/node';
import puppeteer from 'puppeteer'
// import chromium from 'chrome-aws-lambda'

// import { initializeSupabase } from './supabase'

/** */
export default async (req: VercelRequest, res: VercelResponse) => {
  console.time('scrape-ads')
  // const supabase = initializeSupabase()
  const browser = await puppeteer.launch({
    args: ['-no-sandbox']
  });
  const page = await browser.newPage();

  const baseURL = 'https://p2p.binance.com/es/trade/'
  const tradeURL = `buy/USDT?fiat=USD&payment=${'Transferwise'.toUpperCase()}`
  
  await page.goto(baseURL + tradeURL, {
    waitUntil: 'networkidle0'
  });

  /** CLOSE MODAL */
  try {
    const modal$ = '.css-vp41bv .css-1pcqseb';
    await (await page.$(modal$))?.click()
  } catch(err) {
    console.error("An error occurred trying to close the modal or didn't exist")
  }
  
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  res.setHeader('content-type', 'image/png')
  res.send(screenshot);

  console.timeEnd('scrape-ads')
};