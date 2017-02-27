function showAppPage(req, res) {
    res.status(200).render('app/index',{
        title: "Space Age"
    });
}

module.exports = {
    index: showAppPage
};
