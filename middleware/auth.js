import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const verifyToken = (handler, allowedRoles = []) => {
  return async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
      return;
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      console.log(decoded);
      // Check if the user's role is allowed
      if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
        res.status(403).json({ message: "Access denied. Insufficient permissions." });
        return;
      }

      // Pass the request to the handler
      return handler(req, res);
    } catch (error) {
      res.status(401).json({ message: "Invalid token.", error: error.message });
    }
  };
};
