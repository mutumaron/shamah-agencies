"use client";

import PropertyCard from "@/components/custom/Home/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Booking, Package } from "@/lib/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// Define the helper function so it's available in this file.
function formatPhoneNumber(
  localNumber: string,
  countryCode: string = "254"
): string {
  const trimmed = localNumber.trim();
  // If the number starts with "0", remove it and prepend the country code.
  if (trimmed.startsWith("0")) {
    return countryCode + trimmed.slice(1);
  }
  return trimmed;
}

const Confirm = () => {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const router = useRouter();

  const [booking, setBooking] = useState<Booking | null>(null);
  const [pkg, setPkg] = useState<Package | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConfirmationDetails() {
      if (!bookingId) return;
      try {
        const bookingResponse = await fetch(`/api/bookings/${bookingId}`);
        if (!bookingResponse.ok) {
          throw new Error("Failed to fetch booking details");
        }
        const bookingData = await bookingResponse.json();
        const fetchedBooking: Booking = bookingData.data || bookingData;
        setBooking(fetchedBooking);

        const packageResponse = await fetch(
          `/api/packages/${fetchedBooking.package_id}`
        );
        if (!packageResponse.ok) {
          throw new Error("Failed to fetch package details");
        }
        const packageData = await packageResponse.json();
        const fetchedPackage: Package = packageData.data || packageData;
        setPkg(fetchedPackage);
      } catch (error) {
        toast.error("Error fetching confirmation details", {
          action: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        });
      } finally {
        setLoading(false);
      }
    }
    fetchConfirmationDetails();
  }, [bookingId]);
  function sendToWhatsApp(booking: Booking, pkg: Package) {
    const message = `New Booking Received!

Booking Details:
Name: ${booking.firstname} ${booking.lastname}
Email: ${booking.email}
Customer Phone: ${booking.phone}
Check-In: ${booking.checkin}
Check-Out: ${booking.checkout}
Adults: ${booking.noadults}
Children: ${booking.nochildren}
Booking ID: ${booking.id}

Package Details:
Package ID: ${pkg.id}
Title: ${pkg.title}
Price: $${pkg.price}`;

    // Get the owner's phone from the env variable.
    const ownerNumber = process.env.NEXT_PUBLIC_OWNER_PHONE || "";
    // Format the number (removes any non-digits, converting "+254712345678" into "254712345678")
    const formattedOwner = formatPhoneNumber(ownerNumber);
    const whatsappUrl = `https://wa.me/${formattedOwner.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    console.log("WhatsApp URL:", whatsappUrl);
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      router.push("/tour-packages");
    }, 200);
  }

  if (!booking || !pkg) {
    return <div>Error loading confirmation details.</div>;
  }

  return (
    <div className="flex flex-col mx-10 py-12">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <PropertyCard pack={pkg} />
        <Card className="space-y-6 border p-3 rounded-lg">
          <h1 className="font-bold text-xl">Booking Details</h1>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">First name</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.firstname}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Last name</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.lastname}
              </p>
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Your Phone number</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.phone}
              </p>
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Your Email</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.email}
              </p>
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Check In Date</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.checkin}
              </p>
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Check Out date</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.checkout}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Number of Adults</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.noadults}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Number of children</h1>
              <p className="text-gray-900 p-2 border border-black rounded-md">
                {booking.nochildren}
              </p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-5">
          <Image
            src={"/images/paybill.jpg"}
            alt="Paybill"
            height={800}
            width={800}
            className="w-[400px]"
          />
          <div className="flex flex-col gap-2">
            <Label>Pay Via M-Pesa Express</Label>
            <Input placeholder="Enter Phone number" />
            <Button className="bg-green-600">Pay</Button>
          </div>
          <Button
            onClick={() => sendToWhatsApp(booking, pkg)}
            className="bg-transparent border border-green-500 text-black hover:bg-green-500 hover:text-white"
          >
            Confirm Via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
