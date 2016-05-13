var method = Insta.prototype;

function Insta() {
}
method.test = function() {
    return 4;  
};
method.getInfoOfTag = function(tag, callback) {
    var ig = require('instagram-node').instagram();

    ig.use({ access_token: '3231014232.1677ed0.7c68b172e604438cb5e385d8fad65b5d' });
    
    ig.tag(tag.toString(), function(err, result, remaining, limit) {    
        callback(err,result);    
    });
    
};
method.getMediaOfTag = function(tag, callback) {
    var ig = require('instagram-node').instagram();

    ig.use({ access_token: '3231014232.1677ed0.7c68b172e604438cb5e385d8fad65b5d' });
    
    ig.tag_media_recent(tag.toString(), function(err, result, remaining, limit) {    
        callback(err,result);    
    });
    
};


method.getBigestResolution = function(data) {
      var url = "";
      var width = 0;
      for(var i = 0; i < Object.keys(data).length; i++) {
          var media = data[Object.keys(data)[i]];
          if(media["width"] >= width) {
              url = media["url"];
              width = media["width"];
          }
      }
    return url;
    
}

method.getFormatedMediaOfTag = function(tag,callback) {
  
  this.getMediaOfTag(tag,function(err,data){
      method.getInfoOfTag(tag, function(err1, data1) {
        
        var array = []
        for(var i = 0; i < Object.keys(data).length; i++) {
           var media = data[i]
            
            var url = ""; 
            if(media["type"] == "image") {
                url = method.getBigestResolution(media["images"]);
            }
            else { 
                url = method.getBigestResolution(media["videos"]);
            }
            var final = {tags: media["tags"], username: media["user"]["username"], likes: media["likes"]["count"], url: url , caption: media["caption"]["text"]};
            array.push(final);
        };  
          
        end = {metadata: {total: data1["media_count"]}, posts: array, version: "1.0.9" }
        callback(err,end);        
      });      
  });  
};

module.exports = Insta;