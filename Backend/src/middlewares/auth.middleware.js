import { userModel } from "../models/user.model";
import { apiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from 'jsonwebtoken';

/**
 * @access Public
 * @description Middleware to verify access token and add user data in request
 */
const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const cookie = req.cookies?.accessToken;
    
        if(!cookie){
            throw new apiError(400, "Cannot Access Your Token");
        }
    
        const decodedToken = jwt.verify(cookie, process.env.TOKEN_SECRET);
    
        const user = await userModel.findById(decodedToken?._id).select("-passowrd");
    
        if(!user){
            throw new apiError(400, "Error Occured While Verifying Access Token");
        }
    
        req.user = user;
    
        next();
    } catch (error) {
        throw new apiError(400, "Unexpected Error Occured");
    }
})

export {
    verifyJWT
}