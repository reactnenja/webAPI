const dataInterfase = document.querySelector(".row");
const dataIntertrue = document.querySelector(".card_box");
let params;
let newdata = [
  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8,

  9,

  10,
];
let limit = 12;
function userFunc(data) {
  let str = "";
  data.forEach((user) => {
    str += `
    <div class="card col-3">
        <div class"card-header">${user.id}</div>
        <h class="text-center">${user.title}</h>
        <p class="lead">${user.title}</p>
    </div>
    `;
  });
  let str2 = "";
  newdata.forEach((p) => {
    str2 += `<nav aria-label="...">
    <ul class="pagination pagination-lg">
      <li class="page-item px-2"><a class="page-link" href="?page=${p}&limit=${limit}">${p}</a></li>
    </ul>
  </nav>`;
  });

  dataInterfase.innerHTML = str;
  dataIntertrue.innerHTML = str2;
}
function getParams() {
  var idx = document.URL.indexOf("?");
  var params = new Array();
  if (idx != -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    for (var i = 0; i < pairs.length; i++) {
      nameVal = pairs[i].split("=");
      params.push(nameVal[1]);
    }
  }
  return params;
}

params = getParams();

async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();

    data = paginate(data, params[1] || limit, params[0] || 1);

    userFunc(data);
  } catch (err) {
    console.log("error", err);
  }
}

getData();

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
