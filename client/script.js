const url = "http://localhost:3000/users";

fetch(url)
//Hör översätter vi objektet till en js objekt
  .then((responseObject) => responseObject.json())
  .then((users) => {
    // Skapa ett ul-element
    const ul = document.createElement("ul");

    // Välj <main> som förälderelement
    const main = document.querySelector("main");

    // Loopa igenom användare och skapa li-element
    users.forEach((user) => {
      const li = document.createElement("li");

      // Sätt innehållet i li
      li.innerHTML = `
        <div style="padding: 1rem; text-align: center; border: 0.2rem solid #ccc; border-radius: 2rem; background-color: ${user.color};">
          <h3>${user.firstName} ${user.lastName}</h3>
          <p>${user.username}</p>
          <p>ID: ${user.id}</p>
        </div>
      `;

      // Lägg till animation-klassen
      li.classList.add("scale-up-center");

      // Lägg till li i ul
      ul.append(li);
    });

    //Skriv ut objekt i consol
    console.log(users);

    // Lägg till ul direkt i <main>
    main.appendChild(ul);
  })

  //Fel hanterare ifall något knasigt händer
  .catch((error) => {
    console.error("Fel vid hämtning av data:", error);
  });

  
  
