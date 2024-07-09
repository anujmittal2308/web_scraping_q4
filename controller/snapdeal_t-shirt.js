const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.snapdeal.com/search?keyword=tshirt&santizedKeyword=&catId=&categoryId=0&suggested=true&vertical=p&noOfResults=20&searchState=&clickSrc=suggested&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=ALL&url=&utmContent=&dealDetail=&sort=rlvncy";

let linkList = [];
const snapdeal_t_shirt = async (req, res) => {
  try {
    const response = await fetch(url);
    console.log(
      "$---------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log(response);
    console.log(
      "$---------------------------------------------------------------------------------------------------------------------------------------"
    );
    const $ = cheerio.load(response);
    console.log(
      "$---------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log($);
    const sithed = $("div.col-xs-19 reset-padding");
    console.log(
      "DOjaWF gdgoEp---------cPHDOP col-12-12-----------------------------------------------------------------------------------------------------------------------------"
    );
    console.log(sithed);
    $("div.col-xs-19 reset-padding").each(function (i, elem) {
      let link = $(elem).find("a").attr("href");
      linkList.push(url + link);
    });
    return res.status(200).send(linkList);
  } catch (error) {
    console.error(error);
    console.log(error, error.message);
    return res.status(400).send("err 2");
  }
};

module.exports = snapdeal_t_shirt;
