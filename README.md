pcurl: get track list as urls from a [piratradio](https://piratrad.io) station

*note: this is the npm version*  
*note: this is a simple package*  
*note: do not expect wonders*  

install:
 - `npm i pirate-curl --save`

usage:  
```
var pcurl = require('pirate-curl')

pcurl('publicradio', function (error, list) {
    // yippie!  
})
```

`console.log(list)`:  
```
[
"https://www.youtube.com/watch?v=xymjDyGIvQ4",
"https://www.youtube.com/watch?v=lFpCJcsFFAc",
"https://www.youtube.com/watch?v=LvwBDCb7bmM"
]
```

license:  
MIT

recommended:
 - [top 10 piratradio stations](https://piratrad.io/random)
 - [cool api](https://api.piratrad.io)
