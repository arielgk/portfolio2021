import items from "../../../data/items";

export default function itemHandler({ query: { slug } }, res) {
    console.log(333,typeof id)
    const filtered = items.filter((i) => i.slug === slug)
    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Item with id: ${slug} not found.` })
    }
}
