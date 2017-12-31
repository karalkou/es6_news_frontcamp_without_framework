export default (...funcs) => {
    return funcs.reduceRight((composed, f) => f(composed));
}