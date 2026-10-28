function register(username, password) {
  if (!username || !password) {
    return "Username and password required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  return "User registered successfully";
}

module.exports = { register };