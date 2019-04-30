# YouTube Searcher
[![Netlify Status](https://api.netlify.com/api/v1/badges/513459bc-b1bc-4ada-b0f8-b3662cf38d41/deploy-status)](https://app.netlify.com/sites/201905-youtube-search/deploys)

This app is one of my hobby using React.

[Live Online](https://youtube-search.oootoko.net)

## Development

_Note that API_KEY should be replaced with your [YouTube Data API V3 Access Key](https://console.developers.google.com/apis/credentials)_

```sh
$ yarn
$ yarn start --define process.env.API='"API_KEY"'
```

## Deployment

```sh
$ yarn build --define process.env.API='"API_KEY"'
```

You can build your own server or use a web deployment service like [Netlify](https://www.netlify.com/)

## TODO

- [ ] Update or replace packages and settings
