const cont = document.getElementById('myspace');
const unique = document.getElementById('unique');
const post = (id, title, body, userId) => {
    return (
        `<div class="card">
        <h5 class="card-header">Post ID: ${id}</h5>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${body}</p>
          <a href="#" class="btn btn-primary">Posted By: ${userId}</a>
        </div>
      </div>`)
}
const cacheddata = async () => {
    const res = await axios.get('https://glacial-thicket-18916.herokuapp.com/');
    console.log(res);
    for (let i = 0; i < res.data.length; i++) {
        const { id, title, body, userId } = res.data[i];
        let doc = document.createRange().createContextualFragment(post(id, title, body, userId));
        cont.appendChild(doc);
    }
}
cacheddata();

unique.addEventListener("click", async () => {
    const res = await axios.get('https://glacial-thicket-18916.herokuapp.com/cache');
    console.log(res.data);
    alertify
        .alert(String(res.data.data.length), function () {
            alertify.message('OK');
        });
})


