"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const validateForm = (): Partial<FormData> => {
    const errors: Partial<FormData> = {};
    if (!formData.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setErrorMessage("");

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return;

    const result = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password.");
    } else {
      router.push("/"); // Redirect to dashboard/home
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen  md:px-0 bg-gray-50">
      <div className="w-full max-w-4xl bg-white md:shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto">
        {/* Left Side Image */}
        <div className="hidden md:block w-1/3 relative">
          <Image
            src="/signup.png"
            alt="Luxury Hotel"
            fill
            className="object-cover"
          />
        </div>
        {/* Right Side Form */}
        <div className="flex flex-col p-5 min-h-[92vh] h-full w-full md:w-2/3">
          <div>
            <h1 className="text-2xl font-bold">Sign in to Your Account</h1>
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-[#5627FF] font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 bg-gray-200 w-full py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition-all cursor-pointer">
              <FcGoogle size={24} />
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-200 w-full py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition-all cursor-pointer">
              <FaFacebook size={24} className="text-[#1877F2]" />
              Continue with Facebook
            </button>
          </div>

          {/* OR Separator */}
          <div className="flex items-center gap-2 my-6">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-sm text-gray-500">or Sign in With</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Sign In Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 text-sm sm:text-base border ${
                    formSubmitted && validateForm().email
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#5627FF] focus:outline-none`}
                  required
                />
                {formSubmitted && validateForm().email && (
                  <AlertCircle
                    size={18}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500"
                  />
                )}
              </div>
              {formSubmitted && validateForm().email && (
                <p className="text-red-500 text-xs mt-1">
                  {validateForm().email}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={`w-full px-4 py-3 text-sm sm:text-base border ${
                    formSubmitted && validateForm().password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#5627FF] focus:outline-none`}
                  required
                />
                <button
                  type="button"
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {formSubmitted && validateForm().password && (
                  <AlertCircle
                    size={18}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500"
                  />
                )}
              </div>
              {formSubmitted && validateForm().password && (
                <p className="text-red-500 text-xs mt-1">
                  {validateForm().password}
                </p>
              )}
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            {/* Sign In Button */}
            <button className="w-full bg-[#5627FF] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5e3bdd] transition-all">
              Sign In
            </button>

            {/* Terms & Privacy */}
            <p className="text-xs text-gray-600 text-center mt-4">
              By signing in, you agree to our{" "}
              <Link
                href="/terms"
                className="text-[#5627FF] font-medium hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-[#5627FF] font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          <p className="text-xs text-gray-500 text-center mt-10">
            © 2024 Findpeace Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
