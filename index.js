function saturdayFun(name = "roller-skate"){
    return `This Saturday, I want to ${name}!`;
}
saturdayFun();
saturdayFun(" bathe my dog");
function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
saturdayFun("work from home");
}
function wrapAdjective(flair = '*'){
    return function func1(param = "special"){
        return `You are ${flair}${param}${flair}!`;
    }
}
wrapAdjective()("a hard worker");
wrapAdjective("||")("a dedicated programmer");

