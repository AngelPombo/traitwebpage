const {getPool} = require('../../database/db');
const generateError = require('../../helpers/generateError');
const convertPhotosIds = require('../../helpers/convertPhotosIds');

async function getAllEvents (req,res,next){
    try{

        const pool = await getPool();

            let [events] = await pool.query(
                `SELECT e.id, e.create_date, e.title, e.content, e.video1, e.video2, e.video3, GROUP_CONCAT(ep.id) AS photos_ids, GROUP_CONCAT(ep.photo_name) AS event_photos
                FROM events e
                LEFT JOIN
                events_photos AS ep ON e.id = ep.event_id
                GROUP BY e.id
                ORDER BY e.create_date DESC
            `);


            if(events.length === 0 || events[0].length === 0){
              return next(generateError('Actualmente no hay ningún evento', 404));
          }
          
          convertPhotosIds(events);        
      

        res.status(200).send({
            status: 'OK',
            data: events
        });

    }catch(e){
        console.log(e);
        next(e);
    }
}

module.exports = getAllEvents;