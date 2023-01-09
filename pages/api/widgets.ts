import type { NextApiRequest, NextApiResponse } from "next";

const widgets: Widget[] = [
  { id: 1, name: "Alpha", purchases: 100 },
  { id: 2, name: "Beta", purchases: 200 },
  { id: 3, name: "Gamma", purchases: 50 },
  { id: 4, name: "Delta", purchases: 75 },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Widget[]>
) {
  res.status(200).json(widgets);
}
