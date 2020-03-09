import { Buffer } from 'buffer';
function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("short-uuid")),r=e(require("crypto-js")),i=new Date(+new Date+864e5).toISOString(),n=i.split("-").join("").split(":").join("").split(".").join(""),o=i.split("T")[0].split("-").join(""),a=function(){};a.getPolicy=function(e){return new Buffer(JSON.stringify({expiration:i,conditions:[{acl:"public-read"},{bucket:e.bucketName},["starts-with","$key",e.dirName?e.dirName+"/":""],["starts-with","$Content-Type",""],["starts-with","$x-amz-meta-tag",""],{"x-amz-algorithm":"AWS4-HMAC-SHA256"},{"x-amz-credential":e.accessKeyId+"/"+o+"/"+e.region+"/s3/aws4_request"},{"x-amz-date":n},{"x-amz-meta-uuid":"14365123651274"},{"x-amz-server-side-encryption":"AES256"}]})).toString("base64").replace(/\n|\r/,"")};var c=function(){};c.getSignature=function(e,t,i){var n,o,a,c,s,u;return r.HmacSHA256(i,(n=e.secretAccessKey,o=t,a=e.region,c=r.HmacSHA256(o,"AWS4"+n),s=r.HmacSHA256(a,c),u=r.HmacSHA256("s3",s),r.HmacSHA256("aws4_request",u))).toString(r.enc.Hex)};var s=function(e){this.config=e};s.prototype.uploadFile=function(e,r){try{var i=this;!function(e,t){if(null===e.bucketName||""===e.bucketName)throw new Error("Your bucketName cannot be empty ");if(null===e.region||""===e.region)throw new Error("Must provide a valide region in order to use your bucket");if(null===e.accessKeyId||""===e.accessKeyId)throw new Error("Must provide accessKeyId");if(null===e.secretAccessKey||""===e.secretAccessKey)throw new Error("Must provide secretAccessKey");if(!t)throw new Error("File cannot be empty")}(i.config,e);var s=new FormData,u=e.type.split("/")[1],m=(r||t.generate())+"."+u,p=(i.config.dirName?i.config.dirName+"/":"")+m,d=(l=i.config).s3Url&&""!==l.s3Url?l.s3Url:function(e){var t=e.bucketName,r=e.region,i=r.split("-")[0];switch(i){case"cn":return"https://"+t+".s3."+r+".amazonaws.com."+i;default:return"https://"+t+".s3-"+r+".amazonaws.com"}}(l);return s.append("key",p),s.append("acl","public-read"),s.append("Content-Type",e.type),s.append("x-amz-meta-uuid","14365123651274"),s.append("x-amz-server-side-encryption","AES256"),s.append("X-Amz-Credential",i.config.accessKeyId+"/"+o+"/"+i.config.region+"/s3/aws4_request"),s.append("X-Amz-Algorithm","AWS4-HMAC-SHA256"),s.append("X-Amz-Date",n),s.append("x-amz-meta-tag",""),s.append("Policy",a.getPolicy(i.config)),s.append("X-Amz-Signature",c.getSignature(i.config,o,a.getPolicy(i.config))),s.append("file",e),Promise.resolve(fetch(d,{method:"post",body:s})).then(function(e){return e.ok?Promise.resolve({bucket:i.config.bucketName,key:(i.config.dirName?i.config.dirName+"/":"")+m,location:d+"/"+(i.config.dirName?i.config.dirName+"/":"")+m,status:e.status}):Promise.reject(e)})}catch(e){return Promise.reject(e)}var l},s.prototype.deleteFile=function(e){try{return Promise.resolve(fetch("https://"+this.config.bucketName+".s3"+(this.config.region?"-"+this.config.region:"")+".amazonaws.com/"+(this.config.dirName?this.config.dirName+"/":"")+e,{method:"delete"})).then(function(t){return t.ok?Promise.resolve({ok:t.ok,status:t.status,message:"File Deleted",fileName:e}):Promise.reject(t)})}catch(e){return Promise.reject(e)}},module.exports=s;
//# sourceMappingURL=aws-s3.js.map
