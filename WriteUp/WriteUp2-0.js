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
fetch('https://playentry.org/api/discuss',{
  method: 'POST',
  body: '{"images":[],"category":"free","title":titt,"content":contt,"group Notice":false}',
  headers:{
    'Content-Type':'application/json:charset=UTF-8',
    'crsf-token':(a+b+c+d+"abcdefgh"+e+f+"-"+g+h+i+j+k+l)
  }
})
