const express = require("express");
const axios = require("axios"); // For HTTP requests
const cheerio = require("cheerio");
const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
const url =
  "https://www.flipkart.com/search?q=mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";
async function scrapeProductDetails(url) {
  try {
    console.log(
      "url========================================================================================================================================"
    );
    console.log(url);
    console.log(
      "url========================================================================================================================================"
    );
    const response = await nightmare.goto(url);
    console.log(response);
    console.log(
      "responce========================================================================================================================================"
    );
    const html = response.ls;
    console.log(html);
    console.log(
      "html========================================================================================================================================="
    );
    const $ = cheerio.load(html);
    console.log($);
    console.log(
      "$========================================================================================================================================="
    );

    // Example: Extract title and price from specific selectors (modify as needed)
    const title = $(".product-title").text().trim();
    const price = $(".product-price").text().trim();
    console.log(title);
    console.log(
      "title========================================================================================================================================="
    );
    console.log(price);
    console.log(
      "price========================================================================================================================================="
    );
    return { title, price };
  } catch (error) {
    throw error;
  }
}

scrapeProductDetails(url);
