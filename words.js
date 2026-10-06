// =====================================================================
//  СЛОВАРЬ.  Чтобы добавить тему — скопируйте блок { id: ..., words: [...] }
//  и поставьте его после последней темы (через запятую).
//
//  Поля слова:
//    ro    — румынское слово (с диакритикой: ă â î ș ț)          [обязательно]
//    ru    — перевод                                              [обязательно]
//    pic   — картинка из эмодзи (можно 1–2 эмодзи)                [обязательно, если нет img]
//    tag   — подпись на картинке, напр. "+30°C"                   (необязательно)
//    img   — путь/URL картинки, напр. "img/ploaie.jpg" — заменяет эмодзи (необязательно)
//    tr    — транскрипция русскими буквами                        (необязательно)
//    note  — пояснение                                            (необязательно)
//    ex    — пример на румынском, exRu — его перевод              (необязательно)
//    grp   — группа похожих по картинке слов: в режимах с картинками
//            они не будут показаны как варианты друг для друга   (необязательно)
//    audio — путь к mp3 с произношением (иначе — синтез речи)     (необязательно)
// =====================================================================

window.TOPICS = [
  {
    id: 'vremea',
    name: 'Vremea',
    ru: 'Погода',
    words: [
      { ro: 'cald',              ru: 'тепло',                    pic: '🌤️', tag: '+22°C', tr: 'калд',
        ex: 'Astăzi este cald.',           exRu: 'Сегодня тепло.' },
      { ro: 'foarte cald',       ru: 'жарко',                    pic: '🥵',  tag: '+30°C', tr: 'фоарте калд',
        ex: 'Afară este foarte cald.',     exRu: 'На улице жарко.' },
      { ro: 'caniculă',          ru: 'очень жарко, зной',        pic: '🌡️🔥', tag: '+40°C', tr: 'каникулэ',
        ex: 'În iulie a fost caniculă.',   exRu: 'В июле была сильная жара.' },
      { ro: 'răcoare',           ru: 'прохладно',                pic: '🍂',  tag: '+12°C', tr: 'рэкоаре',
        ex: 'Seara este răcoare.',         exRu: 'Вечером прохладно.' },
      { ro: 'frig',              ru: 'холод',                    pic: '🧣',  tag: '+2°C',  tr: 'фриг', grp: 'cold',
        note: 'E frig — холодно (о погоде).',
        ex: 'Iarna este frig.',            exRu: 'Зимой холодно.' },
      { ro: 'rece',              ru: 'холодно, холодный',        pic: '🥶',  tr: 'рече', grp: 'cold',
        note: 'Прилагательное: apă rece — холодная вода.',
        ex: 'Apa este rece.',              exRu: 'Вода холодная.' },
      { ro: 'ger',               ru: 'мороз',                    pic: '❄️🌡️', tag: '−20°C', tr: 'джер',
        ex: 'Afară este ger.',             exRu: 'На улице мороз.' },
      { ro: 'vânt',              ru: 'ветер',                    pic: '🌬️', tr: 'вынт',
        ex: 'Bate vântul.',                exRu: 'Дует ветер.' },
      { ro: 'senin',             ru: 'ясно',                     pic: '☀️', tr: 'сенин',
        ex: 'Cerul este senin.',           exRu: 'Небо ясное.' },
      { ro: 'noros',             ru: 'облачно',                  pic: '☁️', tr: 'норос',
        ex: 'Astăzi este noros.',          exRu: 'Сегодня облачно.' },
      { ro: 'ploaie',            ru: 'дождь',                    pic: '🌧️', tr: 'плоайе', grp: 'rain',
        ex: 'Ploaia a încetat.',           exRu: 'Дождь прекратился.' },
      { ro: 'plouă',             ru: 'идёт дождь',               pic: '☔', tr: 'плоуэ', grp: 'rain',
        ex: 'Afară plouă.',                exRu: 'На улице идёт дождь.' },
      { ro: 'ploaie torențială', ru: 'ливень',                   pic: '🌧️💦', tr: 'плоайе торенциалэ', grp: 'rain',
        ex: 'A căzut o ploaie torențială.', exRu: 'Прошёл ливень.' },
      { ro: 'zăpadă',            ru: 'снег (лежит)',             pic: '⛄', tr: 'зэпадэ',
        ex: 'Este multă zăpadă.',          exRu: 'Много снега.' },
      { ro: 'ninsoare',          ru: 'снегопад',                 pic: '🌨️', tr: 'нинсоаре', grp: 'snow',
        ex: 'Mâine va fi ninsoare.',       exRu: 'Завтра будет снегопад.' },
      { ro: 'ninge',             ru: 'идёт снег',                pic: '❄️', tr: 'ниндже', grp: 'snow',
        ex: 'Afară ninge.',                exRu: 'На улице идёт снег.' },
      { ro: 'furtună',           ru: 'гроза, буря',              pic: '⛈️', tr: 'фуртунэ',
        ex: 'Vine o furtună.',             exRu: 'Надвигается гроза.' },
      { ro: 'tunet',             ru: 'гром',                     pic: '💥🔊', tr: 'тунет',
        ex: 'Se aude un tunet.',           exRu: 'Слышен гром.' },
      { ro: 'fulger',            ru: 'молния',                   pic: '⚡', tr: 'фулджер',
        ex: 'Un fulger a luminat cerul.',  exRu: 'Молния осветила небо.' },
      { ro: 'grindină',          ru: 'град',                     pic: '☁️🧊', tr: 'гриндинэ',
        ex: 'A căzut grindină.',           exRu: 'Выпал град.' },
      { ro: 'ceață',             ru: 'туман',                    pic: '🌫️', tr: 'чацэ',
        ex: 'Dimineața este ceață.',       exRu: 'Утром туман.' },
      { ro: 'lapoviță',          ru: 'мокрый снег с дождём',     pic: '🌧️❄️', tr: 'лаповицэ',
        ex: 'Afară cade lapoviță.',        exRu: 'На улице идёт мокрый снег.' },
      { ro: 'lunecos',           ru: 'скользко',                 pic: '⛸️', tr: 'лунекос',
        note: 'Также: alunecos.',
        ex: 'Drumul este lunecos.',        exRu: 'Дорога скользкая.' },
    ],
  },

  // { id: 'familia', name: 'Familia', ru: 'Семья', words: [ ... ] },
];
