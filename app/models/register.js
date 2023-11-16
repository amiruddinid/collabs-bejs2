class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.password = password
    }
  }

  const registerWithEmail = (name, email, password) => {
    console.log(`User '${name}' registered with email '${email}'`);
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
  module.exports = {User}
