const studentsList = document.querySelector(".row");

async function fetchStudents() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const students = await response.json();
  displetStudent(students);
}

function displetStudent(students) {
  let str = "";

  students.forEach((student) => {
    str += `
        <div class="card">
              <h2 class="h4">${student.name}</h2>
              <h4 class="h4">${student.username}</h4>
              <div class="cart-box">
              <div><h4 class="h4">Email: </h4></div>
              <div><p class="lead">${student.email}</p></div>
            </div>
            <div class="py-2">
            <h4 class="h4">Address: </h4>
            <p class="lead">${student.address.street}</p>
            </div>
            <div class="py-2">
            <h4 class="h4">Website: </h4>
            <p class="lead">${student.website}</p>
            </div>
            <div class="py-2">
            <h4 class="title-name">Phone: </h4>
           <p class="cart-title">${student.phone}</p>
            </div>
            <div class="py-2">
            <a href="../pages/post.html" class="btn btn-black text-white">Post</a>
           <a href="../pages/todo.html" class="btn">ToDo</a>
            <a href="../pages/photos.html"class="btn">Photos</a>
            </div>
        </div>
        `;
  });
  studentsList.innerHTML = str;
}

fetchStudents().catch((error) => console.error("Error:", error));
