export function isValidString(val){
    let reg = /^[a-zA-Z]+$/;
    return reg.test(val);
}

export function isValidNumber(val){
    if (!val) return false;
    let reg = /^[0-9]+$/;
    return reg.test(val);
}

export function isValidChar(val){
    if (!val) return false;
    let reg = /^[a-zA-Z0-9]+$/;
    return reg.test(val);
}