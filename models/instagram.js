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

method.getFormatedMediaOfTag = function(tag,callback) {
  
  this.getMediaOfTag(tag,function(err,data){
      
      

      method.getInfoOfTag(tag, function(err1, data1) {
        
        var array = []
        for(var i = 0; i < Object.keys(data).length; i++) {
           var media = data[i]
            
            var url = "prueba123"; // Falta el método que obtiene el máximo
            var final = {tags: media["tags"], username: media["user"]["username"], likes: media["likes"]["count"], url: url , caption: media["caption"]["text"]};
            array.push(final);
        };  
          
        end = {metadata: {total: data1["media_count"]}, posts: array, version: "1.0.8" }
        callback(err,end);          
      });      
  });  
};

module.exports = Insta;