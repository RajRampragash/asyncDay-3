var array = [];

async function fetchingFunc(apiURL) {
    v1 = await fetch(apiURL) // response
    checkv1 = await v1.json()
    return checkv1
}

async function getAllAPI(api, tags) {
    try {

        var data = await fetchingFunc(api)
        //console.log(data["message"]);
        array = data["message"]
        var parent = document.querySelector("#parent-div")
        parent.innerHTML = "";

        var title = document.querySelector('#showing')
        title.innerHTML = `<u>Showing images of ${tags}</u>`

        for (i of array) {
            var wrap = document.createElement('div')
            wrap.classList.add('col');
            wrap.classList.add('col-sm-6');
            wrap.classList.add('col-md-4');
            wrap.classList.add('col-lg-4');
            wrap.classList.add('col-xl-4');
            var img = document.createElement('img');
            img.style.width = '400px'
            img.style.height = '400px'
            img.setAttribute('src', i)
            img.setAttribute('alt', tags)
            img.setAttribute('object-fit', 'contain')
            wrap.append(img);
            parent.append(wrap);
        }

    }

    catch (err) {
        console.log("error", err);
    }

}


var random = document.querySelector('#random-submit')
var getall = document.querySelector('#all-submit')

getall.addEventListener('submit', (e) => {
    e.preventDefault();
    var tags = document.querySelector('#mainbreed').value;
    var api = `https://dog.ceo/api/breed/${tags}/images`
    getAllAPI(api, tags)


})

random.addEventListener('submit', (e) => {
    e.preventDefault();
    var tags = document.querySelector('#breed').value;
    tags = tags.split("-").join("/")
    // https://dog.ceo/api/breed/hound/afghan/images
    var api = `https://dog.ceo/api/breed/${tags}/images`;
    getAllAPI(api, tags)

})
