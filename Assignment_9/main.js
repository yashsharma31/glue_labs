const space_container = document.getElementById('space_container');
async function fetchData() {
    const res = await fetch('https://finalspaceapi.com/api/v0/character/');
    const data = await res.json();
    let output='';

    data.forEach(function(value){

        const infocard = document.createElement('div');
        infocard.style.width='300px';
        infocard.style.height='450px';
        infocard.classList.add('space');
        const name=value.name;

        const status=`${value.status}`;
        const species = value.species;
        const gender = value.gender;
        const hair = value.hair;

        const cardInnerHtml=`
             <div class="img-container">
                 <img src="${value.img_url}"  />
             </div>
             <div class="info">
         
                 <h3 class="name"><span>Name: </span> ${name}</h3>
                 <h3 class="name"><span>Status: </span> ${status}</h3>
                 <h3 class="name"><span>Species: </span> ${species}</h3>
             </div>
         `

        infocard.innerHTML=cardInnerHtml;
        space_container.appendChild(infocard);

    })
}

fetchData();