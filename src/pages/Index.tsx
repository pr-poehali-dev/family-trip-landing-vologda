import Icon from "@/components/ui/icon";

const VOLOGDA_IMG = "https://cdn.poehali.dev/projects/aa906caa-3a27-45bc-aead-b9858701ad06/files/c6d4139b-f17c-413c-9401-2dea76f9db1f.jpg";
const APARTMENT_IMG = "https://cdn.poehali.dev/projects/aa906caa-3a27-45bc-aead-b9858701ad06/files/856d5565-0aaf-408e-a882-736a201c8e3c.jpg";
const ROAD_IMG = "https://cdn.poehali.dev/projects/aa906caa-3a27-45bc-aead-b9858701ad06/files/d22becdf-12a6-48ff-8e11-34e59154aee2.jpg";

const restaurants = [
  {
    name: "Соленый огурец",
    desc: "Ресторан вологодской кухни. Щи, пироги с рыбой, местные деликатесы в уютном историческом интерьере.",
    rating: "5.0",
    type: "Обед / ужин",
    url: "https://yandex.ru/maps/org/solenyy_ogurec/1097218659/",
    emoji: "🥒",
  },
  {
    name: "Гости",
    desc: "Ресторан с современной русской кухней и видом на набережную. Отличный выбор для семейного ужина.",
    rating: "5.0",
    type: "Ужин",
    url: "https://yandex.ru/maps/org/gosti/229187978753/",
    emoji: "🍽️",
  },
  {
    name: "Берёзка",
    desc: "Классический ресторан с домашней едой, борщом и кашами. Любимое место горожан уже десятки лет.",
    rating: "5.0",
    type: "Обед",
    url: "https://yandex.ru/maps/66/vologda/category/restaurant/184106390/?ll=39.891250%2C59.220494",
    emoji: "🌿",
  },
];

const shops = [
  {
    name: "Вологодское масло и кружево",
    desc: "Официальный фирменный магазин. Знаменитое вологодское масло, сыры и кружево ручной работы — лучшие сувениры из города.",
    emoji: "🧈",
    url: "https://yandex.ru/maps/66/vologda/",
  },
  {
    name: "Русский Север",
    desc: "Магазин сувениров с изделиями местных мастеров: береста, роспись, керамика и изделия из льна.",
    emoji: "🎁",
    url: "https://yandex.ru/maps/66/vologda/",
  },
  {
    name: "Рынок на Мира",
    desc: "Центральный городской рынок — свежие местные продукты, мёд, ягоды и домашние заготовки. Колорит настоящей Вологды.",
    emoji: "🛒",
    url: "https://yandex.ru/maps/66/vologda/",
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
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="bg-[#C8A96E] text-white rounded-2xl px-8 py-4">
              <div className="font-display text-3xl font-semibold">9 900 ₽</div>
              <div className="text-white/80 text-sm">с человека</div>
            </div>
            <a
              href="#price"
              className="border border-white/30 text-white backdrop-blur-sm rounded-2xl px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Записаться в тур →
            </a>
          </div>
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
                    href="https://yandex.ru/maps/66/vologda/"
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
                    Прогулка по набережной реки Вологды, знакомство с городом. Ужин в ресторане — рекомендуем «Соленый огурец» с вологодской кухней.
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
                  <h3 className="font-semibold text-xl mb-1">Экскурсия с гидом по Вологде</h3>
                  <p className="text-[#8C7B6B] text-sm">Утро · 3–4 часа</p>
                </div>
              </div>
              <p className="text-[#8C7B6B] leading-relaxed mb-4">
                Авторская экскурсия по историческому центру: Вологодский Кремль, Софийский собор, деревянные особняки XIX века, музей кружева и набережная. Гид расскажет живые истории о городе и его знаменитых жителях.
              </p>
              <a
                href="https://vologda-excursion.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3D5A4A] text-white rounded-xl px-5 py-2.5 text-sm hover:bg-[#2d4337] transition-colors"
              >
                <Icon name="ExternalLink" size={14} />
                Страница гида
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

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-display text-2xl mb-5">Местные магазины и сувениры</h3>
            <div className="space-y-4">
              {shops.map((shop) => (
                <a
                  key={shop.name}
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group block"
                >
                  <div className="text-2xl">{shop.emoji}</div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-[#3D5A4A] transition-colors">{shop.name}</h4>
                    <p className="text-[#8C7B6B] text-sm leading-relaxed">{shop.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
                  <Icon name="UtensilsCrossed" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Обед перед отъездом</h3>
                  <p className="text-[#8C7B6B] text-sm leading-relaxed mb-3">
                    Рекомендуем «Берёзку» — классика вологодской кухни, борщ и домашние пироги. Рейтинг 5.0, любимое место горожан.
                  </p>
                  <a
                    href="https://yandex.ru/maps/66/vologda/category/restaurant/184106390/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#3D5A4A] text-sm hover:underline"
                  >
                    <Icon name="ExternalLink" size={13} />
                    Найти на карте
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EDE0] flex items-center justify-center flex-shrink-0">
                  <Icon name="LogOut" size={20} className="text-[#C8A96E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Выселение и дорога домой</h3>
                  <p className="text-[#8C7B6B] text-sm leading-relaxed">
                    Выселение до 12:00. После обеда — выезд домой. Трасса М-8 обратно в Москву, в пути ~5–6 часов. Возвращаемся вечером с отличным настроением и полными сумками сувениров.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <img src={APARTMENT_IMG} alt="Апартаменты" className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/60 to-transparent flex items-end p-5">
                <div>
                  <div className="text-white font-semibold">Апарт отель на Ленина</div>
                  <div className="text-white/70 text-sm">Наши апартаменты</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЦЕНА */}
      <section id="price" className="py-20 px-6 md:px-16 bg-[#2A2016]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4">Стоимость участия</div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            9 900 ₽{" "}
            <span className="text-white/40 text-3xl md:text-4xl">с человека</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            В стоимость включены: апартаменты на 2 ночи, программа тура, подбор ресторанов и маршрут с гидом
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "Building2", title: "Апартаменты", desc: "2 ночи в «Апарт отель на Ленина» в центре города" },
              { icon: "Map", title: "Программа тура", desc: "Готовый маршрут по всем 3 дням с рекомендациями" },
              { icon: "Users", title: "Гид и рестораны", desc: "Экскурсия с гидом и отбор лучших заведений" },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                <Icon name={item.icon as "Building2" | "Map" | "Users"} size={24} className="text-[#C8A96E] mb-3" />
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
            <h3 className="font-display text-2xl text-white mb-6">Варианты оплаты</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { emoji: "💳", title: "Банковская карта", desc: "Оплата картой онлайн через безопасную форму" },
                { emoji: "📱", title: "СБП / QR", desc: "Перевод по номеру телефона или QR-коду" },
                { emoji: "🏦", title: "Перевод на счёт", desc: "Банковский перевод по реквизитам. Счёт по запросу" },
              ].map((pay) => (
                <div key={pay.title} className="bg-white/5 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-3">{pay.emoji}</div>
                  <h4 className="text-white font-semibold mb-1">{pay.title}</h4>
                  <p className="text-white/50 text-sm">{pay.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-[#C8A96E] hover:bg-[#b8956a] text-white rounded-2xl px-12 py-5 text-lg font-semibold transition-colors">
            Записаться в тур
          </button>
          <p className="text-white/30 text-sm mt-4">Нажимая кнопку, вы соглашаетесь с условиями тура</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-[#8C7B6B] text-sm border-t border-[#E8DDD0]">
        <p>Авторский тур в Вологду · 12–14 июня 2026</p>
      </footer>
    </div>
  );
}
