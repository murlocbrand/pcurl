/* Copyright (c) 2015 Axel Smeets */
var lz = require('lz-string'),
    req = require('request')

if (process.argv.length < 2) {
    console.error("usage: node pcurl <station-url>")
    process.exit(1)
}

var station = process.argv[2]

req('https://piratrad.io/' + station + '/tracks', function (err, res, body) {
    var list = JSON.parse(body).unresolvedList
    for (var i = 0; i < list.length; i++) {
        var url = JSON.parse(list[i]).url

        process.stdout.write(lz.decompressFromUTF16(url))
        process.stdout.write('\n')
    }
})