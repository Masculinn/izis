import MapboxModalBg from "@/components/mapbox/mapbox-modal-bg";
import MotionText from "@/components/motion/motion-text";

export const About = () => {
  return (
    <section className="max-w-7xl mx-auto relative min-h-auto md:px-0 px-8 md:mt-16 mt-8 flex flex-col items-center justify-center">
      <div className="flex h-96 w-full flex-col items-center justify-center overflow-hidden absolute lg:max-w-full max-w-md md:-mt-24 -mt-[400px]">
        <MapboxModalBg
          className={`[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]`}
        />
      </div>
      <MotionText
        animation={{
          mode: ["filterBlurIn", "fadeUp"],
          transition: "linear",
        }}
        config={{
          duration: 0.24,
          mode: "words",
          delayLogic: "linear",
          space: 1,
        }}
        elementType={"h2"}
        wrapperClassName="text-6xl md:text-7xl tracking-tighter font-secondary md:pb-8 pb-6 text-center"
      >
        O nas
      </MotionText>
      <p className="pb-6 lg:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight text-center md:max-w-5xl">
        Nasza firma z powodzeniem funkcjonuje na rynku usług archeologicznych
        nieprzerwanie od roku 2000. W ciągu tych ponad dwóch dekad
        zgromadziliśmy bogate doświadczenie w realizacji zarówno niewielkich,
        lokalnych projektów, jak i skomplikowanych badań terenowych o zasięgu
        ogólnokrajowym. Dzięki wykwalifikowanemu zespołowi specjalistów – w
        skład którego wchodzą konserwatorzy zabytków, georadarowcy i
        dokumentaliści – jesteśmy w stanie kompleksowo zabezpieczyć każde
        stanowisko archeologiczne, wykonać pomiary geofizyczne, przeprowadzić
        prace wykopaliskowe oraz sporządzić szczegółowe raporty i dokumentację
        fotograficzną.
      </p>
      <p className="pb-6 lg:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight text-center md:max-w-5xl">
        Specjalizujemy się szczególnie w badaniach terenowych na północnej
        Lubelszczyźnie, Podlasiu oraz we wschodniej i północnej części Mazowsza.
        Regiony te, bogate w ślady osadnictwa od późnej epoki kamienia po
        średniowiecze, stwarzają doskonałe warunki do realizacji
        interdyscyplinarnych projektów badawczych. Na terenie północnej
        Lubelszczyzny skupiamy się głównie na stanowiskach neolitycznych i
        kulturze przeworskiej, na Podlasiu prowadzimy rozległe badania
        osadnictwa wczesnośredniowiecznego, z kolei wschodnie i północne
        Mazowsze to dla nas pole do eksploracji zamków obronnych i grodzisk z
        okresu średniowiecza.
      </p>
      <p className="pb-6 lg:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight text-center md:max-w-5xl">
        Dzięki ścisłej współpracy z uczelniami wyższymi oraz instytutami
        naukowymi zapewniamy najwyższy poziom merytoryczny prowadzonych prac, a
        także regularnie publikujemy wyniki naszych badań w renomowanych
        czasopismach archeologicznych. Jesteśmy otwarci na nowe wyzwania –
        zarówno w zakresie realizacji inwestycji liniowych{" "}
        {"(drogi, rurociągi)"}, jak i projektów badawczych. Naszym priorytetem
        jest łączenie rzetelnej metodyki wykopalisk z nowoczesnymi technikami
        analitycznymi, co pozwala nam dostarczać klientom kompleksowych,
        wiarygodnych danych o dziedzictwie kulturowym ich terenu.
      </p>
    </section>
  );
};
