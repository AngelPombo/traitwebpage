const {getPool} = require("../../database/db");
const generateError = require('../../helpers/generateError');
const eventSchema = require('../../schemas/eventSchema');
const { photoSchema, arrayPhotoSchema } = require('../../schemas/photoSchema');
const savePhoto = require('../../helpers/savePhoto');
const convertPhotosIds = require('../../helpers/convertPhotosIds');


async function editEvent (req,res,next) {
    try{

        const {idEvent} = req.params;
        const pool = await getPool();

        const insertedPhotos = [];

        const photos = req.files?.photo;
        let photoErrorSchema;

        const {error} = eventSchema.validate(req.body);
        
        if (error) {
            return next(generateError(error.message, 400));
        }

        const { title, content, video1, video2, video3, event_date } = req.body;
        
        if(req.files){
            const [countIdPhotos] = await pool.query(
                `
                SELECT COUNT(id) AS totalNumOfPhotos
                FROM events_photos
                WHERE event_id = ?
                `, [idEvent]
            );

            if ((photos.length + countIdPhotos[0].totalNumOfPhotos) > 400){
                return next(generateError('Has subido demasiadas fotos. Máximo 400', 400));
            }

            if (Array.isArray(photos)){
                const { error } = await arrayPhotoSchema.validateAsync(photos);
                photoErrorSchema = error;
            }else{
                await photoSchema.validateAsync(photos);
            }
            
            if (photoErrorSchema){
                return next(generateError(errorSchema.details[0].message, 400));
            }

            if (Array.isArray(photos)){
                for (const photo of photos) {
                    const photoName = await savePhoto(photo, 500);
    
                    await pool.query(
                    'INSERT INTO events_photos (event_id, photo_name) VALUES (?, ?)',
                    [idEvent, photoName]
                    );
            
                    insertedPhotos.push(photoName);
                }
            }else{
                const photoName = await savePhoto(photos, 500);
                await pool.query(
                    'INSERT INTO events_photos (event_id, photo_name) VALUES (?, ?)',
                    [idEvent, photoName]
                );
                insertedPhotos.push(photoName);
            }
        }

        const [editedEvent] = await pool.query(
            `
                UPDATE events 
                SET title = ?, content = ?, video1 = ?, video2 = ?, video3 = ? event_date=?
                WHERE id = ?
            `,
            [title, content, video1, video2, video3, event_date, idEvent]  
        );

        const [updatedEvent] = await pool.query(
            `
                SELECT e.id, e.title, e.content, e.video1, e.video2, e.video3, e.event_date, GROUP_CONCAT(ep.id) AS photos_ids, GROUP_CONCAT(ep.photo_name) AS event_photos
                FROM events e
                LEFT JOIN
                events_photos AS ep ON e.id = ep.event_id
                WHERE e.id=?
                GROUP BY e.id
            `,
            [idEvent]
        );

        convertPhotosIds(updatedEvent);

        res.status(200).send({
            status: "OK",
            data: updatedEvent,
            insertedPhotos,
            infoEdited: editedEvent
        });

    } catch(e){
        console.log(e);
        next(e);
    }
}

module.exports = editEvent;