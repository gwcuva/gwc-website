import { GraphQLClient } from "graphql-request";


export default async ({ body }, res) => {
  const { ...data } = JSON.parse(body);

  const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_MUTATION_TOKEN}`,
    },
  });

  try {
    const { createSubmission } = await graphcms.request(
      `
      mutation createEmails($formData: Json!) {
        createHackNewsletterEmails(data: {email: ""}) {
          email
        }
      }
      `,
      {
        data
      }
    );

    res.status(201).json(createSubmission);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};