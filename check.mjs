import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:3000/missing'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
await page.goto(url, { waitUntil: 'networkidle' })
console.log('body:', (await page.locator('body').innerText()).replace(/\s+/g, ' '))
console.log('page errors:', errors)
await browser.close()
