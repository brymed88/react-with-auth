import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ status: "A token is required for authentication" });
  }

  try {

    //Decode token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    //Set req.user to the decoded jwt token
    req.user = decoded;

  }
  catch (err) {
    return res.status(401).json({ status: "Invalid Token" });
  }

  return next();

};


export default verifyToken;