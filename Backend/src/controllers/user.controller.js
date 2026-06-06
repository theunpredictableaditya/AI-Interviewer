import { userModel } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';

/**
 * @access Public
 * @description expects credentials from user in form of req.body for registration purpose
 * @field {username, fullName, email, profession, password}
 */
const registerUser = asyncHandler(async(req, res) => {
    const {username, fullName, email, profession, password} = req.body;

    if([username, fullName, email, profession, password].some( field => field?.trim() === "")){
        throw new apiError(400, "All fields are required !!");
    }
    
    const doesUserExists = await userModel.findOne({
        $or: [{
            username
        },{
            email
        }]
    })
    
    if(doesUserExists){
        throw new apiError(409, "User Already Exists With Your Credentials");
    }

    const user = await userModel.create({
        username,
        fullName,
        email,
        profession,
        password
    })

    const createdUser = await userModel.findById(user._id).select("-password");

    if(!createdUser){
        throw new apiError(404, "Error Occured While Registering User");
    }

    res.status(201)
    .json(new apiResponse(201, createdUser, "User registered successfully"));
})

/**
 * @access Public
 * @description expects credentials from user in form of req.body for login purpose
 * @field {email, password}
 */
const loginUser = asyncHandler(async(req, res) => {

    console.log("controller  hitt");

    const {email, password} = req.body;

    console.log(email, password);

    if([email, password].some(field => field?.trim() === "")){
        throw new apiError(400, "Both Email And Passwords Are Required");
    }

    const doesUserExists = await userModel.findOne({email});

    if(!doesUserExists){
        throw new apiError(409, "User Doesnot Exist");
    }

    const isPasswordCorrect = await doesUserExists.isPasswordCorrect(password);

    if(!isPasswordCorrect){
        throw new apiError(400, "Invalid Credentials");
    }

    const token = await doesUserExists.generateAccessToken();

    const loggedInUser = await userModel
        .findById(doesUserExists._id)
        .select("-password")

    res.status(200)
    .cookie("accessToken", token, {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    .json(new apiResponse(200, loggedInUser, "User Logged In SuccessFully"))
})

/**
 * @access Private
 * @description Sends logged in user's data in response data
 */
const getMe = asyncHandler(async(req, res) => {
    const user = req.user;

    if(!user){
        throw new apiError(403, "Cannot Provide Access");
    }

    const userData = await userModel.findById(user._id).select("-password");

    if(!userData){
        throw new apiError(403, "Cannot Access User Data");
    }

    res.status(200)
    .json(new apiResponse(200, userData, "User Access Provided Successfully"));
})

/**
 * @access Private
 * @description LoggsOut User By Removing Its Access Token
 */
const logoutUser = asyncHandler(async(req, res) => {
    const options = {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: 'lax'
    }

    res.status(200)
    .clearCookie("accessToken", options)
    .json(new apiResponse(200, {}, "User Logout Successfully"));
})

export {
    registerUser,
    loginUser,
    getMe,
    logoutUser
} 