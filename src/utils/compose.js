export default (...funcs) => {
    console.log('funcs: ', funcs);

    return funcs.reduceRight((composed, f) => {
        console.log('f: ', f);
        console.log('composed: ', composed);

        return f(composed)
    });
}