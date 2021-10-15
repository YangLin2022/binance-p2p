import { VercelRequest, VercelResponse } from '@vercel/node';
import puppeteer from 'puppeteer'
// import chromium from 'chrome-aws-lambda'

// import { initializeSupabase } from './supabase'

/** */
export default async (req: VercelRequest, res: VercelResponse) => {
  console.time('scrape-ads')
  // const supabase = initializeSupabase()
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const baseURL = 'https://p2p.binance.com/es/trade/'
  const tradeURL = `buy/USDT?fiat=USD&payment=${'Transferwise'.toUpperCase()}`
  
  await page.goto(baseURL + tradeURL, {
    waitUntil: 'networkidle0'
  });
  
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  res.setHeader('content-type', 'image/png')
  res.send(screenshot);

  console.timeEnd('scrape-ads')
};