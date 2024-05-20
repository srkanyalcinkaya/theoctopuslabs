import Link from "next/link";
import { Image } from "react-datocms";

export default function Avatar({ name, picture, bio, slug, lng="en" }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image
          alt={name}
          data={picture.responsiveImage}
          className="rounded-full"
        />
      </div>
      <Link href={`/${lng}/author/${slug}`} className="text-xl font-bold flex flex-col items-start text-start">
        {name}
        <span className="font-light text-base ">
          {bio}
        </span>
      </Link>
    </div>
  );
}