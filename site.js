const POST_URL = "https://jsonplaceholder.typicode.com/posts?limit=10";
const IMAGE_URL = "https://jsonplaceholder.typicode.com/photos?limit=10";

async function showResult(){
    try{
        await Promise.all([
            fetch(POST_URL),
            fetch(IMAGE_URL)
        ]).then(async ([post, image]) => {       
            postData = await post.json();
            imageData = await image.json();

            for(var i=0; i<postData.length; i++){    
                if(postData[i]['id'] == imageData[i]['id']){
                    let card = document.createElement("div");
                    card.id = postData[i]['id'];
                    card.className = 'column';
                    card.innerHTML = `<img class="card-img-top" src="${imageData[i]['thumbnailUrl']}" alt="Card image cap"> <h3>${postData[i]['title']}</h3> <p>${postData[i]['body']}</p>`;

                    document.getElementById('result').append(card);
                }
            }
        })
    } catch (error) {
        alert(`FETCH ERROR: ${error}`);
    }
}