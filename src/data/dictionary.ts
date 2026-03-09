import fullTextRaw from "../../message.txt?raw";

export interface WordEntry {
  id: string;
  word: string;
  shortDefinition: string;
  fullDefinition: string;
  example: string;
  modernEquivalent: string;
  firstLetter: string;
}

export const dictionaryData: WordEntry[] = [
  {
    id: "zertsalo",
    word: "Зерцало",
    shortDefinition: "Зеркало; образец для подражания",
    fullDefinition: "Слово «зерцало» в XVIII веке имело двойное значение. Во-первых, это буквально зеркало. Во-вторых, в переносном смысле — образец, идеал. В названии «Юности честное зерцало» подразумевается второе значение: книга является «зеркалом» правильного поведения для молодых людей.",
    example: "«Юности честное зерцало, или Показание к житейскому обхождению»",
    modernEquivalent: "Зеркало, образец, пример для подражания",
    firstLetter: "З",
  },
  {
    id: "otrok",
    word: "Отрок",
    shortDefinition: "Юноша, молодой человек",
    fullDefinition: "В языке XVIII века «отрок» обозначал молодого человека в возрасте от отрочества до юности. Слово имело нейтральную окраску и использовалось в книжной речи. В древнерусском языке так называли также слугу или младшего дружинника при князе.",
    example: "«Отрок должен быть весьма учтив и вежлив, как в словах, так и в делах»",
    modernEquivalent: "Подросток, юноша",
    firstLetter: "О",
  },
  {
    id: "uchtivstvo",
    word: "Учтивство",
    shortDefinition: "Вежливость, хорошие манеры",
    fullDefinition: "«Учтивство» — одно из ключевых понятий этикетной культуры XVIII века. Означало не просто вежливость, а целый комплекс поведенческих норм: умение вести себя в обществе, выражать уважение к старшим, следовать правилам приличия.",
    example: "«Младые отроки должны между собою говорить иностранными языки, а особливо с теми, кои учтивству обучены»",
    modernEquivalent: "Вежливость, воспитанность, этикет",
    firstLetter: "У",
  },
  {
    id: "blagonravie",
    word: "Благонравие",
    shortDefinition: "Хороший нрав, добродетельное поведение",
    fullDefinition: "«Благонравие» — составное слово из «благо» и «нрав», обозначающее совокупность положительных моральных качеств. Включало послушание, скромность, трудолюбие, уважение к старшим. Противопоставлялось «злонравию».",
    example: "«Не прилично отроку уподоблять себя тем, кои благонравия не имеют»",
    modernEquivalent: "Хорошее воспитание, нравственность",
    firstLetter: "Б",
  },
  {
    id: "prazdnoslovie",
    word: "Празднословие",
    shortDefinition: "Пустая болтовня, бессмысленные разговоры",
    fullDefinition: "«Празднословие» — от «праздный» (пустой) и «слово». Означает бесполезную болтовню. В XVIII веке это качество осуждалось как признак лености ума. Считалось, что благовоспитанный человек должен говорить кратко и по делу.",
    example: "«Когда кто говорит, не надлежит перебивать, но дождаться, пока тот выговорит, а празднословия убегать»",
    modernEquivalent: "Пустая болтовня, трёп",
    firstLetter: "П",
  },
  {
    id: "derzost",
    word: "Дерзость",
    shortDefinition: "Непочтительная смелость, наглость",
    fullDefinition: "В XVIII веке «дерзость» имела более сильный негативный оттенок, чем сегодня. Это было нарушение сословной иерархии, вызывающее поведение младшего по отношению к старшему. Считалась серьёзным недостатком воспитания.",
    example: "«Отнюдь не подобает дерзостью и грубостью себя обнаруживать»",
    modernEquivalent: "Наглость, хамство",
    firstLetter: "Д",
  },
  {
    id: "chinno",
    word: "Чинно",
    shortDefinition: "Степенно, с соблюдением приличий",
    fullDefinition: "Наречие «чинно» происходит от слова «чин» — порядок, установленный обычай. Означает поведение в соответствии с нормами, степенно и с достоинством. Идеал XVIII века: сидеть прямо, говорить размеренно, двигаться неторопливо.",
    example: "«За столом сидеть чинно и смотреть в свою тарелку»",
    modernEquivalent: "Прилично, степенно, с достоинством",
    firstLetter: "Ч",
  },
  {
    id: "obkhozhdenie",
    word: "Обхождение",
    shortDefinition: "Манера общения, поведение в обществе",
    fullDefinition: "«Обхождение» — ключевой термин этикетных наставлений XVIII века. Обозначает комплекс навыков общения: как приветствовать, разговаривать, вести себя за столом. «Житейское обхождение» — светские манеры, искусство общения.",
    example: "«Юности честное зерцало, или Показание к житейскому обхождению»",
    modernEquivalent: "Манеры, общение, поведение",
    firstLetter: "О",
  },
  {
    id: "nepristojnost",
    word: "Непристойность",
    shortDefinition: "Нарушение приличий, неподобающее поведение",
    fullDefinition: "В XVIII веке «непристойность» имела более широкое значение: любое поведение, не соответствующее нормам — громкий смех, неопрятность, невежливость. Непристойным считалось всё, что «не пристоит» воспитанному человеку.",
    example: "«Непристойно руками или ногами по столу стучать»",
    modernEquivalent: "Неприличие, бестактность",
    firstLetter: "Н",
  },
  {
    id: "dobrodetel",
    word: "Добродетель",
    shortDefinition: "Положительное моральное качество",
    fullDefinition: "«Добродетель» — одно из центральных понятий этической мысли XVIII века. Буквально — «делание добра». Включало честность, милосердие, смирение, трудолюбие. Противопоставлялась «пороку» и считалась главной целью воспитания.",
    example: "«Младый отрок должен быть приучен к добродетели»",
    modernEquivalent: "Нравственность, моральное качество",
    firstLetter: "Д",
  },
  {
    id: "pochtenie",
    word: "Почтение",
    shortDefinition: "Глубокое уважение, почёт",
    fullDefinition: "«Почтение» в XVIII веке — форма уважения, обязательная для младших. Выражалось через поклоны, снятие шляпы, формулы обращения. Отсутствие почтения расценивалось как серьёзное нарушение норм.",
    example: "«Дети должны отца и мать в великой почести содержать»",
    modernEquivalent: "Уважение, почёт",
    firstLetter: "П",
  },
  {
    id: "smirenie",
    word: "Смирение",
    shortDefinition: "Кротость, отсутствие гордыни",
    fullDefinition: "«Смирение» — христианская добродетель, высоко ценимая в XVIII веке. Означало сознательный отказ от гордыни, умение принимать замечания старших, скромность в поведении и речах.",
    example: "«Отрок должен являть смирение пред старшими и не возноситься»",
    modernEquivalent: "Скромность, кротость",
    firstLetter: "С",
  },
  {
    id: "naipache",
    word: "Наипаче",
    shortDefinition: "Прежде всего, особенно",
    fullDefinition: "Наречие «наипаче» широко употреблялось в книжной и деловой речи XVIII века. Обозначает усиление: «прежде всего», «особенно», «в особенности».",
    example: "«Наипаче всего должны дети отца и матерь в великой чести содержать»",
    modernEquivalent: "Прежде всего, особенно",
    firstLetter: "Н",
  },
  {
    id: "pazh",
    word: "Паж",
    shortDefinition: "Юный слуга или придворный помощник",
    fullDefinition: "«Паж» — мальчик или юноша при дворе или в богатом доме, выполнявший поручения и сопровождавший старших. В XVIII веке слово обозначало младшего служителя благородного происхождения.",
    example: "«…подобно как паж некоторый или слуга»",
    modernEquivalent: "Юный слуга, придворный помощник",
    firstLetter: "П",
  },
  {
    id: "chelyadinets",
    word: "Челядинец",
    shortDefinition: "Домашний слуга, прислуга",
    fullDefinition: "«Челядинец» — человек из домашней прислуги, служивший в доме. Слово употреблялось в значении «слуга», «домочадец из челяди».",
    example: "«…от челядинцев просительным образом требовать»",
    modernEquivalent: "Слуга, домашняя прислуга",
    firstLetter: "Ч",
  },
  {
    id: "prekoslovit",
    word: "Прекословить",
    shortDefinition: "Возражать, перечить",
    fullDefinition: "Глагол «прекословить» означает спорить, возражать старшим или равным, отвечать наперекор. В этикетных наставлениях XVIII века такое поведение считалось неприличным.",
    example: "«…и не прекословить…»",
    modernEquivalent: "Возражать, перечить, спорить",
    firstLetter: "П",
  },
  {
    id: "obinyaki",
    word: "Обиняки",
    shortDefinition: "Намёки, иносказание",
    fullDefinition: "«Обиняки» — старинное слово со значением «намёки», «уклончивые выражения», «иносказание». Часто употреблялось в форме «говорить обиняками».",
    example: "«…обиняками говори…»",
    modernEquivalent: "Намёки, иносказание",
    firstLetter: "О",
  },
  {
    id: "prazden",
    word: "Празден",
    shortDefinition: "Праздный, без дела",
    fullDefinition: "Прилагательное «празден» — книжная форма слова «праздный», означающего безделье, отсутствие занятий. В морализаторских текстах обозначало порицаемое состояние.",
    example: "«…празден и без дела отнюдь не бывай…»",
    modernEquivalent: "Бездельный, праздный",
    firstLetter: "П",
  },
  {
    id: "chuzhelozhstvo",
    word: "Чужеложство",
    shortDefinition: "Прелюбодеяние, супружеская измена",
    fullDefinition: "«Чужеложство» — старинный церковно-книжный термин, означающий супружескую неверность. В нравоучительных текстах рассматривалось как тяжкий грех.",
    example: "«От клятвы чужеложства (блуда)…»",
    modernEquivalent: "Прелюбодеяние, измена",
    firstLetter: "Ч",
  },
  {
    id: "shlyahetstvo",
    word: "Шляхетство",
    shortDefinition: "Дворянство, благородное сословие",
    fullDefinition: "«Шляхетство» — старинное обозначение дворянского сословия, прежде всего по польско-литовской традиции. В XVIII веке слово употреблялось в книжной речи.",
    example: "«…не высокой род приводит его в шляхетство…»",
    modernEquivalent: "Дворянство, благородное сословие",
    firstLetter: "Ш",
  },
  {
    id: "shlyahtich",
    word: "Шляхтич",
    shortDefinition: "Дворянин, благородный человек",
    fullDefinition: "«Шляхтич» — представитель шляхты, дворянского сословия. В русском языке XVIII века слово встречается в текстах, связанных с этикетом и воспитанием.",
    example: "«Молодой шляхтич, или дворянин…»",
    modernEquivalent: "Дворянин, аристократ",
    firstLetter: "Ш",
  },
  {
    id: "ekzertcitsiya",
    word: "Экзерциция",
    shortDefinition: "Упражнение, тренировка",
    fullDefinition: "«Экзерциция» — заимствованное слово (от лат. exercitio), означающее упражнение или обучение практическим навыкам. В XVIII веке употреблялось в военном и светском контексте.",
    example: "«…если в экзерциции (в обучении) своей совершенен…»",
    modernEquivalent: "Упражнение, тренировка",
    firstLetter: "Э",
  },
  {
    id: "shpazhny",
    word: "Шпажный",
    shortDefinition: "Относящийся к шпаге",
    fullDefinition: "Прилагательное «шпажный» связано с владением шпагой — дворянским видом оружия и искусства фехтования. В текстах XVIII века упоминалось как часть воспитания.",
    example: "«…в шпажной битве…»",
    modernEquivalent: "Фехтовальный, относящийся к шпаге",
    firstLetter: "Ш",
  },
  {
    id: "mladyi",
    word: "Младый",
    shortDefinition: "Молодой, юный",
    fullDefinition: "«Младый» — книжная и старинная форма слова «молодой». Часто встречается в религиозных и нравоучительных текстах.",
    example: "«Младый отрок должен быть весьма учтив…»",
    modernEquivalent: "Молодой, юный",
    firstLetter: "М",
  },
  {
    id: "pred",
    word: "Пред",
    shortDefinition: "Перед, напротив",
    fullDefinition: "Предлог «пред» — старинная и книжная форма современного «перед». Употребляется в значении «в присутствии», «напротив» или «до».",
    example: "«…а пред ними не вздевать…»",
    modernEquivalent: "Перед",
    firstLetter: "П",
  },
  {
    id: "vzdevat",
    word: "Вздевать",
    shortDefinition: "Надевать, поднимать",
    fullDefinition: "Глагол «вздевать» в старинной речи означал «надевать» (например, шляпу) или «поднимать вверх».",
    example: "«…а пред ними не вздевать…»",
    modernEquivalent: "Надевать, поднимать",
    firstLetter: "В",
  },
  {
    id: "onyx",
    word: "Оных",
    shortDefinition: "Их, тех",
    fullDefinition: "Местоимение «оных» — родительный/винительный падеж от «оный». Использовалось в книжной речи со значением «их», «тех».",
    example: "«…прежде оных не заседать…»",
    modernEquivalent: "Их, тех",
    firstLetter: "О",
  },
  {
    id: "potayennym",
    word: "Потаенным",
    shortDefinition: "Тайным образом, скрытно",
    fullDefinition: "Слово «потаенным» — форма от «потаенный», означает «скрытый, тайный». В тексте — «скрытно, незаметно».",
    example: "«…но всё потаенным образом…»",
    modernEquivalent: "Тайным образом, скрытно",
    firstLetter: "П",
  },
  {
    id: "branit",
    word: "Бранить",
    shortDefinition: "Ругать, поносить",
    fullDefinition: "Глагол «бранить» означает «ругать», «поносить», «обзывать». В наставлениях осуждалось как невежливое поведение.",
    example: "«…никого бранить или поносительными словами порицать…»",
    modernEquivalent: "Ругать, поносить",
    firstLetter: "Б",
  },
  {
    id: "sumasbrody",
    word: "Сумасброды",
    shortDefinition: "Безрассудные люди, шалуны",
    fullDefinition: "«Сумасброд» — человек несдержанный, беспорядочный, безрассудный. В тексте употребляется как порицаемая характеристика поведения.",
    example: "«…не как бы сумасброды…»",
    modernEquivalent: "Безрассудные, шалуны",
    firstLetter: "С",
  },
  {
    id: "zador",
    word: "Задор",
    shortDefinition: "Запальчивость, вспыльчивость",
    fullDefinition: "Слово «задор» означало горячность, раздражённость, склонность говорить резко.",
    example: "«…не с сердца, или с задору говорить…»",
    modernEquivalent: "Запальчивость, вспыльчивость",
    firstLetter: "З",
  },
  {
    id: "obvykli",
    word: "Обвыкли",
    shortDefinition: "Привыкли",
    fullDefinition: "Глагол «обвыкнуть» — старинная форма «привыкнуть», «приобрести привычку».",
    example: "«…как некоторые народы ныне обвыкли…»",
    modernEquivalent: "Привыкли",
    firstLetter: "О",
  },
  {
    id: "kolobrodit",
    word: "Колобродить",
    shortDefinition: "Суетиться, беспорядочно двигаться",
    fullDefinition: "Глагол «колобродить» означает «шуметь, суетиться, беспорядочно двигаться».",
    example: "«…руками или ногами по столу везде колобродить…»",
    modernEquivalent: "Суетиться, беспорядочно двигаться",
    firstLetter: "К",
  },
  {
    id: "izbochenyas",
    word: "Избоченясь",
    shortDefinition: "Наклонившись набок, криво",
    fullDefinition: "Наречие «избоченясь» означает «криво, на бок, перекосившись». Употреблялось для описания неподобающей осанки.",
    example: "«…а не избоченясь сидеть…»",
    modernEquivalent: "Криво, на бок",
    firstLetter: "И",
  },
  {
    id: "urazumel",
    word: "Уразумел",
    shortDefinition: "Понял, осознал",
    fullDefinition: "Глагол «уразуметь» — книжная форма со значением «понять», «осознать».",
    example: "«…я уразумел, государь…»",
    modernEquivalent: "Понял, осознал",
    firstLetter: "У",
  },
  {
    id: "mnogazhdy",
    word: "Многажды",
    shortDefinition: "Много раз, неоднократно",
    fullDefinition: "Наречие «многажды» — старинная форма «много раз», «неоднократно».",
    example: "«…а многажды назад не бегать…»",
    modernEquivalent: "Много раз, неоднократно",
    firstLetter: "М",
  },
  {
    id: "chine",
    word: "Чине",
    shortDefinition: "В чине, по порядку",
    fullDefinition: "Слово «чине» — форма от «чин», означающая порядок или установленный уклад. В контексте — «по чину», «по порядку».",
    example: "«…о духовных вещах и о чине их…»",
    modernEquivalent: "Порядке, чине",
    firstLetter: "Ч",
  },
  {
    id: "onoe",
    word: "Оное",
    shortDefinition: "Это, то",
    fullDefinition: "Местоимение «оное» — книжная форма со значением «это», «то».",
    example: "«…и оное они должни учинить…»",
    modernEquivalent: "Это, то",
    firstLetter: "О",
  },
  {
    id: "onye",
    word: "Оные",
    shortDefinition: "Те, они",
    fullDefinition: "Местоимение «оные» — книжная форма множественного числа со значением «те», «они».",
    example: "«…если оные прилежны…»",
    modernEquivalent: "Те, они",
    firstLetter: "О",
  },
  {
    id: "poverennoe",
    word: "Поверено",
    shortDefinition: "Доверено",
    fullDefinition: "Причастие «поверено» означает «доверено», «поручено». В тексте — о доверенной информации.",
    example: "«…на весь свет разглашают, что им поверено было…»",
    modernEquivalent: "Доверено, поручено",
    firstLetter: "П",
  },
  {
    id: "chervotochina",
    word: "Червоточины",
    shortDefinition: "Дырочки, повреждения от червей",
    fullDefinition: "«Червоточина» — повреждение в дереве или теле, оставленное червями. В тексте образно — о разрушении и тлении.",
    example: "«…кроме дряхлого тела и червоточины…»",
    modernEquivalent: "Повреждения от червей, тление",
    firstLetter: "Ч",
  },
  {
    id: "tuchno",
    word: "Тучно",
    shortDefinition: "Толсто, упитанно",
    fullDefinition: "Наречие «тучно» означает «пышно, полно, избыточно». В тексте — «разжиревшее тело».",
    example: "«…которое с лености тучно бывает…»",
    modernEquivalent: "Толсто, упитанно",
    firstLetter: "Т",
  },
  {
    id: "sedoka",
    word: "Седока",
    shortDefinition: "Всадника",
    fullDefinition: "«Седок» — всадник, человек, едущий верхом. Форма «седока» — родительный падеж.",
    example: "«…конь учиняет седока прилежна…»",
    modernEquivalent: "Всадника",
    firstLetter: "С",
  },
  {
    id: "igumen",
    word: "Игумен",
    shortDefinition: "Настоятель монастыря",
    fullDefinition: "«Игумен» — глава монастыря, настоятель, духовный руководитель обители.",
    example: "«…какoв игумен, такова и братия…»",
    modernEquivalent: "Настоятель монастыря",
    firstLetter: "И",
  },
  {
    id: "onyi",
    word: "Оный",
    shortDefinition: "Тот, этот",
    fullDefinition: "Местоимение «оный» — книжная форма со значением «тот», «этот».",
    example: "«…оный имеет по правде тому подражать…»",
    modernEquivalent: "Тот, этот",
    firstLetter: "О",
  },
  {
    id: "kamora",
    word: "Камора",
    shortDefinition: "Комната, каморка",
    fullDefinition: "«Камора» — старинное слово, означающее небольшую комнату или помещение.",
    example: "«…как светило в темном месте или каморе…»",
    modernEquivalent: "Комната, каморка",
    firstLetter: "К",
  },
];

export interface TextPart {
  text: string;
  wordId?: string;
}

export interface ReadingFragment {
  id: string;
  title: string;
  parts?: TextPart[];
  text?: string;
  glossary?: Record<string, string>;
}

const fullTextGlossary: Record<string, string> = {
  "наипаче": "naipache",
  "паж": "pazh",
  "челядинцев": "chelyadinets",
  "челядинцы": "chelyadinets",
  "прекословить": "prekoslovit",
  "обиняками": "obinyaki",
  "празден": "prazden",
  "чужеложства": "chuzhelozhstvo",
  "шляхетство": "shlyahetstvo",
  "шляхтич": "shlyahtich",
  "шляхтича": "shlyahtich",
  "экзерциции": "ekzertcitsiya",
  "шпажной": "shpazhny",
  "младый": "mladyi",
  "младые": "mladyi",
  "отрок": "otrok",
  "отроки": "otrok",
  "почтением": "pochtenie",
  "почтении": "pochtenie",
  "учтиво": "uchtivstvo",
  "учтивости": "uchtivstvo",
  "смирением": "smirenie",
  "смиренные": "smirenie",
  "обхождению": "obkhozhdenie",
  "пред": "pred",
  "вздевать": "vzdevat",
  "оных": "onyx",
  "потаенным": "potayennym",
  "бранить": "branit",
  "сумасброды": "sumasbrody",
  "задору": "zador",
  "обвыкли": "obvykli",
  "колобродить": "kolobrodit",
  "избоченясь": "izbochenyas",
  "уразумел": "urazumel",
  "многажды": "mnogazhdy",
  "чине": "chine",
  "оное": "onoe",
  "оные": "onye",
  "поверено": "poverennoe",
  "червоточины": "chervotochina",
  "тучно": "tuchno",
  "седока": "sedoka",
  "игумен": "igumen",
  "оный": "onyi",
  "каморе": "kamora",
};

const fullTextLines = fullTextRaw.split(/\r?\n/);
const sectionHeadingLines = [64, 67, 74, 99, 119];

export const fullTextSections: ReadingFragment[] = (() => {
  const sections: ReadingFragment[] = [];
  const getLine = (lineNumber: number) => (fullTextLines[lineNumber - 1] ?? "").trim();

  const initialEnd = sectionHeadingLines[0] - 1;
  const initialText = fullTextLines.slice(0, initialEnd).join("\n").trim();
  if (initialText) {
    sections.push({
      id: "fragment-full-1",
      title: "Наставления (1–63)",
      text: initialText,
      glossary: fullTextGlossary,
    });
  }

  sectionHeadingLines.forEach((lineNumber, index) => {
    const title = getLine(lineNumber) || `Раздел ${index + 2}`;
    const start = lineNumber + 1;
    const end = (sectionHeadingLines[index + 1] ?? (fullTextLines.length + 1)) - 1;
    const text = fullTextLines.slice(start - 1, end).join("\n").trim();
    if (!text) return;
    sections.push({
      id: `fragment-full-${index + 2}`,
      title,
      text,
      glossary: fullTextGlossary,
    });
  });

  return sections;
})();

export const readingContent: ReadingFragment[] = [
  {
    id: "fragment-1",
    title: "О почитании родителей",
    parts: [
      { text: "В первых, наипаче всего должны дети отца и мать в великой " },
      { text: "почтении", wordId: "pochtenie" },
      { text: " содержать. И когда от родителей что им приказано бывает, всегда шляпу в руках держать, и пред ними не надевать. И возле них не садиться, и прежде оных не заседать, при них в окно всем телом не выглядывать, но всё потаённо, с великим " },
      { text: "учтивством", wordId: "uchtivstvo" },
      { text: " и " },
      { text: "смирением", wordId: "smirenie" },
      { text: " себя вести." },
    ],
  },
  {
    id: "fragment-2",
    title: "О поведении младого отрока",
    parts: [
      { text: "Младый " },
      { text: "отрок", wordId: "otrok" },
      { text: " должен быть весьма учтив и вежлив, как в словах, так и в делах. Ибо кто в юности своей к " },
      { text: "добродетели", wordId: "dobrodetel" },
      { text: " и " },
      { text: "благонравию", wordId: "blagonravie" },
      { text: " не приучится, тот на старость свою ничего того не научится. И для того " },
      { text: "дерзости", wordId: "derzost" },
      { text: " отнюдь не надлежит себе допускать." },
    ],
  },
  {
    id: "fragment-3",
    title: "О правилах обхождения за столом",
    parts: [
      { text: "За столом сидеть " },
      { text: "чинно", wordId: "chinno" },
      { text: " и смотреть в свою тарелку, вилками и ножиком по тарелкам не стучать и не чавкать, как свиньи. " },
      { text: "Непристойно", wordId: "nepristojnost" },
      { text: " руками или ногами по столу стучать, перстом по блюду не водить и не облизывать. Между тем когда кто говорит, не надлежит перебивать, но дождаться, пока тот выговорит, а " },
      { text: "празднословия", wordId: "prazdnoslovie" },
      { text: " убегать." },
    ],
  },
  {
    id: "fragment-4",
    title: "О житейском обхождении",
    parts: [
      { text: "Сие " },
      { text: "зерцало", wordId: "zertsalo" },
      { text: " есть показание к житейскому " },
      { text: "обхождению", wordId: "obkhozhdenie" },
      { text: ", собранное от разных авторов. Младые отроки, ежели возможно, должны сии правила часто прочитывать, дабы привыкли к доброму " },
      { text: "обхождению", wordId: "obkhozhdenie" },
      { text: " и ко всякой " },
      { text: "учтивости", wordId: "uchtivstvo" },
      { text: "." },
    ],
  },
];

export function getWordById(id: string): WordEntry | undefined {
  return dictionaryData.find((w) => w.id === id);
}

export function getUniqueLetters(): string[] {
  const letters = new Set(dictionaryData.map((w) => w.firstLetter));
  return Array.from(letters).sort();
}
