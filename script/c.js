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
    // var str = 'ca200b00000000010c760000000050c8b21e57ac6c';
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


function Axunge(userSex,userAge,userHeight,userWeight,resis){
  if(userSex==0){
    return 43.1912 + 0.0443 * userAge - 0.5008 * userHeight + 0.7042 * userWeight + 0.0449 * resis;
  }else {
    return 24.1911 + 0.0463 * userAge - 0.460888 * userHeight + 0.6341581 * userWeight + 0.0566524 * resis;
  }
}
