// Helper function to convert a local phone number to international format
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

// Refined sendToWhatsApp function that uses the formatted owner's phone number.
function sendToWhatsApp(booking: {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  noadults: number;
  nochildren: number;
}) {
  if (!booking) return;

  // Construct the message with booking details.
  const message = `New Booking Received!

Name: ${booking.firstname} ${booking.lastname}
Email: ${booking.email}
Customer Phone: ${booking.phone}
Check-In: ${booking.checkin}
Check-Out: ${booking.checkout}
Adults: ${booking.noadults}
Children: ${booking.nochildren}
Booking ID: ${booking.id}`;

  // Get the owner's phone number from the environment variable.
  // For example, if the owner’s number is given as "0712345678" in local format,
  // this function will convert it to "254712345678".
  const ownerNumber = process.env.NEXT_PUBLIC_OWNER_PHONE || "";
  const formattedOwner = formatPhoneNumber(ownerNumber);

  // Construct the WhatsApp URL. Note: WhatsApp expects the number in international format without a '+'.
  const whatsappUrl = `https://wa.me/${formattedOwner}?text=${encodeURIComponent(
    message
  )}`;

  console.log("WhatsApp URL:", whatsappUrl);

  // Open WhatsApp URL in a new tab/window. This won't redirect the current page.
  window.open(whatsappUrl, "_blank");
}
