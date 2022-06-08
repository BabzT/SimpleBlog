const id = new URLSearchParams(window.location.search).get("id");
const myPosts =document.querySelector(".details");

const renderDetails = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    if (!res.ok){
        window.location.replace("/");
    }
    const post = await res.json();

    const template = `
        <h4 class="id2">${post.id}</h4>
        <h4 class="title2">${post.title}</h4>
        <p class="text">${post.body}</p>
    `

    myPosts.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", renderDetails);
