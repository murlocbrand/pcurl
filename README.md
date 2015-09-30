pcurl: get track list as urls from a [piratradio](https://piratrad.io) station

install:  
 - `git clone https://github.com/murlocbrand/pcurl`
 - `cd pcurl`
 - `npm install`

usage:  
`node pcurl.js <stationUrl>`

example output:  
```
https://www.youtube.com/watch?v=xymjDyGIvQ4
https://www.youtube.com/watch?v=lFpCJcsFFAc
https://www.youtube.com/watch?v=LvwBDCb7bmM
```

grep example:  
`node pcurl.js publicradio | grep soundcloud`

license:  
MIT

recommended:  
[top 10 piratradio stations](https://piratrad.io/random)