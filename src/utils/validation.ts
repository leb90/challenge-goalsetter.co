export const validateLogin = (
  email: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validEmail = email === "user@goalsetter.co" || email === "(987) 654-3210";
      const validPassword = password === "Qwerty1234!";

      const isValid = validEmail && validPassword;
      if (isValid) {
        resolve(isValid);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 2000); // 2 second delay (simulating an API call)
  });
};