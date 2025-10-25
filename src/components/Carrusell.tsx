export default function Carrusell() {
  return (
    <div
      className="hero h-90"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2018/04/10/18/21/seafood-3308292_1280.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Snacks del Mar</h1>
          <p className="mb-5 text-3xl">
            sabor, frescura y pasión servidos en cada entrega..
          </p>
         
        </div>
      </div>
    </div>
  );
}
