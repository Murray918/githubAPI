let me = new XMLHttpRequest();
me.open('GET', 'https://api.github.com/users/Murray918');
me.addEventListener('load', requestListener);
me.send();

function requestListener() {
  let data = JSON.parse(this.responseText);
  console.log(data);
  let list = `
  <div class="header">
    <h1>${data.name}</h1>
  </div>
  <section>
  <div class="basics">
    <h1>The Basics</h1>
    <ul>
      <li><span class='blue' >Name:</span> ${data.name}</li>
      <li><span class="blue">Github URL:</span> ${data.url}</li>
      <li><span class="blue">Email:</span> darbyguitars@gmail.com</li>
      <li><span class="blue">Company:</span> ${data.company}</li>
      <li><span class="blue">Website:</span> ${data.blog}</li>
    </ul>
  </div>

  <div class="story">
    <h1>The Story</h1>
    <p>${data.bio}</p>
  </div>
    <img src=${data.avatar_url} alt="">
  <div class="pic">
  </section>
  </div>`;

  $('.container').append(list)
}
