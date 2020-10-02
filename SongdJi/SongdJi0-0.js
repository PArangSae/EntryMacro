var conlogo = '엔트리 이야기에서 성지만들기'
console.log(conlogo)
var comm = prompt("달 댓글","")
alert("확인을 누르기 전, URL에서 free 뒤의 24자리 정도인 글자들을 봐주세요.")
var id = prompt("24자리 글자를 입력해주세요.","예시: 5f779e00d2aa1602355bcf36")
alert("5번 반복 후 자동 종료됩니다.")
function makement() {
  fetch('https://playentry.org/api/comment', {
    method: 'POST',
    body: '{"content":comm,"target":id,"targetType":"individual","targetSubject":"discuss"}'
  })
  console.log("작동");
setInterval(makement(), 100)
