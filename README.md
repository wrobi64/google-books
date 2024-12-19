This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Details
App is simple and straight to the point. Landing page is similar to google with a search input to enter some text. Click search or press enter and books that match some relevancy to the search text will show.

Upon searching the url will change to /search with your search text in the search params

The results list is to spec without additional use-cases beyond searching for a different set of results!

The search page handles cases with no results and renders items to fit the device/screen size accordingly.

One of the limitations is that the results list cannot be more than 40 items. I tried to implement pagination and continuous loading, but the google books api does not return more than 40 results and, even when specifying offsets and sizes, duplicates are everywhere the results are inconcistent on google's end.

## Running locally
Make sure the google-books-backend is running locally first (https://github.com/wrobi64/google-books-backend)

Then, run the frontend development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hosted URL
https://d3sqix96uennau.cloudfront.net

## Deploy updates to AWS
Simply run:
```
npx sst deploy --stage production
```

