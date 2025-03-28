import { FC, useState, useMemo, ChangeEvent } from "react";
import { DiscoveriesHeroBg } from "@/components/discoveries/discoveries-hero-bg";
import { Search } from "@/components/discoveries/search";
import { SearchItem } from "@/components/discoveries/search-item";
import markerLib from "@/lib/markerLib";

const Discoveries: FC = () => {
  const [search, setSearch] = useState<string>("");

  const filteredCities = useMemo(() => {
    if (!search) return null;
    const filteredLib = markerLib.filter((city) => city.id !== 1);
    return filteredLib.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]) as typeof markerLib | null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <main className="h-screen w-full flex bg-black overflow-hidden items-center justify-center flex-col">
      <DiscoveriesHeroBg className="[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]" />
      <div className="max-w-2xl w-full h-full items-center justify-center flex flex-col gap-4 ">
        <div className="w-full h-3/5 -mt-24 z-50 p-8 items-center justify-end flex flex-col gap-6">
          <h1 className="text-primary lg:text-6xl text-5xl font-secondary">
            IZIS DISCOVERIES
          </h1>
          <Search onChange={handleChange} value={search} />
        </div>
        <div className="flex h-2/5 flex-col items-center bg-black w-full justify-start p-6">
          <div className="overflow-y-scroll gap-4 flex flex-col items-center justify-start size-full scrollbar-hidden">
            {filteredCities?.map((city) => (
              <SearchItem
                key={city.id}
                coordinates={city.coordinates}
                id={city.id}
                name={city.name}
                img={city.img[0]}
                type={city.type}
                url={city.url}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Discoveries;
