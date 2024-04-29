console.log("Let's get this party started!");

const $gifArea = $("#gif-area")
const $searchInput = $("#search")

//Adding Gif
function addGif(res){
    let numResults =res.data.length;
    if(numResults){
        let randomIndex = Math.floor(Math.random()*numResults)
        let $newCol = $("<div>", {class: "col-md-4 col-12 mb-4"})
        let $newGif = $("<img>", {src: res.data[randomIndex].images.original.url})
    
    $newCol.append($newGif)
    $gifArea.append($newCol)
}
}
$("form").on("submit", async function(event){
    event.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("")

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    })
    addGif(response.data);
})

//Remove Gif
$("#remove").on("click", function(){
    $gifArea.empty()
})