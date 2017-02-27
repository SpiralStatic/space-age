function showAppPage() {
    res.status(200).render("app/show");
}

module.exports = {
    show: showAppPage
};
