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
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  packageId: number;
}

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
  checkin: z.string().min(2, {
    message: "Enter a valid check-in date ",
  }),
  checkout: z.string().min(2, {
    message: "Enter a valid check-out date",
  }),
  noadults: z.preprocess(
    (val) => Number(val),
    z.number().min(1, { message: "Enter a valid number of adults" })
  ),
  nochildren: z.preprocess(
    (val) => Number(val),
    z.number().min(0, { message: "Enter a valid number of children" })
  ),
});

export function BookingForm({ packageId }: BookingFormProps) {
  const [loading, setIsloading] = useState(false);
  const router = useRouter();
  const [serverMessage, setServerMessage] = useState("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      checkin: "",
      checkout: "",
      noadults: 1,
      nochildren: 0,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsloading(true);
    setServerMessage("");
    let bookingId = null;
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, package_id: packageId }),
      });
      const result = await res.json();
      if (!res.ok) {
        setServerMessage(result.error || "Booking submission failed");
        toast.error(result.error, {
          action: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        });
      } else {
        setServerMessage("Booking created successfully!");
        toast.success("Booking created successfully!", {
          action: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        });
        form.reset();
        bookingId = result?.data?.[0]?.id;
      }
    } catch (error: any) {
      setServerMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again", {
        action: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      });
      console.error("Booking error:", error);
    } finally {
      setIsloading(false);

      router.push(`/confirm?bookingId=${bookingId}`);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 border p-3 rounded-lg"
      >
        <h1 className="font-bold text-lg">Book This Tour</h1>
        <div className="grid md:grid-cols-2 gap-5">
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Phone no</FormLabel>
                <FormControl>
                  <Input placeholder="Phone no" {...field} type="phone" />
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
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="checkin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Check in Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Check in"
                    {...field}
                    type="date"
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checkout"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Check out Date</FormLabel>
                <FormControl>
                  <Input placeholder="Check out" {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="noadults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Adults</FormLabel>
                <FormControl>
                  <Input placeholder="Enter number" {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nochildren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Children</FormLabel>
                <FormControl>
                  <Input placeholder="Enter number " {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
