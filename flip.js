const express = require("express");
const axios = require("axios");
const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare({ show: true });
const url = "https://www.flipkart.com/";
//"https://www.flipkart.com/search?q=mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";

const flipkart_mobile = async (req, res) => {
  nightmare
    .goto(url)
    .wait("body")
    // .type("input.LM6RPg", "nodejs books")
    // .click("button.vh79eN")
    // .wait("div.bhgxx2")
    .evaluate(() => document.querySelector("body").innerHTML)
    .end()
    .then((response) => {
      console.log(
        " ===============================================================================================================             ========================================="
      );
      console.log(response);
      console.log(
        " ===============================================================================================================             ========================================="
      );

      console.log(getData(response));
      console.log(
        " 8888888888888888888888888888888888888888888888888888888888888888888888888888888===============================================================================================================             ========================================="
      );
    })

    .catch((err) => {
      console.log(err);
    });

  let getData = (html) => {
    let data = [];
    const $ = cheerio.load(html);
    console.log(
      "================================================================                         jnmm m              ==========================================================================="
    );
    console.log($.html());
    $("div.DOjaWF gdgoEp div.cPHDOP col-12-12").each((row, raw_element) => {
      $(raw_element)
        .focus()
        .find("div div div")
        .focus()
        .each((i, elem) => {
          let title = $(elem).find("div div a:nth-child(2)").text().focus();
          let link = $(elem)
            .find("div div a:nth-child(2)")
            .attr("href")
            .focus();
          if (title) {
            // data.push({
            //   title: title,
            //   link: link,
            // });
            console.log(title);
            data.push(title);
          }
        });
    });
    console.log(
      "kllkmflkdmlfkmalkfdmv oeldkmfklm000000000000000000000000000000000000000000000000000000000000000000000      "
    );
    console.log(data);
    return data;
  };
  // } catch (error) {
  //   console.error(error);
  //   console.log(error, error.message);
  //   return res.status(400).send("err 2");
  // }
};

flipkart_mobile();
module.exports = flipkart_mobile;
