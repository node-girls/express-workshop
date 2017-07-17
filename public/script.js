if (document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

window.onbeforeunload = function() {
    $('nav a').off('click', setActiveLink);
    return null;
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
        
        $('nav a').on('click', setActiveLink);
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
            var postText        = document.createElement('h3');
            var postMeta        = document.createElement('div');
            var postDate        = document.createElement('span');
            var thumbnail       = document.createElement('img');
            var postContainer   = document.querySelector('.post-container');

            thumbnail.src = "./img/default-image.jpg";
            thumbnail.className = "thumbnail";
            postText.innerHTML = data[blogpost];
            postDate.innerHTML = "August 2017";
            postDiv.className = "post";
            postMeta.className = "article-meta";

            postDiv.appendChild(thumbnail);
            postDiv.appendChild(postText);
            postMeta.appendChild(postDate);
            postDiv.appendChild(postMeta);
            postContainer.appendChild(postDiv);
        }
    }
}

function setActiveLink(event) {
    const url = this.href;
    $('nav a').each(function() {
        $(this).removeClass('active');
        if (url == this.href) $(this).addClass('active');
    });
}
