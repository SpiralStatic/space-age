function showAppPage(req, res) {
    res.status(200).render('index',{
        title: "Space Age"
    });
}

module.exports = {
    index: showAppPage
};
