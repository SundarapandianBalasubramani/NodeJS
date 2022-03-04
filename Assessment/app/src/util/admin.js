const user = require("../util/user");

const getAdminDetails = async (connection, dbCollection, cred) => {
  const admin = await user.getUserDetail(connection, dbCollection, cred);
  if (admin) {
    const isValidLogIn = await user.validPwd(cred.pwd, admin.pwd);
    if (isValidLogIn) {
      return user.getToken({
        email: admin.email,
        id: admin._id,
        admin: true,
        role: {
          products: admin.role.readWriteProducts,
          offers: admin.role.readWriteOffers,
        },
        name: admin.prefferedName,
      });
    }
  }
  user.unAuthorized();
};

module.exports = getAdminDetails;
