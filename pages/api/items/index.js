import items from "../../../data/items";

export default function handler(req, res) {
    res.status(200).json(items)
}
