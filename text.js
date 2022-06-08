const myPosts = document.querySelector(".blogs");

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    
    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}


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
            <div class="post reveal">
                <h4 class="id">${post.id}</h4>
                <h4 class="title">${post.title}</h4>
                <a class="readmore" href="details.html?id=${post.id}">Read more</a>
            </div>
        `
    })
    myPosts.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderPosts());
