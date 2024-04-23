const {getPool} = require('../../database/db');
const generateError = require('../../helpers/generateError')

async function getEvent (req,res,next) {
    try{

        const {idEvent} = req.params;

        const pool = await getPool();

        let [event] = await pool.query(
            `
                SELECT id, title, content, video1, video2, video3, event_date
                FROM events
                WHERE id=?
            `,[idEvent]

        );

        if(!event.length){
            return next(generateError('No se ha podido encontrar el evento', 404));
        }

        const [event_photos] = await pool.query(
            `
                SELECT *
                FROM events_photos
                WHERE event_id = ?
            `,[idEvent]
        );

        event[0].event_photos = event_photos;

        res.status(200).send({
            status: "OK",
            data: event
        });
    } catch(e){
        console.log(e);
        next(e);
    }
} 


module.exports = getEvent;