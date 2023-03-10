import type { NextApiRequest, NextApiResponse } from "next";

type Error = {
  error: string;
};

const widgets: Widget[] = [
  { id: 1, name: "Alpha", purchases: 100 },
  { id: 2, name: "Beta", purchases: 200 },
  { id: 3, name: "Gamma", purchases: 50 },
  { id: 4, name: "Delta", purchases: 75 },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Widget | Error>
) {
  const { id } = req.query;
  const widget = widgets.find((item) => item.id === Number(id));
  if (widget) {
    res.status(200).json(widget);
  } else {
    res.status(200).json({ error: "Widget does not exist." });
  }
}
