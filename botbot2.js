let lastID = '';
let text;
let id;
let botName = '새벽봇';
let like;
let owner;
let created;
alert('BOT - 실행됨');
const comment = (a) => {
$.ajax({
url: '/api/comment',
dataType: 'json',
type: 'POST',
data: {
content: a,
target: id,
targetSubject: 'discuss',
targetType: 'individual'
}
});
}
const write = (a, b, c) => {
$.ajax({
url: './api/discuss/',
type: 'POST',
data: {
content: a,
title: b,
groupNotice: false,
images: [],
category: c
}
});
}
setInterval(() => {
$.get('https://playentry.org/api/discuss/find?category=free', d => {
text = d.data[0].title;
id = d.data[0]._id;
like = d.data[0].likesLength;
owner = d.data[0].owner;
created = d.data[0].created;
})
if (id != lastID) {
lastID = id;
run();
}
}, 220);
const run = () => {
if (text == 'ㄷㅈㅅㄱ') {
(() => {
comment('ㅎㅇ');
})();
}
if (text == '안녕하세요.') {
(() => {
comment('ㅎㅇ');
})();
}
  if (text == 'ㅎㅇ') {
(() => {
comment('ㅎㅇ');
})();
}
  if (text == '안녕하세요') {
(() => {
comment('ㅎㅇ');
})();
}
  if (text == '^^') {
(() => {
comment('뭐래');
})();
}
}
