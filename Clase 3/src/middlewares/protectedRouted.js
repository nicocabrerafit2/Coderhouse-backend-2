function isAuth(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    return res.send("Debe loguearse para ver su perfil").redirect("/login");
  }
}

function isLog(req, res, next) {
  if (!req.session.user) {
    return next();
  } else {
    return res.redirect("/perfil");
  }
}

export { isLog, isAuth };
