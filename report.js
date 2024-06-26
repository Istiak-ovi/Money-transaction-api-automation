const newman = require('newman');
newman.run({
    collection : require('./collection/collection.json'),
    
    reporters: 'htmlextra',
    interactionCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }, function (err) {
        if(err){ throw err; }
        console.log('collection run complete!');
    }

})