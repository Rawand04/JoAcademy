import LoginForm from "@/components/Authentication/login-form";
import CustomNavBar from "@/components/custom-navbar";

export default function LoginPage() {
  return <LoginForm />;
}

LoginPage.getLayout = (page) => {
  return <CustomNavBar>{page}</CustomNavBar>
}