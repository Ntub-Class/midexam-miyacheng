// 請完成calc function裡面的內容
// 題目說明: 請完成簡易的加減乘除運算，輸入一串數學式子，請輸出運算後的答案
// 輸入說明: 輸入一串數學式子的字串
// 輸出說明: 請直接console.log出答案
// 提示: String.includes, String.split


let calc = function (calcString: string) {
    let n1;
    let n2;
    let n3;
    let ans;
    for (let i = 0; i <= 2; i++) {
        //console.log(calcString.charAt(i))
        if (i = 0) {
            let n1 = calcString.charAt(i)
        } else {
            if (i = 1) {
                let n2 = calcString.charAt(i)
            } else {
                let n3 = calcString.charAt(i)
            }
        }
    }
    if (n2 = '+') {
        let ans = `${n1}+${n3}`
    } else {
        if (n2 = '-') {
            let ans = `${n1}-${n3}`
        } else {
            if (n2 = '*') {
                let ans = `${n1}*${n3}`
            } else {
                let ans = `${n1}/${n3}`
            }
        }
    }
    return ans
}

calc('8*2')
//calc('1+1')
//calc('5/5')
//calc('9-1')
