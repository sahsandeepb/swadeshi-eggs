const fs = require("fs")

const cities = [
"delhi",
"noida",
"ghaziabad",
"jaunpur",
"mirzapur",
"sonbhadra",
"deoria",
"gorakhpur",
"lucknow"
]

const keywords = [
"organic eggs",
"desi eggs",
"farm fresh eggs",
"buy eggs online",
"country eggs"
]

const template = fs.readFileSync("seo-template.html").toString()

cities.forEach(city => {

keywords.forEach(keyword => {

let slug = keyword.replaceAll(" ","-") + "-" + city

let page = template
.replaceAll("{{CITY}}",city)
.replaceAll("{{KEYWORD}}",keyword)
.replaceAll("{{SLUG}}",slug)

fs.writeFileSync(`pages/${slug}.html`,page)

})

})

console.log("SEO pages generated")
