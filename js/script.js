function bmi(hei, wei) {
    return wei / (hei * hei);
}

var mark = {
    height: 1.7,
    weight: 55,
}

var john = {
    height: 1.6,
    weight: 60,
}

var bmiMark = bmi(mark.height, mark.weight)
var bmiJohn = bmi(john.height, john.weight)

var markHigherBMI = bmiMark >= bmiJohn


if (markHigherBMI)
    console.log(`BMI cua Mark la ${bmiMark} cao hon BMI cua John la ${bmiJohn}`)
else
    console.log(`BMI cua John la ${bmiJohn} cao hon BMI cua Mark la ${bmiMark}`)


//Cau3
var diemTb = (arr) => {
    var tong = 0
    var cnt = 0
    arr.forEach(element => {
        tong += element
        cnt++
    });
    return tong / cnt;
}

var data = {
    doi1: [96, 108, 89],
    doi2: [88, 91, 110]
}

var data1 = {
    doi1: [97, 112, 101],
    doi2: [109, 95, 123]
}

var data2 = {
    doi1: [97, 112, 101],
    doi2: [109, 95, 106]
}

var avgDolphins = diemTb(data.doi1)
var avgKoalas = diemTb(data.doi2)

if (avgDolphins > avgKoalas)
    console.log("Doi Dolphin thang!")
else if (avgDolphins < avgKoalas)
    console.log("Doi Koalas thang!")
else
    console.log("Hai doi hoa nhau !")

//Cau4

var tienHoaDon = 275

var tienBoa = tienHoaDon > 50 && tienHoaDon < 300 ? tienHoaDon*0.15 : tienHoaDon*0.2

console.log(`Hóa đơn là ${tienHoaDon}, tiền boa là ${tienBoa} và tổng giá trị
${tienHoaDon+tienBoa}`)


//Part2 Cau1

var diemDol = diemTb([44,23,71])
var diemKol= diemTb([65,54,49])

var checkWinner = (diemDol,diemKol) => {
    return diemDol > diemKol * 2 ? "Doi Dolphins thang" :
     (diemKol > diemDol * 2 ?"Doi Koalas thang":"Khong doi nao thang!")
}

console.log(checkWinner())

//Part 2 cau2

var calcTip = (x) => {
    return x > 50 && x < 300 ? x*0.15 : x*0.2
}

var tips = []
var totals=[]
var points = [125,555,44]
.forEach(e => {
    tips.push(calcTip(e))
    totals.push(e+calcTip(e))
})

console.log(tips)
console.log(totals)
