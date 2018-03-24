function ccc(ele){
  return document.querySelector(ele);
}
// json转str
function Json2Str(o) {
	var arr = [];
	var fmt = function(s) {
	if (typeof s == 'object' && s != null) return Json2Str(s);
		return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
	}
	for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
	return '{' + arr.join(',') + '}';
}
// str转json
function str2Json(str){
	var json = (new Function("return " + str))();
	return json;

}
function f16to2(num){
    var a = parseInt(num,16).toString(2);
    var b = '00000000';
    return b.slice(0,(8-a.length))+a
}
  function f2to10(num1,num2,jinkg){
    var a = num1+num2;
    var b = parseInt(a,2).toString(10);
    if(!jinkg){
      return b;
    }
    var next = b[b.length-2]+b[b.length-1];
    var first = b.slice(0,length-2);
    if(jinkg<1000){
      var ss=+(first*1000+next*10)/1000;
    }else{
      var ss=+(first*500+next[0]*50)/1000;
    }
    return ss;
  }


  // 处理ios的uuid
  function iosuuid(str){
    var newstr = str.slice(-12).toUpperCase().split('');
    var newarr = [];
    for(var i=0;i<newstr.length;i++){
    newarr.push(newstr[i]);
    if(i%2==1){
      newarr.push(':')
    }
    }
    console.log(newarr.slice(0,-1).join(''))
    return newarr.slice(0,-1).join('');
  }

// crc计算返回
function crcSet(str) {
  var newar = str.split(' ');
  var a=0;
  newar.forEach(function(item,index) {
      a+=parseInt(item,16);
  })
  return completionZero(parseInt(+a.toString(2),2).toString(16));
}
// 0补充
function completionZero(num) {
  return num.length==1?'0'+num:num;
}

function Data07analyse(arr){
  var str1,str2;
  for(var i in arr){
    if(arr[i][arr[i].length-3]=='0'){
      str2 = arr[i];
    }else{
      str1 = arr[i];
    }
  }
  var ret = {};
  var stepNum,kal,km;
  ret.stepNum = f2to102(f16to2(str1.slice(12,18)));
  ret.kal = f2to102(f16to2(str1.slice(-8,-2)))/100
  ret.km = f2to102(f16to2(str2.slice(12,18)))
  return ret;
}
function f2to102(a,jinkg){
  var a = a;
  var b = parseInt(a,2).toString(10);
  return b
}
