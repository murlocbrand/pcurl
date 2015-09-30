/* Copyright (c) 2015 Axel Smeets */
var lz = require('lz-string'),
    req = require('request')

module.export = function pcurl (station, callback) {
    var url = 'https://piratrad.io/' + station + '/tracks'
    req(url, function (err, res, body) {
        if (err) {
            callback(err, [])
            return
        }

        var list = JSON.parse(body).unresolvedList
        for (var i = 0; i < list.length; i++) {
            var url = JSON.parse(list[i]).url
            list[i] = lz.decompressFromUTF16(url)
        }

        callback(undefined, list)
    })

}