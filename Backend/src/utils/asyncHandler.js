/**
 * @arguments (async function)
 * @description To error handle in any async function
 */
const asyncHandler = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch((err)=>next(err));
    }
}

export {
    asyncHandler
};