async function loadData() {
  const res = await fetch('data.json');
  const data = await res.json();
  display(data);
}

function display(data) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.state}</h3>
        <p>Tuition: ${item.tuition}</p>
        <p>Living: ${item.living}</p>
        <p>Community: ${item.community}</p>
      </div>
    `;
  });
}

loadData();
