function login(username, password) {
  if (!username || !password) {
    return "Username and password required";
  }

  return "Login successful";
}

module.exports = { login };