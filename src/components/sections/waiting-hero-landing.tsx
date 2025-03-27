"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Form from "../forms/waiting-list-form";

export default function WaitingHeroLanding() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // First, attempt to send the email
        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        });

        if (!mailResponse.ok) {
          if (mailResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Email sending failed");
          }
          return; // Exit the promise early if mail sending fails
        }

        // If email sending is successful, proceed to insert into Notion
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Notion insertion failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className="space-y-6 py-6 sm:py-16 lg:py-16">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <div className="flex flex-row gap-2 rounded-full border p-2">
          <span>🔥</span>
          Launching soon!
          <span>🔥</span>
        </div>

        <Image
          src="/logo.svg"
          alt="logo"
          width={16}
          height={16}
          className="mx-auto size-16"
        />

        <h1 className="text-balance text-center font-urban text-3xl font-medium tracking-tighter sm:text-5xl">
          Turn Your {" "}
          <span className="font-bold text-green-500">
            Code into Content
          </span>
          , Instantly! 🚀
        </h1>

        <p className="sm:text-md mx-auto max-w-[27rem] text-balance pt-1.5 text-center text-base text-zinc-300">
          Supercharge your developer journey—AI-powered posts from your GitHub commits, PRs, and merges
        </p>


        <Form
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

      </div>
    </section>
  );
}
