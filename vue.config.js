module.exports={
    devServer: {
        // before: require('./mock/index.js')
        before(app) {
            require('./mock/index.js')(app);
            // require('./mock/page2.js')(app);
          }
    }
}