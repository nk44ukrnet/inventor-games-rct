import Navigation from "../Navigation/Navigation";

//images
import redCircle from "../../img/red_circle.png"
import genaTop from "../../img/gena_back_top.png"
import genaBody from "../../img/gena_back.png"
import genaFoot from "../../img/gena_front.png"
import yellowLine from "../../img/line.png"
import blueElement from "../../img/U_element.png"
import card1 from "../../img/card1.png"
import card2 from "../../img/card2.png"
import card3 from "../../img/card3.png"
import playStore from "../../img/ggl.png"
import appStore from "../../img/ios.png"
import card3DDesktop from "../../img/three_3.png"
import card3DMobile1 from "../../img/3d_card1.png"
import card3DMobile2 from "../../img/3d_card2.png"
import card3DMobile3 from "../../img/3d_card3.png"

import './FrontPage.css'
import Footer from "../Footer/Footer";

const downloadGOOGLE = 'https://play.google.com/store/apps/details?id=com.inventor_ar.game&hl=en',
    downloadAPPLE = 'https://itunes.apple.com/us/app/inventor-game/id1446889877';

export default function FrontPage() {
    return (
        <div className="front-page">
            <div className="red-circle template-size">
                <img src={redCircle} alt="red circle"/>
            </div>
            <Navigation/>
            <div className="game-preview content-size">
                <p className="game-preview__text">
                    Унікальна карткова гра з доповненою реальністю
                </p>
            </div>
            <div className="gena-pre-title content-size">
                <div className="gena-pre-title__wrapper">
                    <div className="gena-pre-title__container">
                        <div className="gena-pre-title__head">
                            <img src={genaTop} alt="Decorative element head"/>
                        </div>
                        <div className="gena-pre-title__body">
                            <img src={genaBody} alt="Decorative element body"/>
                        </div>
                        <div className="gena-pre-title__legs">
                            <img src={genaFoot} alt="Decorative element foot"/>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="page-title content-size">INVENTOR GAME</h1>
            <div className="after-title content-size">
                <img src={blueElement} className="after-title__blue-element" alt="Blue element"/>
                <div className="after-title__yellow-line">
                    <div className="after-title__yellow-line_content">
                        <img src={yellowLine} alt="Yellow element"/>
                    </div>
                </div>
                <p className="after-title__text">
                    Завантаж додаток,
                    оживи героя
                </p>
            </div>
            <div className="become-part content-size">
                <p className="become-part__text">
                    <span>Стань частиною
                        дивовижної історії</span>
                </p>
            </div>
            <section className="collect-cards content-size" id="cards">
                <h2 className="collect-cards__heading heading">Збери усі 28 карток</h2>
                <div className="collect-cards__container">
                    <div className="collect-cards__card">
                        <h3 className="collect-cards__title font-medium heading">8 героїв</h3>
                        <div className="collect-cards__picture">
                            <img src={card1} alt="Card" className="collect-cards__img"/>
                        </div>
                    </div>
                    <div className="collect-cards__card">
                        <h3 className="collect-cards__title font-medium heading">12 вчених</h3>
                        <div className="collect-cards__picture">
                            <img src={card2} alt="Card" className="collect-cards__img"/>
                        </div>
                    </div>
                    <div className="collect-cards__card">
                        <h3 className="collect-cards__title font-medium heading">8 проблем</h3>
                        <div className="collect-cards__picture">
                            <img src={card3} alt="Card" className="collect-cards__img"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="download-app content-size" id="app-download">
                <h2 className="download-app__heading heading">
                    Завантажуй додаток із
                    доповненою реальністю
                </h2>
                <div className="download-app__btns">
                    <a href={downloadGOOGLE} target="_blank" className="download-app__btn">
                        <img src={playStore} alt="Goolge Play"/>
                    </a>
                    <a href={downloadAPPLE} target="_blank" className="download-app__btn">
                        <img src={appStore} alt="App Store"/>
                    </a>
                </div>
            </div>
            <div className="cards-steps content-size">
                <div className="cards-steps__desktop">
                    <img src={card3DDesktop} alt="cards"/>
                </div>
                <div className="cards-steps__mobile">
                    <figure>
                        <img src={card3DMobile1} alt="card 1"/>
                        <figcaption className="heading">
                            скануй картки з героями
                        </figcaption>
                    </figure>
                    <figure><img src={card3DMobile2} alt="card 2"/>
                        <figcaption className="heading">
                            знаходь героїв у додатку
                        </figcaption>
                    </figure>
                    <figure><img src={card3DMobile3} alt="card 3"/>
                        <figcaption className="heading">
                            фарбуй героїв на свій смак
                        </figcaption>
                    </figure>
                </div>
            </div>
            <section className="story content-size" id="history">
                <div className="story__wrapper">
                    <h2 className="story__heading heading">Стань частиною дивовижної історії</h2>
                    <p className="story__text story__text_1">
                        Йшов 2198 рік за нашим часом або 5 рік нового часу – часу без Інтернету. Дехто вважав, що настав
                        «час звільнення», хтось казав, що це «час повернення до основ», інші дотримувалися думки, що
                        розвиток людства зупинився. Безперечною була тільки відсутність Інтернету. Ніхто і досі не
                        розуміє, як всесвітня мережа, що мала здатність відновлювати, лагодити та вдосконалювати сама
                        себе, зникла.
                    </p>
                    <p className="story__text story__text_2">
                        На той час життя людей цілком залежало від неї. Все почалось з невеликих перешкод при передачі
                        даних: спочатку – між містами, потім – між країнами, а далі – між континентами. На момент
                        виникнення перших проблем з мережею не було жодного фахівця, який міг зрозуміти, як виправити та
                        полагодити її, люди звикли цілком розраховувати на штучний інтелект. Тож кількість збоїв при
                        передачі даних збільшувалась.
                    </p>
                    <p className="story__text story__text_3">
                        З’являлись місця, де Інтернет зникав спочатку на хвилини, потім – години та дні. І ось прийшов
                        він, день, коли мережа зникла назавжди. Знання швидко втрачались, змінювались та частково
                        перетворювались в легенди. Рівень життя людей почав погіршуватись. Спочатку здавалось, що життя
                        продовжується, люди можуть існувати без Інтернету, технологій та знань, проте через 5 років
                        природні катастрофи, економічні, транспортні, продовольчі та інші проблеми повернулися у життя
                        людей. З часом вчені, яким було не байдуже майбутнє цивілізації, почали об’єднуватись. Вони
                        прагнули відродити знання аби вирішити глобальні питання та відновити Інтернет. Люди між собою
                        називали їх «Винахідниками». Через здатність знаходити рішення будь-якої проблеми їх шанували як
                        супер-героїв.
                    </p>
                    <article className="story__article story-article">
                        <h3 className="heading story-article__heading">Як стати Винахідником? <br/>
                            Почати гру!</h3>
                        <p className="story-article__text">
                            Одна з команд «Винахідників» під час пошуків втрачених технологій знайшла STEM-конструктори.
                            Свого часу вони допомагали дітям минулого тренуватись у розв’язанні практичних задач.
                            «Винахідники» почали використовувати ці конструктори для моделювання варіантів вирішення
                            проблем. А згодом створили «Лігу Винахідників», головною задачею якої було збереження і
                            вдосконалення знань та захист людства від природних катастроф. Тож тепер ти «Винахідник» і
                            учасник Ліги. Твоя задача: змагатись з іншими «Винахідниками», щоб знайти найкращий спосіб
                            вирішення задач, які постають перед людством.
                        </p>
                    </article>
                    <h3 className="heading" >Спробуй два варіанти гри</h3>
                    <p className="story__text story__text_short story__text_pattern">
                        <strong className="story__strong-gap">Варіант перший </strong>
                        Гра розрахована на 2 та 4 гравців. Ти зібрав 28 карток (повну колоду) та хочеш пограти з
                        друзями? Тоді розділяємо картки за трьома типами: проблеми, герої та вчені. Картки-проблеми
                        кладемо взакриту на стіл. Вчених та героїв роздаємо гравцям порівну взакриту.
                    </p>
                    <p className="story__text story__text_short">
                        <strong className="story__strong-gap">Варіант другий </strong>
                        Гра розрахована на 2-8 гравців. Ти та твої друзі маєте частину колоди або ж ви зібрали всю? Тоді
                        виймаємо картки-проблеми з колоди. Викладаємо щонайменше 8 проблем на стіл взакриту. Картки
                        героїв та вчених залишаються у власників на руках. Коли кожен з гравців зібрав усі 28 карток
                        тоді, з них взакриту кожен учасник обирає 6 героїв та 9 вчених.
                        <br/><br/>
                        Гра має від 6 до 16 етапів, це залежить від кількості учасників, кількості карток у кожного з
                        учасників та кількості викладених проблем. Етап передбачає повне вирішення 1 проблеми. Кожен
                        етап включає 4 кроки.
                    </p>
                    <h3 className="heading" id="rules">ХІД ГРИ</h3>
                    <p className="story__text">
                        <strong>Крок перший. </strong>
                        Наймолодший гравець відкриває верхню картку проблеми, оголошує її назву та напрям.
                    </p>
                    <p className="story__text">
                        <strong>Крок другий. </strong>
                        Починаючи з наймолодшого гравця, за годинниковою стрілкою, взакриту викладаємо героїв, у яких
                        найбільша кількість балів за напрямом проблеми. Далі гравці одночасно відкривають героїв.
                    </p>
                    <p className="story__text">
                        <strong>Крок третій. </strong>
                        Кожен по черзі викладає вченого, який посилює персонажа по напряму проблеми, та оголошує його
                        ім’я. У разі відсутності вченого гравець пропускає коло.
                        Якщо переможця не визначено, або у когось з гравців є додатковий вчений за напрямом проблеми і
                        учасник хоче ним скористатись, продовжуємо по колу посилювати власного героя. На одному колі
                        гравець може покласти лише одного вченого.
                        <br/><br/>
                        <em>(Якщо вчених не залишилось, а сума балів у гравців однакова, учасник викладає героя. Можна
                            викласти будь-якого героя для збільшення кількості балів за напрямом проблеми. Герої
                            викладаються по черзі.)</em>
                        <br/><br/>
                    </p>
                    <p className="story__text">
                        <strong>Крок четвертий. </strong>
                        Рахуємо суму балів. До балів героя за напрямом проблеми маємо додати бали, які дають вчені.
                        Перемагає гравець з найбільшою кількістю балів. Він забирає картку проблеми на час гри. Картки з
                        вченими та героями кожен гравець кладе у власний відбій.
                        <br/><br/>
                        <em>(Якщо у гравців на руках не повна колода, картки з вченими та героями повертаємо собі на
                            руки.)</em>
                    </p>
                    <p className="story__text">
                        <strong className="story__strong-gap">КІНЕЦЬ ГРИ</strong>
                        Гра закінчується тоді, коли всі викладені проблеми вирішенні або у всіх учасників закінчились
                        картки з героями. Переможцем стає гравець, який вирішив найбільшу кількість проблем. Якщо
                        кількість вирішених проблем рівна, гравці між собою починають наступну гру.
                        Переможець у кінці гри каже: «I am inventor».
                    </p>
                </div>
            </section>
            <div className="download-app download-app_foot content-size">
                <h2 className="download-app__heading heading">
                    Завантажуй додаток
                </h2>
                <div className="download-app__btns">
                    <a href={downloadGOOGLE} target="_blank" className="download-app__btn">
                        <img src={playStore} alt="Goolge Play"/>
                    </a>
                    <a href={downloadAPPLE} target="_blank" className="download-app__btn">
                        <img src={appStore} alt="App Store"/>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}