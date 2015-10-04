pcurl: get track list as urls from a [piratradio](https://piratrad.io) station

*note: this is the npm version*  
*note: this is a simple package*  
*note: do not expect wonders*  

install:
 - `npm i pirate-curl --save`

usage:  
```
var pcurl = require('pirate-curl')

// pcurl(station, opts, callback) or
// pcurl(station, callback)

// opts is an array that decides what output you get. it defaults to 'url' only.
// possible values: 'url', 'title', 'support'
// e.g: pcurl("publicradio", ['url', 'support'], function (error, list) { })

pcurl('publicradio', function (error, list) {
    // yippie!  
})
```

`console.log(list)`:  
```
[
    { url: "https://www.youtube.com/watch?v=xymjDyGIvQ4" },
    { url: "https://www.youtube.com/watch?v=lFpCJcsFFAc" },
    { url: "https://www.youtube.com/watch?v=LvwBDCb7bmM" }
]
```

license:  
MIT

recommended:
 - [top 10 piratradio stations](https://piratrad.io/random)
 - [cool api](https://api.piratrad.io)
