const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.snapdeal.com/search?clickSrc=top_searches&keyword=tshirt&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy";
//"https://www.snapdeal.com/product/adorate-coral-cotton-regular-fit/5764608189802944590#bcrumbSearch:tshirt";
async function scrapeProductDetails(url) {
  try {
    const res = await axios.get(url);
    //console.log(res.data);
    // let url_data = [];
    // console.log(url_data, "->>>>data set");
    // console.log(
    //   "======================================================================================================================s"
    // );
    // url_data = res.data;
    // console.log(url_data, "->>>>data set");
    return res.data;
    console.log("okok");
  } catch (error) {
    console.log(error);
  }
}

let getData = async () => {
  //console.log(rawData);
  const rawData = await scrapeProductDetails(url);
  console.log(
    "================================================================   30                      jnmm m              ==========================================================================="
  );
  const $ = cheerio.load(rawData);

  $.html();
  //product-row
  const first_value = $(
    "div.product-tuple-description > div.product-desc-rating > a"
  ).each((e) => {
    console.log($(e).find());
    console.log(e);
  });
  // console.log(first_value.length);
  // for (let i = 0; i < first_value.length; i++) {
  //   let $sec = cheerio.load(first_value[i]);
  //   $sec.html();
  //   console.log(
  //     "=======================================",
  //     i,
  //     $sec,
  //     "=======================================",
  //     i
  //   );

  //console.log($sec("favDp > div > a > picture > img").attr("src"));

  // const data = $(
  //   "div.product-tuple-description > div.product-desc-rating > a"
  // ).each((e) => {
  //   const $sec = cheerio.load(e);
  //   console.log(
  //     "================================================================     40                    jnmm m              ==========================================================================="
  //   );
  //   console.log($sec);
  //   console.log(
  //     "================================================================                         jnmm m              ==========================================================================="
  //   );
  //   $sec.html();
  //   console.log($sec("js-section >div >div >a >picture >img").attr(src));
  // });

  console.log(
    "================================================================                        bv gfcghvghv     ==========================================================================="
  );
  // .each((row, raw_element) => {
  //   $(raw_element).focus().find("div div div");
  // });
  // console.log(
  //   "================================================================                         jnmm m              ==========================================================================="
  // );
  //console.log($(".right-card-zoom > div > div > div > div > h1").text());
  // console.log(
  //   "kllkmflkdmlfkmalkfdmv oeldkmfklm000000000000000000000000000000000000000000000000000000000000000000000      "
  // );
};

// scrapeProductDetails(url);
// getData();

async function cryptopriceScraper() {
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
  return result;
}
cryptopriceScraper();
