var st = prompt("무엇을 검색하시겠습니까?")
var pagenum = prompt("검색결과의 몇번째 판을 보시겠습니까?")
var link = "https://playentry.org/ds#!/free?title=&sort=created&rows=20&search_title=" + st + "&page=" + pagenum
window.location.href = link;
window.location.replace(link);
window.open(link);



