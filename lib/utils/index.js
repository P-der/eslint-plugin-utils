function isExist() {
    let hasAllArguments  = true;
    let i = 0;
    let a = arguments[i]
    for(i; i <arguments.length;i++) {
        if(a) {
            a = a[arguments[i+1]]
        }else {
            hasAllArguments = false
        }
    }
    return hasAllArguments
}

module.exports = {
    isExist,
}