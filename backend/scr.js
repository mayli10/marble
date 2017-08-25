// ​'use strict'
//
// const cheerio = require('cheerio');
// const axios = require('axios');
//
// const url = process.argv[2];
// const selector = process.argv[3];
//
// axios.get('https://www.nytimes.com/section/world?WT.nav=page&action=click&contentCollection=World&module=HPMiniNav&pgtype=Homepage&region=TopBar')
//   .then(({data}) => {
//   var $ = cheerio.load(data);
// $('.headline a').toArray().map(e => {
//     console.log($(e).text().trim());
//   })
// })
