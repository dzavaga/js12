//3
/*
fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];

        // Створити об'єкт з базовою інформацією
        const userInfo = {
          avatar: user.picture.medium,
          name: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          gender: user.gender,
          country: user.location.country,
          username: user.login.username,
          password: user.login.password,
          email: user.email
        };

        // Відобразити базову інформацію на сторінці
        const userInfoContainer = document.getElementById('user-info');
        userInfoContainer.innerHTML = `
          <img src="${userInfo.avatar}" alt="Avatar">
          <p>Name: ${userInfo.name}</p>
          <p>Age: ${userInfo.age}</p>
          <p>Gender: ${userInfo.gender}</p>
          <p>Country: ${userInfo.country}</p>
          <p>Username: ${userInfo.username}</p>
          <p>Password: ${userInfo.password}</p>
          <p>Email: ${userInfo.email}</p>
        `;
      })
      .catch(error => console.log(error));*/
      