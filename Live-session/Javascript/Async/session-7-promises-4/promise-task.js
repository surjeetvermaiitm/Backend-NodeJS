//use promises for download
//write a fn to download data from url
//write a fn to save that downloaded data in a file and return the filename
//write a fn to upload the file written in previous step to  a new url

function download(url) {
  return new Promise(function (resolve, reject) {
    console.log("started download from ", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download completed");
      resolve(data);
    }, 7000);
  });
}
function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("started writing in file.txt with data", data);
    setTimeout(function processDownloading() {
      let file = "file.txt";
      console.log("writing completed");
      resolve(file);
    }, 1000);
  });
}
function upload(url, file) {
  return new Promise(function (resolve, reject) {
    console.log("started uploading the file", file, "on", url);
    setTimeout(function processDownloading() {
      let response = "Success";
      console.log("writing completed");
      resolve(response);
    }, 1000);
  });
}

//.then chaining
download("www.xyz.com")
  .then(function fulfill(content) {
    console.log("we are now going to process the download data");
    return writeFile(content);
  })
  .then(function fulfill(file) {
    console.log("we have downloaded and written the file,now will upload");
    return upload("www.upload.com", file);
  })
  .then(function fulfill(response) {
    console.log("uploaded complete", response);
  });
//.then call back hell
// download("www.xyz.com").then(function fulfill(content) {
//   console.log("we are now going to process the download data");
//   writeFile(content).then(function fulfill(file) {
//     console.log("we have downloaded and written the file,now will upload");
//     upload("www.upload.com", file).then(function fulfill(response) {
//       console.log("uploaded complete", response);
//     });
//   });
// });
