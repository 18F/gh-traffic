# Github Traffic Stats

## Running

To get started, clone this repo, then run `npm install` to get all the dependencies and dev dependencies installed.  Then just run it:

```
node index.js
```

## Authentication & Environment

The server needs a Github `user_session` cookie, which you can snoop from your browser.  It expects this to be in a `SESSION` environment variable.  Additionally, the server defaults to port 5200, but that can be configured with the `PORT` environment variable.

Note that this project uses [dotenv](https://www.npmjs.com/package/dotenv), so you can store your environment variables in a `.env` file rather than defining them directly in your environment.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
