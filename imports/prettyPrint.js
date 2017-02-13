import SimpleSchema from 'simpl-schema';

export default function prettyPrint(obj) {
    var toString = Object.prototype.toString,
        newLine = '\n', space = ' ', tab = 3,
        buffer = '',
        //Second argument is indent
        indent = arguments[1] || tab,
        //For better performance, Cache indentStr for a given indent.
        indentStr = (function(n){
            var str = '';
            while(n--){
                str += space;
            }
            return str;
        })(indent),

        lastindentStr = (function(n){
            var str = '';
            while(n--){
                str += space;
            }
            return str;
        })(indent ? indent - tab : 0);

    if (typeof obj === 'string') {
      if (obj === 'SimpleSchema.Integer') {
        buffer += obj;
      } else {
        buffer += "'" + obj + "'";
      }
    } else if(obj === Date){
        buffer += 'Date';
    } else if(obj === String){
        buffer += 'String';
    } else if(obj === Number){
        buffer += 'Number';
    } else if(obj === Boolean){
        buffer += 'Boolean';
    } else if(obj === Array){
        buffer += 'Array';
    } else if(obj === Object){
        buffer += 'Object';
    } else if(obj instanceof Date){
        buffer += "new Date('" + obj.toISOString() + "')";
    } else if(obj instanceof RegExp){
      var prop, strRep;
      for (prop in SimpleSchema.RegEx) {
        if (obj === SimpleSchema.RegEx[prop]) {
          strRep = 'SimpleSchema.RegEx.' + prop;
        }
      }
      buffer += strRep || obj.toString();
    } else if(toString.call(obj) == '[object Function]'){
        buffer += obj;
    } else if(toString.call(obj) == '[object Array]'){
        var idx = 0, len = obj.length;
        buffer += '[';
        var lines = [];
        if (len > 0) {
          while(idx < len){
            lines.push([
                indentStr, prettyPrint(obj[idx], indent + tab)
            ].join(''));
            idx++;
          }
          buffer += newLine + lines.join(',' + newLine) + newLine + lastindentStr;
        }
        buffer += ']';
    } else if (typeof obj === 'object' && obj !== null) { //Handle Object
        var prop, displayProp;
        buffer += '{';
        var lines = [];
        for(prop in obj){
            if (prop.indexOf('.') !== -1) {
              displayProp = "'" + prop + "'";
            } else {
              displayProp = prop;
            }
            lines.push([
                indentStr, displayProp, ': ',
                prettyPrint(obj[prop], indent + tab)
            ].join(''));
        }
        if (lines.length > 0) {
          buffer += newLine + lines.join(',' + newLine) + newLine + lastindentStr;
        }
        buffer += '}';
    } else {
      //null, undefined, NaN
      buffer += obj;
    }

    return buffer;
}
