if (document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready () {
    getBlogposts('/get-posts');

    // send posts to server
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {

        event.preventDefault(); // prevents the form from contacting our server automatically (we want to do it ourselves)
        var formActionUrl = form.action; // 'form.action' is the url '/create-post'
        var formData = new FormData(form);

        postBlogposts(formActionUrl, formData);
    });
}

/****
 * Function definitions
 ***/
function postBlogposts (url, data) {
    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(function (res) {
        res.json()
            .then(function (json) {
                console.log(json);
                addBlogpostsToPage(json);
                document.querySelector('form').reset();
        })
    })
    .catch(function (err) {
        console.error(err)
    });
}

function getBlogposts (url) {
    fetch(url, {
        method: 'GET'
    })
    .then(function (res) {
        res.json()
        .then(function (json) {
            console.log(json);
            addBlogpostsToPage(json);
        });
    })
    .catch(function (err) {
        console.error(err)
    });
}

function addBlogpostsToPage (data) {
    for (var blogpost in data) {
        if (data.hasOwnProperty(blogpost)) {

            var postDiv         = document.createElement('div');
            var postText        = document.createElement('div');
            var postContainer   = document.querySelector('.post-container');

            // put <p> tags around each separate line of blogpost, otherwise
            // they will all run together
            postText.innerHTML = data[blogpost].split('\n').map(function(item){
              return '<p>'+item+'</p>';
            }).join('');
            postText.className = 'postBody';
            postDiv.className = 'post';

            var postDetail = document.createElement('div');
            postDetail.className = 'postDetail'
            postDetail.innerHTML = blogpost;

            postDiv.appendChild(postText);
            postDiv.appendChild(postDetail);
            postContainer.appendChild(postDiv);
        }
    }
}
