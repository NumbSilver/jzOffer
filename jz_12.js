//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
//
// 保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数
function Power(base, exponent)
{
    // write code here
    if(base == 0) return base;
    if(exponent==0) return 1;
    let flag = true;
    if(exponent<0){
        exponent = -exponent;
        flag = false;
    }
    var res = 1;
    for(let i =0;i<exponent;i++){
        res = res*base;
    }
    if(!flag){
        res= 1/res;
    }
    return res;
}