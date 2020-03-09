import S3 from './aws-s3';
import awsKey from './config.js';

const config = {
  bucketName: 'quiksaver',
  region: 'us-east-1',
  accessKeyId: awsKey.access,
  secretAccessKey: awsKey.secret,
  s3Url: 'https://quiksaver.s3.amazonaws.com',
};

export const uploadFile = file => {
  const S3Client = new S3(config);
  /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
  return S3Client.uploadFile(file)
    .then(data => data.location)
    .catch(err => console.error('image upload err', err));
};

export const deleteFile = url => {
  /*BROKEN*/
  // const fileName = url.split('/')[3].split('.')[0];
  // const S3Client = new S3(config);
  // S3Client.deleteFile(fileName)
  //   .then(response => console.log('delete image response', response))
  //   .catch(err => console.error('delete image err', err));
};
