console.log('hello world conttent');
// content.js 注入 inject.js文件到document中
function addJs() {
    var file = chrome.extension.getURL('js/inject.js')
    console.log(file);
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = file
    document.documentElement.appendChild(s)
  }
addJs();