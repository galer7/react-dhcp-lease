
const getFetchData = () =>
  fetch("http://192.168.0.1/basic/dhcp.asp")
    .then((res) => res.text())
    .then((html) => html);

getFetchData().then((data) => {
  const $ = cheerio.load(data);
  const table = $("tbody > tr");
  // console.log(table);

  const stuff = table
    .map((i, v) => ({
      name: $(v).find("td:nth-of-type(1)").text().trim(),
      ip: $(v).find("td:nth-of-type(3)").text().trim(),
      expiresAt: $(v).find("td:nth-of-type(6)").text().trim(),
    }))
    .get();

  console.log(stuff);
});
