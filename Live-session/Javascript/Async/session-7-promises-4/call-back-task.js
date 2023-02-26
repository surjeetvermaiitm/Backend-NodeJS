//use callback for download
//write a fn to download data from url
//write a fn to save that downloaded data in a file and return the filename
//write a fn to upload the file written in previous step to  a new url

function download(url, cb) {
  //cb is callback fn
  console.log("starting to download data from ", url);
  setTimeout(function down() {
    console.log("Downloaded completed");
    const content = "ABCEDE";
    cb(content);
  }, 4000);
}

function writeFile(data, cb) {
  console.log("Started writing a file with", data);
  setTimeout(function write() {
    console.log("completed writing the data in a file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

function upload(url, file, cb) {
  console.log("started uploading", file, "on", url);
  setTimeout(function up() {
    console.log("upload completed");
    const response = "success";
    cb(response);
  }, 2000);
}
//call back hell
download("www.xyz.com", function processDownload(content) {
  console.log("we are now going to process the download data");
  writeFile(content, function processWrite(filename) {
    console.log("we have downloaded and written the file,now will upload");
    upload("www.upload.com", filename, function uploadFile(response) {
      console.log("uploaded complete", response);
    });
  });
});

// download("www.xyz.com", function process(content) {
//   console.log("Downloaded data is ", content);
// });
// writeFile("abdcef", function process(name) {
//   console.log("written file is ", name);
// });

// function fetchData(url) {
//   return new Promise(function (resolve, reject) {
//     console.log("started download from ", url);
//     setTimeout(function processDownloading() {
//       let data = "Dummy data";
//       console.log("Download completed");
//       resolve(data);
//       console.log("Download completed 2");
//     }, 7000);
//   });
// }
