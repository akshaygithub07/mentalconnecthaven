import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Toaster, toast } from "sonner";
import { auth } from "../firebase/firebase";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => password.length >= 8;

  const handleToggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setNameError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isSignUp) {
      if (!name) {
        setNameError("Name is required");
        isValid = false;
      } else {
        setNameError("");
      }

      if (!confirmPassword) {
        setConfirmPasswordError("Confirm password is required");
        isValid = false;
      } else if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        isValid = false;
      } else {
        setConfirmPasswordError("");
      }
    }

    if (isValid) {
      setLoading(true);
      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Sign Up Successful:");
          toast.success("Account created successfully!");
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("Sign In Successful:");
          toast.success("Logged in successfully!");
        }

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        setNameError("");
      } catch (error: any) {
        console.error("Error:", error);
        switch (error.code) {
          case "auth/email-already-in-use":
            setEmailError("Email is already in use");
            break;
          case "auth/invalid-email":
            setEmailError("Invalid email format");
            break;
          case "auth/weak-password":
            setPasswordError("Password should be at least 6 characters");
            break;
          case "auth/user-not-found":
            setEmailError("No user found with this email.");
            break;
          case "auth/wrong-password":
            setPasswordError("Incorrect password.");
            break;
          default:
            toast.error("An error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute -bottom-0 -left-40 w-96 h-96 bg-wellness-100 rounded-full opacity-70 blur-3xl" />
      <div className="absolute -top-0 -right-40 w-96 h-96 bg-wellness-100 rounded-full opacity-70 blur-3xl" />
      <Toaster richColors />
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg bg-white shadow-lg">
        <div>
          <h1
            className="text-4xl text-mind-600 md:text-5xl lg:text-6xl text-center font-bold text-calm-900 leading-tight opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          <p className="mt-2 text-center text-sm text-calm-600">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>
        <div className="rounded-md shadow-sm space-y-4">
          <div className="flex justify-center mb-4 gap-8">
            <Button
              variant="outline"
              size="lg"
              onClick={handleToggleSignUp}
              className={cn(
                "w-1/2",
                isSignUp
                  ? "bg-mind-600 text-white border-mind-600 hover:bg-mind-600 hover:text-white"
                  : "bg-white text-calm-700 border-calm-300 hover:bg-calm-100"
              )}
            >
              Sign Up
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleToggleSignUp}
              className={cn(
                "w-1/2",
                !isSignUp
                  ? "bg-mind-600 text-white border-mind-600 hover:bg-mind-600 hover:text-white"
                  : "bg-white text-calm-700 border-calm-300 hover:bg-calm-100"
              )}
            >
              Sign In
            </Button>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignUp && (
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className={cn(
                    "appearance-none rounded-md relative block w-full px-3 py-3 text-calm-900 border border-calm-300 placeholder-calm-500 focus:outline-none focus:ring-mind-500 focus:border-mind-500 focus:z-10 sm:text-sm",
                    nameError &&
                      "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                />
                {nameError && (
                  <p className="mt-2 text-sm text-red-600" id="name-error">
                    {nameError}
                  </p>
                )}
              </div>
            )}
            <div>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={cn(
                  "appearance-none rounded-md relative block w-full px-3 py-3 text-calm-900 border border-calm-300 placeholder-calm-500 focus:outline-none focus:ring-mind-500 focus:border-mind-500 focus:z-10 sm:text-sm",
                  emailError &&
                    "border-red-500 focus:ring-red-500 focus:border-red-500"
                )}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {emailError}
                </p>
              )}
            </div>
            <div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={cn(
                    "appearance-none rounded-md relative block w-full px-3 py-3 text-calm-900 border border-calm-300 placeholder-calm-500 focus:outline-none focus:ring-mind-500 focus:border-mind-500 focus:z-10 sm:text-sm",
                    passwordError &&
                      "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-calm-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-calm-500" />
                    )}
                  </button>
                </div>
              </div>
              {passwordError && (
                <p className="mt-2 text-sm text-red-600" id="password-error">
                  {passwordError}
                </p>
              )}
            </div>
            {isSignUp && (
              <div>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className={cn(
                      "appearance-none rounded-md relative block w-full px-3 py-3 text-calm-900 border border-calm-300 placeholder-calm-500 focus:outline-none focus:ring-mind-500 focus:border-mind-500 focus:z-10 sm:text-sm",
                      confirmPasswordError &&
                        "border-red-500 focus:ring-red-500 focus:border-red-500"
                    )}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-calm-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-calm-500" />
                      )}
                    </button>
                  </div>
                </div>
                {confirmPasswordError && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="confirm-password-error"
                  >
                    {confirmPasswordError}
                  </p>
                )}
              </div>
            )}
            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mind-600 hover:bg-mind-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mind-500"
                disabled={loading}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {isSignUp ? (
                    <User
                      className="h-5 w-5 text-white-500 group-hover:text-white-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Lock
                      className="h-5 w-5 text-white-500 group-hover:text-white-400"
                      aria-hidden="true"
                    />
                  )}
                </span>
                {loading ? <>Loading...</> : isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  return <AuthPage />;
};

export default RegisterPage;
