const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

async function cryptopriceScraper(req, res) {
  const url =
    "https://www.snapdeal.com/search?clickSrc=top_searches&keyword=tshirt&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy";
  const result = [];
  await axios(url).then((response) => {
    const html_data = response.data;
    const $ = cheerio.load(html_data);

    const keys = ["Title", "Description", "Price"];
    const selectedElem =
      "div.product-tuple-description > div.product-desc-rating > a";

    $(selectedElem).each((parentIndex, parentElem) => {
      let keyIndex = 0;
      const data = [];
      if (parentIndex) {
        $(parentElem)
          .children()
          .each((childId, childElem) => {
            const value = $(childElem).text();
            if (value) {
              data[keys[keyIndex]] = value;
              keyIndex++;
            }
          });
        result.push(data);
      }
    });
  });
  console.log(result);
  return res.status(200).send(result);
}

module.exports = cryptopriceScraper;
