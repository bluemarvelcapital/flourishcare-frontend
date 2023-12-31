import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Flourish Advanced Care",
        short_name: "Flourish Advanced Care",
        description:
            "Flourish Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",
        start_url: "/",
    }
}
