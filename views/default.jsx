const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css" />
                {/* Note: You don't need to put the word 'public' in your path even though the folder is called that. Since we told Express what our static folder is called, it already knows to look there! */}
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def