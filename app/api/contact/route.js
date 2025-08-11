import nodemailer from 'nodemailer';
export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  try {
    // Create a transporter using SMTP settings (using Gmail as an example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // You can change this to another SMTP service if you prefer
      auth: {
        user: process.env.EMAIL_USER,  // Your email address (e.g., 'youremail@gmail.com')
        pass: process.env.EMAIL_PASSWORD,  // Your email password (or app-specific password if using Gmail)
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,  // Sender email address
      to: process.env.EMAIL_TO,      // Recipient email address
      subject: `New Contact Form Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Error sending email via Nodemailer:', err);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
      status: 500,
    });
  }
}
