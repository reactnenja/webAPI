async function userFunc() {
  try {
    const url = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await url.json();
    userFunc(response);
  } catch (error) {
    console.log(error);
  }
}

function userFunc(data) {
  let str = "";
  data.forEach((user) => {
    str += `
      <div class="card col-lg-3">
         <p></p>
         <p class="lead">${user.}</p>
         <p class="lead">${user.}</p>
         <p class="lead">${user.}</p>
      </div>
      `;
  });
  dataInterfase.innerHTML = str;
}
