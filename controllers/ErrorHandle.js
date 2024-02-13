exports.notFoundProduct = (req, res, next) => {
  // res.sendFile(path.join(__dirname, './', 'view', '404.html'));
  res
    .status(404)
    .render('404', { PageTitle: '404 Page Not Found', path: '/404' });
};
