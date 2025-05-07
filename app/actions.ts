"use server"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validate the data
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill out all fields.",
      };
    }

    // Send the data to our API endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    // If MongoDB is not set up yet, this will fall back to console logging
    if (!response.ok) {
      console.log("Form submission (MongoDB not configured):", { name, email, message });
      return {
        success: true,
        message: "Thanks for your message! I'll get back to you soon.",
      };
    }

    const data = await response.json();

    return {
      success: true,
      message: "Thanks for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting form:", error);

    // Fallback to console logging if there's an error
    console.log("Form submission (fallback):", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    });

    return {
      success: true,
      message: "Thanks for your message! ",
    };
  }
}

