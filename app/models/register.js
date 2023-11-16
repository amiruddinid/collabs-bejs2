class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}

const registerWithEmail = (username, email, password) => {
  console.log(`User '${username}' registered with email '${email}'`);
};

const registerWithGoogle = () => {
  console.log('User registered with Google');
};

const registerWithFacebook = () => {
  console.log('User registered with Facebook');
};

registerWithEmail('Onny Vergiean', 'onny@example.com', '12345678');
registerWithGoogle();
registerWithFacebook();
