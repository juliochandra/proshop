import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import Users from "../models/userModel.js";

// Protect route
const protect = asyncHandler(async (req, res, next) => {
  let token;

  //   read jwt from cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Users.findById(decoded.userId).select("-password");

      if (req.user) {
        // console.log(req.user);
        next();
      } else {
        res.status(401);
        throw new Error("Not authorized, invalid user");
      }
    } catch (error) {
      //   console.log(error);
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Admin middleware
const admin = asyncHandler(async (req, res, next) => {
  //   console.log(req.user);
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
});

export { protect, admin };
