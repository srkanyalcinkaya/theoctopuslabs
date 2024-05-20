import CardItem from "./card-item";

export default function BlogCard({ data, lng }) {
  
    return (
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">

            {
                data?.map((item) => (
                    <CardItem blog={item} key={item.slug} lng={lng} />
                ))
            }
        </ul>
    )
}