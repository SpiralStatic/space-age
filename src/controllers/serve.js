function showAppPage(req, res) {
    res.status(200).render('app/index');
}

module.exports = {
    index: showAppPage
};
