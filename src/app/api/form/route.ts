import { NextApiRequest, NextApiResponse } from "next";
import sequelize from "@/lib/db";
import FormSubmission from "@/models/FormSubmission";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      await sequelize.sync();
      const formSubmission = await FormSubmission.create(req.body);
      res.status(201).json(formSubmission);
    } catch (error) {
      console.error("Error saving form submission:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
