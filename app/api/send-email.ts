import mailjet from "node-mailjet";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    // Initialize Mailjet client
    const mailjetClient = new mailjet({
      apiKey: process.env.MAILJET_API_KEY, // Your Mailjet API Key
      apiSecret: process.env.MAILJET_SECRET_KEY, // Your Mailjet Secret Key
    });

    try {
      // Send the email
      const request = mailjetClient.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "your-email@example.com", // Sender's email address
              Name: "Your Company Name", // Sender's name
            },
            To: [
              {
                Email: "your-email@example.com", // Your email address (destination)
                Name: "Your Name", // Your name
              },
            ],
            Subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            TextPart: `Message from ${firstName} ${lastName} (${email}): ${message}`,
            HTMLPart: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          },
        ],
      });

      const response = await request;
      console.log(response.body);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
