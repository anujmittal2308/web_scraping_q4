const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.snapdeal.com/search?clickSrc=top_searches&keyword=tshirt&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy";
//"https://www.snapdeal.com/product/adorate-coral-cotton-regular-fit/5764608189802944590#bcrumbSearch:tshirt";
async function scrapeProductDetails(url) {
  try {
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
    console.log("okok");
  } catch (error) {
    console.log(error);
  }
}

let getData = async () => {
  data = [];
  //console.log(rawData);
  const rawData = await scrapeProductDetails(url);
  const $ = cheerio.load(rawData);
  console.log(
    "================================================================                         jnmm m              ==========================================================================="
  );
  console.log($(".right-card-zoom > div > div > div > div > h1").text());
  console.log(
    "kllkmflkdmlfkmalkfdmv oeldkmfklm000000000000000000000000000000000000000000000000000000000000000000000      "
  );
};

getData();
