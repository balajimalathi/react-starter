export default function TrustedBy() {
  return ( 
    <section className="container mx-auto flex max-w-6xl flex-col items-center justify-center py-14">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-6">
          <p className="text-muted-foreground">Trusted by top makeup brands and celebrities:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {["Lakme", "MAC Cosmetics", "Maybelline", "Kryolan", "L'Oreal"].map((brand) => (
            <div key={brand} className="flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
