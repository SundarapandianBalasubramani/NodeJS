module.exports = (req) => {
  const data = req.body;
  data.updatedOn = new Date().toISOString();
  data.updatedBy = req.user.id;
  if (req.method === "POST") {
    data.createdOn = new Date().toISOString();
    data.createdBy = req.user.id;
  }
  return data;
};
