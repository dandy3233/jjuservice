// pages/api/reports.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const reports = await prisma.dormitory.findMany({
        orderBy: {
          submission_date: 'desc',
        },
      });
      res.status(200).json(reports);  // Return the reports as JSON
    } catch (error) {
      console.error(error);  // Log any error to the server console
      res.status(500).json({ error: 'Failed to fetch reports' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // Respond with a 405 if the method is not GET
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
