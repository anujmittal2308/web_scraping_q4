const express = require("express");
const axios = require("axios");
const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare({ show: true });
const url = "https:/www.flipkart.com/";
//"https://www.flipkart.com/search?q=mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";

// async function flipkart_mobile(req, res) {
//   try {
//     console.log(
//       "q---------------------------------------------------------------------------------------------------------------------------------------"
//     );
//      await fetch(
//       "https://www.flipkart.com/search?q=mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
//     )
//       .then((result) => {
//         console.log(result);
//         console.log(
//           "k---------------------------------------------------------------------------------------------------------------------------------------"
//         );
//         console.log(result.data);
//         console.log(
//           "a================---------------------------------------------------------------------------------------------------------------------------------------"
//         );
//         const data = result.data;
//         console.log(
//           "m---------------------------------------------------------------------------------------------------------------------------------------"
//         );
//         console.log(data);
//         console.log(
//           "o---------------------------------------------------------------------------------------------------------------------------------------"
//         );
//         const $ = cheerio.load(data);
//         console.log(
//           "j---------------------------------------------------------------------------------------------------------------------------------------"
//         );
//         let list_of_product = [];
//         console.log($);
//         console.log(
//           "$---------------------------------------------------------------------------------------------------------------------------------------"
//         );
//         $(".DOjaWF gdgoEp div", data).each(function (el, index) {
//           // const title = $(this).text();
//           // const url = $(this).find("a").attr("href");
//           console.log($(this).text());
//           // content.push({
//           //   title,
//           //   url,
//           // });
//           return res.status(200).send("ok");
//         });
//       })
//       .catch((error) => {
//         console.log(error, error.message);
//         return res.status(400).send(error.message);
//       });
//   } catch (error) {
//     console.log(error, error.message);
//     return res.status(400).send("err 2");
//   }
// }
let linkList = [];
const flipkart_mobile = async (req, res) => {
  // try {
  //   const response = await axios.get(url);
  //   console.log(
  //     "$---------------------------------------------------------------------------------------------------------------------------------------"
  //   );
  //   console.log(response);
  //   // const result = JSON.stringify({ response });
  //   // console.log(result);
  //   console.log(JSON.stringify(response));
  //   // console.log(response);

  //   // console.log(
  //   //   "$---------------------------------------------------------------------------------------------------------------------------------------"
  //   // );

  //   // const $ = cheerio.load(response);
  //   // console.log(
  //   //   "$---------------------------------------------------------------------------------------------------------------------------------------"
  //   // );
  //   // console.log($);
  //   // const sithed = $("a.CGtC98");
  //   console.log(
  //     "DOjaWF gdgoEp---------cPHDOP col-12-12-----------------------------------------------------------------------------------------------------------------------------"
  //   );
  //   // console.log(sithed);
  //   $("div.cPHDOP col-12-12").each(function (i, elem) {
  //     let link = $(elem).find("a").attr("href");
  //     linkList.push_back(url + link);
  //   });
  //   return res.status(200).send(linkList);
  // }

  nightmare
    .goto(url)
    .wait("body")
    .click("button._2AkmmA._29YdH8")
    .type("input.LM6RPg", "nodejs books")
    .click("button.vh79eN")
    .wait("div.bhgxx2")
    .evaluate(() => document.querySelector("body").innerHTML)
    .end()
    .then((response) => {
      console.log(
        " ===============================================================================================================             ========================================="
      );
      console.log(getData(response));
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send(err);
    });

  let getData = (html) => {
    data = [];
    const $ = cheerio.load(html);
    console.log(
      "================================================================                         jnmm m              ==========================================================================="
    );
    console.log($);
    console.log(
      "kllkmflkdmlfkmalkfdmv oeldkmfklm000000000000000000000000000000000000000000000000000000000000000000000      "
    );
    return res.status(200).send(data);
  };
  // } catch (error) {
  //   console.error(error);
  //   console.log(error, error.message);
  //   return res.status(400).send("err 2");
  // }
};

module.exports = flipkart_mobile;
