interface CardProps {
  title: string
  img?: string
  description: string
}

export default function Card({ title, img, description }: CardProps) {
  return (
    <div className="card bg-gray-100 w-60 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ">
      <figure className="px-3 pt-3">
        <img
          src={img}
          alt={title}
          className="rounded-xl object-cover w-full h-58 cursor-pointer"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-base">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-row gap-2 justify-end mt-2">
          <button className="btn btn-sm btn-primary">Comprar ahora</button>
          <button className="btn btn-sm btn-secondary">Añadir</button>
        </div>
      </div>
    </div>
  )
}
