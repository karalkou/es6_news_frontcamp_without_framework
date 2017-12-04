module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: [
        require(
            'autoprefixer',
            {
                browsers: ['last 2 versions', '> 5%', 'ie 10-11']
            }
        )
    ]
});