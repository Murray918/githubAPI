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
  <h2>The Basics</h2>
  <ul>
    <li><span class='blue' >Name:</span> ${data.name}</li>
    <li>Github URL: ${data.url}</li>
    <li>Email: darbyguitars@gmail.com</li>
    <li>Company: ${data.company}</li>
    <li>Website: ${data.blog}</li>
  </ul>
</div>
</section>
<div class="story">
  <p>${data.bio}</p>
</div>
  <img src=${data.avatar_url} alt="">
<div class="pic">
</div>`;

  $('.container').append(list)
}
