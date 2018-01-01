export default (...funcs) => {
    return funcs.reduceRight((composed, f) => {
        return f(composed)
    });
}