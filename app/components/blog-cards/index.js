import CardItem from "./card-item";

export default function BlogCard({ data }) {
    // console.log(data)
    return (
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
            
            {
                data?.map((item) => (
                    <CardItem blog={item} key={item.slug} />
                ))
            }
        </ul>
    )
}