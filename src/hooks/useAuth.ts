import { validateLogin } from "../utils/validation";
interface ApiResponse {
  status: number;
}
export const useAuth = () => {
  const login = async (
    email: string,
    password: string
  ): Promise<ApiResponse> => {
    try {
      await validateLogin(email, password);
      const token = "123456789#";
      localStorage.setItem("token", token);
      return { status: 200 };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, logout };
};
