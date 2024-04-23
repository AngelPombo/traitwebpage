const {getPool} = require ('../../database/db');
const saveVideo = require ("../../helpers/saveVideo");
const generateError = require('../../helpers/generateError');

async function addEventVideo(req, res, next){

    try{
        const{idEvent} = req.params;
        const pool = await getPool();
        const insertedVideos = [];
        const videos = req.files?.videos;

        if(videos.length > 3){
            return next(generateError('Has subido demasiados videos. Máximo 3', 400));
        }

        if (Array.isArray(videos)) {
            for (const video of videos) {
                const videoName = await saveVideo(video);

                await pool.query(
                    'INSERT INTO videos (event_id, video_name) VALUES (?, ?)',
                    [idEvent, videoName]
                );
        
                insertedVideos.push(videoName);
            }
        } else {
            const videoName = await saveVideo(videos);
            
            await pool.query(
                'INSERT INTO videos (event_id, video_name) VALUES (?, ?)',
                [idEvent, videoName]
            );
            insertedVideos.push(videoName);
        }
        const [newVideos] = await pool.query(
            `
                SELECT video_name AS name_video, id AS video_id
                FROM videos
                WHERE event_id = ?
            `,[idEvent]
        )

        if(!newVideos.length){
            return next(generateError('Ha ocurrido un error almacenando el video', 400));
        }

        res.status(200).send({
            status: 'OK',
            message: 'El video se cargó correctamente',
            newVideos: newVideos
        });

    }catch(e){
        console.log(e);
        next(e);
    }
}

module.exports = addEventVideo;
