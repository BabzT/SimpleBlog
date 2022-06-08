const myPosts = document.querySelector(".blogs");


const renderPosts = async (term) => {

    let url = "https://jsonplaceholder.typicode.com/posts";
    if (term) {
        url += `&q=${term}`
    }

    const res = await fetch(url);
    const posts = await res.json();
    console.log(posts);

    let template = "";
    posts.forEach(post => {
        template += `
            <div class="post">
                <h4 class="id">${post.id}</h4>
                <h4 class="title">${post.title}</h4>
                <a class="readmore" href="details.html?id=${post.id}">Read more</a>
            </div>
        `
    })
    myPosts.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderPosts());
