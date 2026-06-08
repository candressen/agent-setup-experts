import puppeteer from 'puppeteer';
import { pathToFileURL } from 'url';

const htmlPath = '/Users/bobagent/Projects/agent-setup-experts/proposals/accounting-firm-proposal.html';
const pdfPath = '/Users/bobagent/Projects/agent-setup-experts/proposals/accounting-firm-proposal.pdf';

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });
await page.pdf({
  path: pdfPath,
  format: 'Letter',
  margin: { top: '0.75in', right: '0.75in', bottom: '0.75in', left: '0.75in' },
  printBackground: true
});
await browser.close();
console.log('✅ PDF saved:', pdfPath);
