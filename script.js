const publicar = () =>{

    let tweet = document.getElementById("tweet").value;

    document.getElementById("tweets").innerHTML += `
        <p class="tweet">
            <strong>Marvin Asencio:</strong> ${tweet}
        </p>
    `;

    document.getElementById("tweet").value = "";

}