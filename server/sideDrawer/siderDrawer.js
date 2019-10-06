module.exports = (app,fs,path)=>{
    app.get('/menu', function (req, res) {
        let menuPath = path.join(__dirname, '/menu.json');
        let menuPathFile = fs.readFileSync(menuPath);
        res.json(JSON.parse(menuPathFile));
    })
}