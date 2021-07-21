const { Schema, model } = require('mongoose');

const albumSchema = new Schema({
    spotifyID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    },
    popularity: {
        type: Int
    },
    favorited: {
        type: Int
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

const Album = model('Album', albumSchema);

module.exports = Album;
