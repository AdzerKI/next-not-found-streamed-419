React error #419 reported for `notFound()` streamed into a Suspense boundary.

```
npm ci
npx playwright install chromium
npm run build && npm start
npm run check
```

`/missing` renders the 404 page, and the browser gets `Minified React error #419` as an uncaught error.
