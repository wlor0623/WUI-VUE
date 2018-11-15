// 格式化时间戳
let formatTime = function (value) {
  if (!value || value == '') {
    return value;
  } else {
    let date = new Date(value); //如果date为13位不需要乘1000
    let Y = date.getFullYear() + '-';
    let M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h =
      (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m =
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
      ':';
    let s =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }
}

// 转为json格式

let toJson = function (str) {
  return JSON.stringify(str)
}

// 去中文
let noChinese = function (val) {
  return val.replace(/[\u4E00-\u9FA5]/g, '')
}

// 手机号码屏蔽
let formatTel = function (val) {
  val=val.toString()
  if (val) {
    return val.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2")
  }
  return val
}
// 只保留数字
let pureNumber=function(val){
  val=val.toString()
  return val.replace(/[a-zA-Z.]/g, '');
}
export { formatTime, toJson, noChinese, formatTel,pureNumber }

