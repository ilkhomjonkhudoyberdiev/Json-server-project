const id = new URLSearchParams(window.location.search).get('id');
const conatiner = document.querySelector('.details');
const deletebtn = document.querySelector('.button');
const renderDeatils = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    const tempalte = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    conatiner.innerHTML = tempalte;
}
deletebtn.addEventListener('click', async (e) => {
const res = await fetch('http://localhost:3000/posts/' + id, {
    method: "DELETE"
})
window.location.replace('/index.html')
})
window.addEventListener('DOMContentLoaded', () => renderDeatils());
