const fs = require('fs/promises');
const path = require('path');
const uuid = require('uuid');
const generateError = require('../helpers/generateError');
require('dotenv').config();

async function saveVideo (video) {

  console.log(video)

  const uploadsPath = path.resolve(__dirname, '../', process.env.UPLOADS_DIR);

  try {
    await fs.access(uploadsPath);
  } catch {
    await fs.mkdir(uploadsPath);
  }

  try {

    const videoName = uuid.v4() + path.extname(video.name);
    
    const videoPath = path.join(uploadsPath, videoName);

    await fs.writeFile(videoPath, videoName)

    return videoName;

  } catch (error) {
    generateError(error, 500);
  }
}

module.exports = saveVideo;