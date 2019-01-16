require('dotenv').config()
const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')
const readdir = require('recursive-readdir');

const s3_config = {
  apiVersion: '2006-03-01',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
}

const s3 = new AWS.S3(s3_config);
const bucket = process.env.AWS_DEFAULT_BUCKET

readdir('dist').then(
  function(files) {
    files.forEach(file=> {
      const targetFilename = file.split('dist' + path.sep)[1]

      fs.readFile(file, (error, fileContent) => {
        // if unable to read file contents, throw exception
        if (error) {
          throw error;
        }
        console.log(`Bucket: ${bucket}, ${targetFilename}, ${fileContent.length} bytes`)
        // upload file to S3
        s3.putObject({
          Bucket: bucket,
          Key: targetFilename,
          Body: fileContent
        }, (error) => {
          if (error) {
            console.error(file, error, error.stack)
          }
        })
      })
    })
  },
  function(error) {
    console.error("something exploded", error);
  }
)

