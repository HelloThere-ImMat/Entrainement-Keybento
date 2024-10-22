import Image from "next/image";

interface CatPost {
  id: string;
  url: string;
  title?: string; // Optional property, as not all data may have a title
}

export default async function Page() {
  let data = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  let images : CatPost[] = await data.json()
  return (
    <div >
        {images.map((image) => (
          <div>
            <Image
              src={image.url}
              width={500}
              height={500}
              alt={image.id}
            />
          </div>
        ))}
    </div>
  )
}
