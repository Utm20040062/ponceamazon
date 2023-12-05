import axios from "axios";
import * as cheerio from 'cheerio';

async function getPrice(url){
try {
  const response = await axios.get(url);
  //console.log(response.data);
  const $ = cheerio.load(response.data);
  const price = $('.a-price-whole').text();
  //console.log(price);
  const pricevalue = price.split('.', 1);
  console.log('El precio es: ' , pricevalue[0]);
} catch (error) {
  console.log(error);
}
}

export { getPrice };