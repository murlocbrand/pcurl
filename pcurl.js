/* Copyright (c) 2015 Axel Smeets */
var lz = require('lz-string'),
    req = require('request')

module.exports = function pcurl (station, opts, callback) {
    var url = 'https://piratrad.io/' + station + '/tracks'
    req(url, function (err, res, body) {
        if (err) {
            callback(err, [])
            return
        }

        if (!callback) {
            callback = opts
            opts = [ 'url' ]
        }

        var list = JSON.parse(body).unresolvedList
        var parsed = []
        for (var i = 0; i < list.length; i++) {
            try {
                var track = JSON.parse(list[i])
                var parsedTrack = {}

                for (var i = 0; i < opts.length; i++)
                    parsedTrack[opts[i]] = lz.decompressFromUTF16(track[opts[i]])

                parsed.push(parsedTrack)
            } catch (e) {}
        }

        callback(undefined, parsed)
    })

}