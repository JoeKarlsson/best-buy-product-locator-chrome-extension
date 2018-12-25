# Best Buy Product Locator Chrome Extension

![chrome extension  logo](https://user-images.githubusercontent.com/4650739/50406736-b5017480-078f-11e9-9279-104216b4588a.png)

> Two day shipping to slow for you? This chrome extension will tell you if the product you are browsing is available at a Best Buy store near you for immediate in-store pickup.

[![Maintainability](https://api.codeclimate.com/v1/badges/5c4528a150a453a05d2e/maintainability)](https://codeclimate.com/github/JoeKarlsson/best-buy-product-locator-chrome-extension/maintainability)
[![BCH compliance](https://bettercodehub.com/edge/badge/JoeKarlsson/best-buy-product-locator-chrome-extension?branch=master)](https://bettercodehub.com/)
[![Build Status](https://travis-ci.org/JoeKarlsson/best-buy-product-locator-chrome-extension.svg?branch=master)](https://travis-ci.org/JoeKarlsson/best-buy-product-locator-chrome-extension)
[![Coverage Status](https://coveralls.io/repos/github/JoeKarlsson/best-buy-product-locator-chrome-extension/badge.svg?branch=master)](https://coveralls.io/github/JoeKarlsson/best-buy-product-locator-chrome-extension?branch=master)
[![deps][deps]][deps-url]
[![stars][stars]][stars-url]
[![pr][pr]][pr-url]
[![license][license]][license-url]
[![twitter][twitter]][twitter-url]
[![first-timers-only](http://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](http://www.firsttimersonly.com/)

![Best Buy Chrome Extension Screenshot](https://user-images.githubusercontent.com/4650739/50406618-81bde600-078d-11e9-8547-e166327ca64f.jpg)

The Best Buy browser extension helps make shopping online faster, easier and more secure online:

- Compare products while browsing with Amazon, Walmart and Target.
- Show you if a product can be picked up at a Best Buy store near you. We automatically find the store that nearest to you.
- Two day shipping to slow for you? This chrome extension will tell you if the product you are browsing is available at a Best Buy store for immediate in store pickup.
- Best Buy guarantees that your product will be authentic, no more counterfeit products!
- Add your product to your Best Buy cart with just one click!

We offer support for Amazon, Target and Walmart.

Note: This extension is not affiliated with Best Buy.

Learn more at www.joekarlsson.com

Note: This extension is not affiliated with Best Buy in any way, shape or form.

## Installation

```bash
# clone it
$ git clone https://github.com/JoeKarlsson/best-buy-product-locator-chrome-extension.git

# Install dependencies
$ npm install
```

You will also need a Best Buy Developer API Key in order to get this project up and running locally. Please see the developer portal for details on how to get an API Key.

Once you get the API KEY, be sure to update the .env file. See the sample file for an example of how to do this.

https://developer.bestbuy.com/

## Development

- Run script

```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```

- If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
- [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

#### Inject page

The inject script is being run by [chrome/extension/background/inject.js](chrome/extension/background/inject.js). A simple example will be inject bottom of page(`https://github.com/*`) if you visit.

If you are receiving the error message `Failed to load resource: net::ERR_INSECURE_RESPONSE`, you need to allow invalid certificates for resources loaded from localhost. You can do this by visiting the following URL: `chrome://flags/#allow-insecure-localhost` and enabling **Allow invalid certificates for resources loaded from localhost**.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

- --app-id: your extension id (can be get it when you first release extension)
- --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
- --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

## Test

- `test/app`: React components tests

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/JoeKarlsson/best-buy-product-locator-chrome-extension/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### TLDR;

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :D

## Related Links

- [Best Buy Developer Portal](https://developer.bestbuy.com/)

## LICENSE

[MIT](LICENSE)

### Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/JoeKarlsson?v=3">
        <br />
        <a href="https://github.com/JoeKarlsson">Joe Karlsson</a>
      </td>
			<td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/itsmoops?v=3">
        <br />
        <a href="https://github.com/itsmoops">Eric Moore</a>
      </td>
    <tr>
  <tbody>
</table>

[deps]: https://david-dm.org/JoeKarlsson/best-buy-product-locator-chrome-extension/status.svg
[deps-url]: https://david-dm.org/JoeKarlsson/best-buy-product-locator-chrome-extension
[pr]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: CONTRIBUTING.md
[stars]: https://img.shields.io/github/stars/JoeKarlsson/best-buy-product-locator-chrome-extension.svg?style=flat-square
[stars-url]: https://github.com/JoeKarlsson/best-buy-product-locator-chrome-extension/stargazers
[license]: https://img.shields.io/github/license/JoeKarlsson/best-buy-product-locator-chrome-extension.svg
[license-url]: https://github.com/JoeKarlsson/best-buy-product-locator-chrome-extension/blob/develop/LICENSE
[twitter]: https://img.shields.io/twitter/url/https/github.com/JoeKarlsson/best-buy-product-locator-chrome-extension.svg?style=social&style=flat-square
[twitter-url]: https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FJoeKarlsson%2Fbest-buy-product-locator-chrome-extension
