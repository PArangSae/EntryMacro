var logo = `
    *******                 ****
   *       *               *   *
   *       *                   *
   *       *                   *
    *******        *      ***********`

var PM = {
temp : null,
time : 10000,

upload() {try{$(".btn_workspace_save").get(0).click();
$(".item__a65d5").get(0).click();} catch (e) {} console.log("ProMac 동작")},

run() {this.temp = setInterval(() => {this.upload()}, this.time)},
stop() {{if(this.temp != null) {clearInterval(this.temp);}}},

init() {
console.log(`%c ${logo} `, `color: cyan`)
alert("0.1초 매크로 가동.");
this.time = 100
alert("새로고침 시 종료됩니다.");
this.upload();
this.upload();
this.upload();
this.upload();
this.run()
}
}
PM.init()
