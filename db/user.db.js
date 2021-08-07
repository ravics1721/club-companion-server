const prisma = require("../prisma");

const userDB = {
  isUserExists: async (email) => {
    const result = await prisma.user.findUnique({
      select: {
        email: email,
      },
    });
    return result;
  },
};

module.exports = userDB;
