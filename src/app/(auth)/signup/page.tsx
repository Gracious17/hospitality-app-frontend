"use client";

import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const validateForm = (): Partial<FormData> => {
    const errors: Partial<FormData> = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email Address is invalid";
    }
    if (!formData.password || formData.password.length < 8) {
      errors.password = "Your password must contain 8 or more characters.";
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Password doesn’t match";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setError(null);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return;

    setLoading(true);

    try {
      const response = await fetch("https://fake-backend-api.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      // Redirect to login page
      router.push("/signin");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen px-4 md:px-0 bg-gray-50">
      <div className="w-full max-w-4xl bg-white md:shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto">
        {/* Left Side: Image */}
        <div className="hidden md:block w-1/3 relative">
          <Image
            src="/signup.png"
            alt="Luxury Hotel"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3 p-5 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Create an Account
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link
              href="/signIn"
              className="text-[#5627FF] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          {/* Google Sign-in */}
          <button className="w-full mt-6 flex items-center justify-center border border-gray-300 rounded-lg py-2 sm:py-3 text-gray-700 hover:bg-gray-100 transition-all">
            <Image
              src="/google-icon.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Google
          </button>

          <div className="my-6 flex items-center gap-2">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
              or Sign in With
            </span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Sign-up Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className={`w-full px-4 py-3 text-sm sm:text-base border ${
                    formSubmitted && validateForm().confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#5627FF] focus:outline-none`}
                  required
                />
                <button
                  type="button"
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
                {formSubmitted && validateForm().confirmPassword && (
                  <AlertCircle
                    size={18}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500"
                  />
                )}
              </div>
              {formSubmitted && validateForm().confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {validateForm().confirmPassword}
                </p>
              )}
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-[#5627FF] text-white py-2 sm:py-3 rounded-lg text-lg font-semibold hover:bg-[#5e3bdd] transition-all">
              Sign Up
            </button>

            {/* Terms & Privacy */}
            <p className="text-xs text-gray-600 text-center mt-4">
              By signing up, you agree to our{" "}
              <Link
                href="#"
                className="text-[#5627FF] font-medium hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="text-[#5627FF] font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-6">
        © 2024 Findpeace Ltd
      </p>
    </div>
  );
};

export default SignupPage;
