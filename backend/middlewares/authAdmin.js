import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again!",
      });
    }

    const atoken = authHeader.split(" ")[1];
    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);

    // This is now the correct and only check you need
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again!",
      });
    }

    req.adminEmail = decoded.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authAdmin;