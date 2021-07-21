const { Schema, model } = require('mongoose');

const artistSchema = new Schema({
    spotifyID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    albums: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Album'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});


const Artist = model('Artist', artistSchema);

module.exports = Artist;
