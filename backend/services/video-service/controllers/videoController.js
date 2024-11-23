const Video = require("../models/Video");

const uploadVideo = async (req, res) => {
  const { title, description, uploadedBy } = req.body;
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No video file uploaded" });
    }

    await Video.create({
      title,
      description,
      videoUrl: "defaultVideoUrl",
      thumbnailUrl: "defaultThumbnailUrl",
      uploadedBy,
    });

    res.status(201).json({
      message: "Video uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload video" });
  }
};

module.exports = { uploadVideo };
