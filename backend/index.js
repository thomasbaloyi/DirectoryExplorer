const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/directory", (req, res) => {
  const { directoryPath } = req.query;
  const absolutePath = path.join(directoryPath);

  fs.readdir(absolutePath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read directory" });
    }

    const directoryListing = files.map((file) => {
      const filePath = path.join(absolutePath, file.name);
      const stats = fs.statSync(filePath);

      return {
        name: file.name,
        path: filePath,
        size: stats.size,
        extension: path.extname(file.name),
        created: stats.birthtime,
        isDirectory: file.isDirectory(),
        permissions: getPermissionsString(stats),
        absolutePath
      };
    });

    res.json(directoryListing);
  });
});

function getPermissionsString(stats) {
  return (stats.mode & 0o777).toString(8);
}
