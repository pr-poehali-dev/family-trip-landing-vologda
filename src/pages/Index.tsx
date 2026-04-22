import Icon from "@/components/ui/icon";

const VOLOGDA_IMG = "https://cdn.poehali.dev/projects/aa906caa-3a27-45bc-aead-b9858701ad06/files/c6d4139b-f17c-413c-9401-2dea76f9db1f.jpg";
const APARTMENT_IMG = "https://avatars.mds.yandex.net/get-travel-rooms/3748917/2a0000018a756b7ce9d4eca0c4778293a80f/L";
const ROAD_IMG = "https://cdn.poehali.dev/files/6ced479f-0686-45a3-befc-e3ae11fac665.jpg";

const restaurants = [
  {
    name: "Gagarin Gastro",
    desc: "Гастробар с современной авторской кухней в самом центре Вологды. Атмосферное место для обеда и ужина.",
    rating: "5.0",
    type: "Обед / ужин",
    url: "https://yandex.ru/maps/?text=Вологда+ул.Возрождения+27+Gagarin+gastro",
    emoji: "🚀",
  },
  {
    name: "Как по маслу",
    desc: "Уютное кафе с домашней едой и вологодскими специалитетами. Отличный выбор для семейного обеда.",
    rating: "5.0",
    type: "Обед / ужин",
    url: "https://yandex.ru/maps/?text=Вологда+ул.Мира+9+Как+по+маслу",
    emoji: "🧈",
  },
  {
    name: "Кофейня Мальцева",
    desc: "Камерная кофейня с авторскими напитками и десертами. Идеально для утреннего кофе или паузы между прогулками.",
    rating: "5.0",
    type: "Завтрак / кофе",
    url: "https://yandex.ru/maps/?text=Вологда+ул.Мальцева+18+Кофейня+Мальцева",
    emoji: "☕",
  },
];

const shops = [
  {
    name: "Вологодское масло и кружево",
    desc: "Официальный фирменный магазин. Знаменитое вологодское масло, сыры и кружево ручной работы — лучшие сувениры из города.",
    emoji: "🧈",
    url: "https://www.tourister.ru/world/europe/russia/city/vologda/tips/8382?ysclid=moaf0bb4l8890554395",
  },
  {
    name: "Вологодские продукты",
    desc: "Центральный городской рынок — свежие местные продукты, мёд, ягоды и домашние заготовки. Колорит настоящей Вологды.",
    emoji: "🛒",
    url: "https://www.tripadvisor.ru/Attraction_Review-g445048-d27824512-Reviews-Vologda_Products-Vologda_Vologda_Oblast_Northwestern_District.html",
  },
];

export default function Index() {
  return (
    <div className="font-body bg-[#FBF7F0] text-[#2A2016] min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={VOLOGDA_IMG} alt="Вологда" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-[#1a110a]/30 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-16 md:px-16 md:pb-24 max-w-4xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Icon name="MapPin" size={14} className="text-[#C8A96E]" />
            <span className="text-white/90 text-sm tracking-wide">Вологда · 12–14 июня 2026</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white leading-[0.9] mb-4">
            Авторский<br />
            <em className="text-[#C8A96E] not-italic">тур</em> в Вологду
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-lg mt-6 leading-relaxed">
            Три дня в старейшем городе Русского Севера. Кремль, деревянные особняки, вологодское кружево и тихие улицы вдоль реки.
          </p>

        </div>
      </section>

      {/* ДЕНЬ 1 */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-[#3D5A4A] text-white flex items-center justify-center font-display text-xl font-semibold">1</div>
          <div>
            <div className="text-[#8C7B6B] text-sm tracking-widest uppercase">Пятница</div>
            <h2 className="font-display text-4xl">12 июня — Выезд и заселение</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
                  <Icon name="Car" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Дорога на машине</h3>
                  <p className="text-[#8C7B6B] leading-relaxed">
                    Из Москвы до Вологды ~450 км по трассе М-8 «Холмогоры». В пути около{" "}
                    <strong className="text-[#2A2016]">5–6 часов</strong>. Рекомендуем выезжать утром, чтобы заехать пообедать по дороге в Ярославле.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
                  <Icon name="Home" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Заселение</h3>
                  <p className="text-[#8C7B6B] leading-relaxed">
                    Апартаменты <strong className="text-[#2A2016]">«Апарт отель на Ленина»</strong> — в самом центре города, пешая доступность до всех достопримечательностей. Уютные современные апартаменты с кухней.
                  </p>
                  <a
                    href="https://yandex.ru/maps/20/vologda/?text=улица+Ленина+9+Вологда"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#3D5A4A] text-sm mt-3 hover:underline"
                  >
                    <Icon name="ExternalLink" size={13} />
                    Посмотреть на карте
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
                  <Icon name="Sunset" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Вечер первого дня</h3>
                  <p className="text-[#8C7B6B] leading-relaxed">
                    Прогулка по набережной реки Вологды, знакомство с городом. Ужин в ресторане — рекомендуем <strong className="text-[#2A2016]">Dome1791</strong> на ул. Мира 9.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={ROAD_IMG} alt="Дорога в Вологду" className="w-full rounded-3xl object-cover aspect-[4/3]" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#2A2016]">
                  <Icon name="Navigation" size={16} className="text-[#C8A96E]" />
                  <span className="text-sm font-medium">Москва → Вологда</span>
                </div>
                <div className="text-right">
                  <div className="text-[#3D5A4A] font-semibold text-sm">~450 км</div>
                  <div className="text-[#8C7B6B] text-xs">5–6 часов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ДЕНЬ 2 */}
      <section className="py-20 px-6 md:px-16 bg-[#F5EDE0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#C8A96E] text-white flex items-center justify-center font-display text-xl font-semibold">2</div>
            <div>
              <div className="text-[#8C7B6B] text-sm tracking-widest uppercase">Суббота</div>
              <h2 className="font-display text-4xl">13 июня — Экскурсии и вкусный день</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 bg-white rounded-3xl p-7 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#3D5A4A]/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Compass" size={20} className="text-[#3D5A4A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Экскурсии по Вологде</h3>
                  <p className="text-[#8C7B6B] text-sm">Утро · 3–4 часа</p>
                </div>
              </div>
              <p className="text-[#8C7B6B] leading-relaxed mb-4">
                Авторская экскурсия по историческому центру: Вологодский Кремль, Софийский собор, деревянные особняки XIX века, музей кружева и набережная. Гид расскажет живые истории о городе и его знаменитых жителях.
              </p>
              <a
                href="https://experience.tripster.ru/attractions/Vologda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3D5A4A] text-white rounded-xl px-5 py-2.5 text-sm hover:bg-[#2d4337] transition-colors"
              >
                <Icon name="ExternalLink" size={14} />
                Экскурсии
              </a>
            </div>

            <div className="bg-[#3D5A4A] text-white rounded-3xl p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-3">🏰</div>
                <h3 className="font-semibold text-lg mb-2">Вологодский Кремль</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Главная достопримечательность города. Ансамбль XVI–XVII веков с Софийским собором и колокольней.
                </p>
              </div>
              <div className="mt-6 text-white/50 text-xs">Включено в экскурсию</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-display text-2xl mb-2">Рестораны для обеда и ужина</h3>
            <p className="text-[#8C7B6B]">Отобрали лучшие заведения с рейтингом 5.0 — проверенные местными жителями</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {restaurants.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{r.emoji}</div>
                  <div className="flex items-center gap-1 bg-[#FBF7F0] rounded-full px-3 py-1">
                    <Icon name="Star" size={12} className="text-[#C8A96E] fill-[#C8A96E]" />
                    <span className="text-sm font-semibold text-[#C8A96E]">{r.rating}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-[#3D5A4A] transition-colors">{r.name}</h4>
                <div className="text-xs text-[#C8A96E] font-medium mb-2 uppercase tracking-wide">{r.type}</div>
                <p className="text-[#8C7B6B] text-sm leading-relaxed">{r.desc}</p>
                <div className="flex items-center gap-1 text-[#3D5A4A] text-xs mt-4 group-hover:gap-2 transition-all">
                  <span>Открыть на карте</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ДЕНЬ 3 */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-[#2A2016] text-white flex items-center justify-center font-display text-xl font-semibold">3</div>
          <div>
            <div className="text-[#8C7B6B] text-sm tracking-widest uppercase">Воскресенье</div>
            <h2 className="font-display text-4xl">14 июня — Шоппинг и дорога домой</h2>
          </div>
        </div>

        {/* Магазины */}
        <div className="mb-12">
          <h3 className="font-display text-2xl mb-6">Местные магазины и сувениры</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {shops.map((shop) => (
              <a
                key={shop.name}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-3xl mt-0.5">{shop.emoji}</div>
                <div>
                  <h4 className="font-semibold text-base mb-1 group-hover:text-[#3D5A4A] transition-colors">{shop.name}</h4>
                  <p className="text-[#8C7B6B] text-sm leading-relaxed">{shop.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Рестораны */}
        <div className="mb-12">
          <h3 className="font-display text-2xl mb-6">Где поесть в последний день</h3>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
                  <Icon name="UtensilsCrossed" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Бар-музей Васи Ложкина</h4>
                  <p className="text-[#8C7B6B] text-xs">Обед перед отъездом</p>
                </div>
              </div>
              <p className="text-[#8C7B6B] text-sm leading-relaxed mb-4">
                Необычное место с авторской концепцией, арт-объектами и вкусной едой. Отличный финал поездки — запомнится надолго.
              </p>
              <a
                href="https://restaurantguru.ru/Barmuzei-Vasi-Lozhkina-Vologda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#3D5A4A] text-sm font-medium hover:underline"
              >
                <Icon name="ExternalLink" size={13} />
                Открыть страницу
              </a>
            </div>

            <div className="bg-[#3D5A4A] rounded-3xl p-7 shadow-sm text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Маруся</h4>
                  <p className="text-white/60 text-xs">Обратите внимание</p>
                </div>
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Стильный ресторан с современной русской кухней. Отличная атмосфера, интересное меню и хорошее вино — место, которое стоит посетить хотя бы ради впечатления.
              </p>
              <a
                href="https://marusyavologda.ru/restaurant?ysclid=moafqadmm873043221"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C8A96E] text-sm font-medium hover:underline"
              >
                <Icon name="ExternalLink" size={13} />
                Сайт ресторана
              </a>
            </div>

          </div>
        </div>

        {/* Дорога домой */}
        <div className="bg-white rounded-3xl p-7 shadow-sm flex items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
            <Icon name="LogOut" size={22} className="text-[#C8A96E]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Выселение и дорога домой</h3>
            <p className="text-[#8C7B6B] leading-relaxed">
              Выселение до 12:00. После обеда — выезд домой. Трасса М-8 обратно в Москву, в пути ~5–6 часов. Возвращаемся вечером с отличным настроением и полными сумками сувениров.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-[#8C7B6B] text-sm border-t border-[#E8DDD0]">
        <p>Авторский тур в Вологду · 12–14 июня 2026</p>
      </footer>
    </div>
  );
}