var titt = prompt( '글 제목은?', '여기다 글 제목 입력' );
var contt = prompt( '내용은?', '여기다 글 내용 입력' );
var a = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var b = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var c= prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var d= prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var e = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var f = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var g = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var h = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var i = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var j = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var k = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
var l = prompt( '1, 2, 3, 4, 5, 6, 7, 8, 9, 0, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m 중 하나만 입력하세요.', '하나만 골라 입력' );
fetch('https://www.google-analytics.com/j/collect?v=1&_v=j86&a=164819038&t=pageview&_s=1&dl=https%3A%2F%2Fplayentry.org%2Fds&ul=ko-kr&de=UTF-8&dt=%EC%97%94%ED%8A%B8%EB%A6%AC&sd=24-bit&sr=2560x1080&vp=2006x1007&je=0&_u=AACAAEABAAAAAC~&jid=1154999913&gjid=1297629696&cid=1214176618.1597729174&tid=UA-48464763-1&_gid=1926263828.1601550052&_r=1&_slc=1&z=128242103',{
  method: 'POST',
  body: '{"images":[],"category":"free","title":titt,"content":contt,"group Notice":false}',
  headers:{
    'Content-Type':'application/json:charset=UTF-8',
    'crsf-token':(a+b+c+d+"abcdefgh"+e+f+"-"+g+h+i+j+k+l)
  }
})
