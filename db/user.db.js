const prisma = require("../prisma");

const userDB = {
  findUserByEmail: async (email) => {
    const result = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return result;
  },
  addNewUser: async (user) => {
    return await prisma.user.create({
      data: user,
    });
  },
};

module.exports = userDB;
