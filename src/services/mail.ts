import SparkPost from 'sparkpost';

const client = new SparkPost(process.env.SPARKPOST_API_KEY);

export const sendMail = async (
  recipients: string[],
  subject: string,
  text: string,
  replyTo?: string,
): Promise<void> => {
  const payload: any = {
    recipients: recipients.map(address => ({ address })),
    content: {
      from: {
        name: `${process.env.MAIL_SENDER_NAME}`,
        email: `${process.env.MAIL_SENDER_EMAIL}`,
      },
      subject,
      text,
    },
    options: {
      open_tracking: false,
      click_tracking: false,
    },
  };

  if (replyTo) {
    payload.content.reply_to = replyTo;
  }

  await client.transmissions.send(payload);
};

export default {
  sendMail,
};
