//import modules
//ESModules 
//import  dividir,{suma, resta, nombre } from "./math.js"

//console.log(suma(2,2));
//console.log(resta(2,2));
//console.log(nombre);
//console.log(dividir(10, 2));

//import default
//import gatito from "./math.js";
//console.log(gatito(5, 2));

import axios from "axios";
import { data } from "cheerio/lib/api/attributes";
axios.get(
    "https://www.amazon.com.mx/dp/B0CD2396HC?ref_=Oct_DLandingS_D_4bb5f062_NA&th=1").then ((response) => console.log(response.data));