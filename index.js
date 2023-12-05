import { getPrice } from "./src/scrapper.js";
import {intro, outro, text, spinner } from '@clack/prompts';

export default async function (){
const s = spinner();

intro('Welcome to soriana price bot!');

const url = await text({
  message: 'Type or paste your Soriana product URL:',
  placeholder: 'https://www.soriana.com/consola-playstation-5-standard-god-of-war-ragnarok/11743988.html',
  validate: (value) => {
    if(!value.includes('www.soriana.com')) return 'Inavalid soriana URL';
  }
});
s.start('Getting price...');
const price = await getPrice(url);
s.stop(price);
outro('Thanks for using my app!')
};
