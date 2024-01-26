const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(
    "./id-development-d88b1-firebase-adminsdk-tbukn-e2c1b2525a.json"
  ),
});

const fs = require("fs");
const path = require("path");

const folderPath = "./src/bible-master";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const promises = [];

  // Loop over the files in the directory
  files.forEach((file, index) => {
    const filePath = path.join(folderPath, file);

    // Check if it's a file
    if (fs.statSync(filePath).isFile()) {
      // Read file content asynchronously
      fs.readFile(filePath, "utf-8", (readErr, data) => {
        if (readErr) {
          console.error("Error reading file:", readErr);
          return;
        }

        try {
          // Parse JSON content
          const bibleData = JSON.parse(data);

          const book = bibleData.book;
          const chapters = bibleData.chapters;

          console.log("Adding document for book:", book);

          promises.push(
            admin.firestore().collection("bible-master").doc(book).set({
              book,
              chapters,
            })
          );
        } catch (parseError) {
          console.error(`Error parsing JSON in file ${file}:`, parseError);
        }

        // Check if all files have been processed
        if (index === files.length - 1) {
          Promise.all(promises)
            .then(() => {
              console.log("Bible books added to Firestore successfully!");
              process.exit();
            })
            .catch((error) => {
              console.error("Error adding Bible books to Firestore:", error);
              process.exit(1);
            });
        }
      });
    }
  });
});
