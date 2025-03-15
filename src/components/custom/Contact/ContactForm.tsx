"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Enter a valid name",
  }),
  lastname: z.string().min(2, {
    message: "Enter a valid name",
  }),
  email: z.string().min(2, {
    message: "Enter a valid Email",
  }),
  phone: z.string().min(10, {
    message: "Enter a valid Phone Number",
  }),
  content: z.string().min(2, {
    message: "Enter a valid Message",
  }),
});

export function ContactForm() {
  const [loading, setIsloading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      content: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsloading(true);
    setServerMessage("");
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
      const res = await fetch(`${baseUrl}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (!res.ok) {
        setServerMessage(result.error || " Submission failed");
        toast.error(result.error, {
          action: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        });
      } else {
        setServerMessage("Message received successfully!");
        toast.success("Message received successfully!", {
          action: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        });
        form.reset();
      }
    } catch (error) {
      setServerMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again", {
        action: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      });
      console.error("Contact error:", error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-10">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Your Phone No" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {loading ? (
          <Button disabled className="w-full flex gap-3 items-center">
            <Loader2 className="animate-spin" />
            Submiting...
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            Submit
          </Button>
        )}
        {serverMessage && (
          <p className="text-center text-sm mt-2">{serverMessage}</p>
        )}
      </form>
    </Form>
  );
}
