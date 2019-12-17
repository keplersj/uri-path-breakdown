# uri-path-breakdown

Single-function module to break a URI path down to its parts

## Installation

Install using NPM:

```bash
npm install uri-path-breakdown
```

## Usage

Use exported function to break a URI down to the segments of its path:

```js
import { breakdownURIPath } from "uri-path-breakdown";

const segments = breakdownURIPath("/test/subdir/example.html"); // => ["/", "/test/", "/test/subdir/", "/test/subdir/example.html"]
```

## License

Copyright 2019 [Kepler Sticka-Jones](https://keplersj.com). Licensed MIT
