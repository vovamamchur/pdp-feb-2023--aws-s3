import AWS from 'aws-sdk';
import fs from 'fs';

const BUCKET_NAME = 'pdp-bucket';
const FILE_NAME = 'example.txt';

const s3 = new AWS.S3({
  accessKeyId: 'ACCESS_KEY',
  secretAccessKey: 'SECRET_KEY',
  region: 'us-east-1',
});

// create bucket
// (() => {
//   s3.createBucket({ Bucket: BUCKET_NAME }, (error, data) => {
//     if (error) {
//       console.error('Error creating bucket:', error)
//     } else {
//       console.info('Bucket created successfully:', data);
//     }
//   });
// })();

// upload file
// (() => {
//   const fileContent = fs.readFileSync('./example.txt');
//
//   s3.upload({
//     Bucket: BUCKET_NAME,
//     Key: FILE_NAME,
//     Body: fileContent,
//     ContentType: 'text/plain'
//   }, (error, data) => {
//     if (error) {
//       console.error('Error uploading file:', error)
//     } else {
//       console.info('File uploaded successfully:', data);
//     }
//   });
// })();

// modify file
// (() => {
//   s3.upload(
//     {
//       Bucket: BUCKET_NAME,
//       Key: FILE_NAME,
//       Body: 'updated content',
//     },
//     (error, data) => {
//       if (error) {
//         console.log('Error updating file:', error);
//       } else {
//         console.log('File updated successfully:', data);
//       }
//     })
// })();

// make file public
// (() => {
//   s3.putObjectAcl(
//     {
//       Bucket: BUCKET_NAME,
//       Key: FILE_NAME,
//       ACL: 'public-read',
//     },
//     (error, data) => {
//       if (error) {
//         console.log('Error making file public:', error);
//       } else {
//         console.log('File made public successfully:', data);
//       }
//     });
// })();

// retrieve file
// (() => {
//   s3.getObject(
//     {
//       Bucket: BUCKET_NAME,
//       Key: FILE_NAME,
//     },
//     (error, data) => {
//       if (error) {
//         console.log('Error retrieving file:', error);
//       } else {
//         console.log('File retrieved successfully:', data.Body.toString());
//       }
//     });
// })();

// list files
// (() => {
//   s3.listObjects(
//     {
//       Bucket: BUCKET_NAME,
//     },
//     (error, data) => {
//       if (error) {
//         console.log('List bucket objects failed:', error);
//       } else {
//         console.log('List bucket objects success:', data);
//       }
//     });
// })();

// change file type
// (() => {
//   s3.copyObject(
//     {
//       Bucket: BUCKET_NAME,
//       Key: 'example.html',
//       CopySource: `/${BUCKET_NAME}/${FILE_NAME}`,
//       ContentType: 'text/html',
//     },
//     (error, data) => {
//       if (error) {
//         console.log('Error changing file type:', error);
//       } else {
//         console.log('File type changed successfully:', data);
//       }
//     });
// })();

// delete file
// (() => {
//   s3.deleteObject(
//     {
//       Bucket: BUCKET_NAME,
//       Key: FILE_NAME,
//     },
//     (error, data) => {
//       if (error) {
//         console.log('Error deleting file:', error);
//       } else {
//         console.log('File deleted successfully:', data);
//       }
//     });
// })();
