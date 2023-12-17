import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
import { CubeControl, RubikCubic, WelcomeScreenBackground } from '~/shared/ui/graphics';
import { PhilosophyCanvas } from '~/shared/ui/graphics';
window.ResizeObserver = ResizeObserver;

WelcomeScreenBackground;

export const HomePage = () => {

  return (
    <div className="wrapper">
      <div className="wrapper__menu-wrapper menu-wrapper">
        <button type="button" className="button-clous">
          Закрыть
        </button>
        <a
          href="http://kamertsel.ml/tulpar/"
          title=""
          className="button-clous-link"
        >
          Перейти
        </a>
        <div className="menu-wrapper__funny-text">
          Тут могла быть ваша реклама :)
        </div>
      </div>
      <div
        className="wrapper__main-content main-content-wrapper"
        data-simplebar
      >
        <div className="header-welcome max-container">
          <div className="header-welcome__container">
            <div className="header-welcome__body">
              <div className="header-welcome__button button-open-welcome">
                <span />
                <span />
                <span />
              </div>
              <nav className="header-welcome__nav nav-header-welcome">
                <ul className="nav-header-welcome__list">
                  <li>
                    <a href="#" className="nav-header-welcome__link">
                      Опыт
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-header-welcome__link">
                      Работы
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-header-welcome__link">
                      Технологии
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-header-welcome__link">
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <CubeControl></CubeControl>
        </div>
        <div className="canvas-container"></div>
        <section className="welcome-screen">
          <div className="welcome-screen__wrapper">
            <div className="welcome-screen__fixsed">
              <div className="welcome-screen__content max-container">
                <div className="welcome-screen__cube-control"></div>
                <div className="welcome-screen__canvas-wrapper">
                  <RubikCubic className="welcome-screen__canvas" />
                </div>
              </div>
              <div className="welcome-screen__background">
                <WelcomeScreenBackground className="welcome-screen__background-canvas" />
              </div>
              {/* <div className="welcome-screen__background">
                <canvas
                  id="canvas-2"
                  className="welcome-screen__background-canvas"
                >
                  ОЙ, что-то пошло не так, и ваш браузер не поддерживает тег
                  canvas!
                </canvas>
              </div> */}
            </div>
          </div>
        </section>
        <header className="header">
          <div className="header__wrapper">
            <div className="header__container container">
              <div className="header__body">
                <div className="header__button button-open">
                  <span />
                  <span />
                  <span />
                </div>
                <nav className="header__nav nav-header">
                  <ul className="nav-header__list">
                    <li>
                      <a href="#" className="nav-header__link">
                        Опыт
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-header__link">
                        Работы
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-header__link">
                        Технологии
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-header__link">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="hero">
            <div className="hero__container max-container">
              <div className="hero__wrapper">
                <div className="hero__body-img hero-body-img">
                  <img
                    className="hero-body-img__img"
                    src="./images/main-foto.jpg"
                    alt="Это я - Артур Камерцель"
                  />
                </div>
                <div className="hero__body-text hero-body-text">
                  <div className="hero-body-text__text">
                    <h1 className="hero-body-text__title">
                      Камерцель Артур.
                      {/* <span className="nowrap"> HTML верстальщик</span>
                      <span className="nowrap"> из России.</span> */}
                    </h1>
                    <h2 className="hero-body-text__sub-title">
                      Я, наверное, самый увлеченный верстальщик, с которым вы
                      можите поработать. Если у вас есть проект, требующий
                      отличных навыков то, я тот, кто вам нужен.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="technologies">
            <div className="technologies__wrapper">
              <div className="technologies__container container">
                <div className="technologies__body">
                  <h3 className="technologies__sub-title">WORK EXPERIENCE</h3>
                  <h2 className="technologies__title">
                    Используемые технологии
                  </h2>
                  <div className="technologies__box box-technologies">
                    <div className="box-technologies__item">
                      <div className="box-technologies__number">01</div>
                      <div className="box-technologies__title">
                        <span className="box-technologies__title_gren">
                          Google
                        </span>
                        , Interaction Designer
                      </div>
                      <div className="box-technologies__text">
                        I currently am the lead designer on the interaction
                        design team for Google Play.
                      </div>
                    </div>
                    <div className="box-technologies__item">
                      <div className="box-technologies__number">02</div>
                      <div className="box-technologies__title">
                        <span className="box-technologies__title_blue">
                          Google
                        </span>
                        , Interaction Designer
                      </div>
                      <div className="box-technologies__text">
                        I currently am the lead designer on the interaction
                        design team for Google Play.
                      </div>
                    </div>
                    <div className="box-technologies__item">
                      <div className="box-technologies__number">03</div>
                      <div className="box-technologies__title">
                        <span className="box-technologies__title_pink">
                          Google
                        </span>
                        , Interaction Designer
                      </div>
                      <div className="box-technologies__text">
                        I currently am the lead designer on the interaction
                        design team for Google Play.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="philosophy">
            <div className="philosophy__wrapper">
              <div className="philosophy__container">
                <h2 className="visuallyhidden">Моя философия</h2>
                <div className="philosophy__body">
                  <div
                    className="
                  philosophy__canvas-wrapper
                  philosophy__canvas-wrapper_desctop
                "
                  >
                    <PhilosophyCanvas className="philosophy__canvas" />
                    <canvas id="canvas-3" >
                      ОЙ, что-то пошло не так, и ваш браузер не поддерживает тег
                      canvas!
                    </canvas>
                  </div>
                  <div
                    className="
                  philosophy__canvas-wrapper
                  philosophy__canvas-wrapper_mobile
                "
                  >
                    <h3 className="philosophy__title">Философия и Ценности</h3>
                    <p className="philosophy__text">
                      Я думаю, что все хотят одного и того же — отношений с",
                      человечеством, мира с метафизическим и опыта со вселенной.
                      Я пытаюсь понять эти вещи своими ценностями: подлинность,
                      креативность и гостеприимство.
                    </p>
                  </div>
                  <div className="philosophy__image-wrapper">
                    <div className="philosophy__image"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="skillset">
            <div className="skillset__wrapper">
              <div className="skillset__container container">
                <div className="skillset__body">
                  <div className="skillset__title-box">
                    <h2 className="skillset__title">Навыки</h2>
                    <div className="skillset__text">
                      Обладая навыками в более чем 4 различных областях дизайна,
                      я идеальный человек, которого можно нанять, когда дело
                      доходит до полноценного проекта. Какими бы ни были ваши
                      потребности, я могу принять любой вызов.
                    </div>
                  </div>
                  <div className="skillset__skills-box box-skills">
                    <div className="box-skills__item">
                      <div className="box-skills__icon box-skills__icon_html"></div>
                      <h3 className="box-skills__title">Product Design</h3>
                      <div className="box-skills__text">
                        Working at Facebook has taught me a lot about how to
                        understand users, solve problems and build great
                        products.
                      </div>
                    </div>
                    <div className="box-skills__item">
                      <div className="box-skills__icon box-skills__icon_css"></div>
                      <h3 className="box-skills__title">Motion Design</h3>
                      <div className="box-skills__text">
                        I started my design journey with motion design in my
                        college days. Motion is something that really fascinates
                        me because of the flexibility of story telling.
                      </div>
                    </div>
                    <div className="box-skills__item">
                      <div className="box-skills__icon box-skills__icon_js"></div>
                      <h3 className="box-skills__title">Visual Design</h3>
                      <div className="box-skills__text">
                        My experience at dribbble has helped me learn to develop
                        the eye for design. Colors, typography, layout and the
                        whole package.
                      </div>
                    </div>
                    <div className="box-skills__item">
                      <div className="box-skills__icon box-skills__icon_moo"></div>
                      <h3 className="box-skills__title">Photography</h3>
                      <div className="box-skills__text">
                        Clicking pictures really brings out the creative in me.
                        Phtography really makes you look and percieve things in
                        a different way.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="portfolio">
            <div className="portfolio__wrapper">
              <div className="portfolio__container container">
                <div className="portfolio__body">
                  <div className="portfolio__first-column">
                    <div className="portfolio__title paralacs-object">
                      <div className="paralacs-object__wrapper"></div>
                      <div className="paralacs-object__content">
                        <h2 className="portfolio__title-top">Моё портфолио</h2>
                        <h3 className="portfolio__title-bottom">
                          Работы, которые я сделал за последний год
                        </h3>
                      </div>
                    </div>
                    <div className="portfolio__site site-portfolio paralacs-object">
                      <div className="paralacs-object__wrapper"></div>
                      <div className="paralacs-object__content">
                        <img
                          src="./images/portfolio/tulpar.jpg"
                          alt="Приветствующий экрай сайта"
                          className="site-portfolio__welcome-screen"
                        />
                        <img
                          src="./images/portfolio/tulpar-full.jpg"
                          alt="Скриншот всего сайта"
                          className="site-portfolio__full-site"
                        />
                        <div className="site-portfolio__description">
                          <h4 className="site-portfolio__description-title">
                            Многостраничный сайт для Санатория
                          </h4>
                          <p className="site-portfolio__description-text">
                            Это крупный проект, в работе над которым я
                            постарался использовать как можно меньше библиотек,
                            и написал Pop-Up и фильтр на чистом JS
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio__site site-portfolio paralacs-object">
                      <div className="paralacs-object__wrapper"></div>
                      <div className="paralacs-object__content">
                        <img
                          src="./images/portfolio/yaleshool.jpg"
                          alt="Приветствующий экрай сайта"
                          className="site-portfolio__welcome-screen"
                        />
                        <img
                          src="./images/portfolio/yaleshool-full.jpg"
                          alt="Скриншот всего сайта"
                          className="site-portfolio__full-site"
                        />
                        <div className="site-portfolio__description">
                          <h4 className="site-portfolio__description-title">
                            Сайт школы искусств
                          </h4>
                          <p className="site-portfolio__description-text">
                            Это работа примечательна, лично написанным плагином
                            календаря с богатым функционалом и используемой в
                            разработке библиотекой Moment.js
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__second-column">
                    <div className="portfolio__site site-portfolio paralacs-object">
                      <div className="paralacs-object__wrapper"></div>
                      <div className="paralacs-object__content">
                        <img
                          src="./images/portfolio/tattoo.jpg"
                          alt="Приветствующий экрай сайта"
                          className="site-portfolio__welcome-screen"
                        />
                        <img
                          src="./images/portfolio/tattoo-full.jpg"
                          alt="Скриншот всего сайта"
                          className="site-portfolio__full-site"
                        />
                        <div className="site-portfolio__description">
                          <h4 className="site-portfolio__description-title">
                            Сайт Тату салона
                          </h4>
                          <p className="site-portfolio__description-text">
                            На сайте реализована интересная шапка, галерея на
                            Grid и много анимации
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio__site site-portfolio paralacs-object">
                      <div className="paralacs-object__wrapper"></div>
                      <div className="paralacs-object__content">
                        <img
                          src="./images/portfolio/handmade.jpg"
                          alt="Приветствующий экрай сайта"
                          className="site-portfolio__welcome-screen"
                        />
                        <img
                          src="./images/portfolio/handmade-full.jpg"
                          alt="Скриншот всего сайта"
                          className="site-portfolio__full-site"
                        />
                        <div className="site-portfolio__description">
                          <h4 className="site-portfolio__description-title">
                            Небольшой магазин товаров ручного производства
                          </h4>
                          <p className="site-portfolio__description-text">
                            Тут реализованы такие характерные для большинства
                            интернет магазинов блоки таких как Карточка товара,
                            Корзина товаров, Система оценки товара и Комментарии
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio__site site-portfolio paralacs-object">
                      <div className="paralacs-object__wrapper"></div>
                      <div className="paralacs-object__content">
                        <img
                          // src="./images/portfolio/nurtown.jpg"
                          // src={require('../shared/ui/graphics/RubikCubic/images/cubic/blue/1.jpg')}
                          src={new URL('../shared/ui/graphics/RubikCubic/images/cubic/blue/1.jpg', import.meta.url).href}
                          alt="Приветствующий экрай сайта"
                          className="site-portfolio__welcome-screen"
                        />
                        <img
                          src="./images/portfolio/nurtown-full.jpg"
                          alt="Скриншот всего сайта"
                          className="site-portfolio__full-site"
                        />
                        <div className="site-portfolio__description">
                          <h4 className="site-portfolio__description-title">
                            Многостраничный сайт для Дизайнерского агенства
                          </h4>
                          <p className="site-portfolio__description-text">
                            Ещё один многостраничный сайт с интересными
                            слайдерами реализованными с помощью Swiper
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="connection">
            <div className="connection__wrapper">
              <div className="connection__container">
                <div className="connection__body">
                  <h2 className="connection__title">Если вы уже думаете:</h2>
                  <img
                    src="./images/ZG7nYNOEX_c.jpg"
                    alt="мем про то, как Вам сильно понравилось портфолио"
                    className="connection__image"
                  />
                </div>
                <div className="connection__box">
                  <div className="connection__box-description">
                    <h3 className="connection__description-title">
                      Пишите мне
                    </h3>
                    <p className="connection__text">
                      Теперь, когда вы много знаете обо мне, дайте знать, если
                      вам интересно работать со мной.
                    </p>
                  </div>
                  <form className="connection__form form-connection" action="">
                    <label className="form-connection__label">Имя</label>
                    <input
                      className="form-connection__input"
                      type="text"
                      name="username"
                      id="username"
                    />
                    <label className="form-connection__label">Email</label>
                    <input
                      className="form-connection__input"
                      type="text"
                      name="email"
                      id="email"
                    />
                    <label className="form-connection__label">Сообщение</label>
                    <textarea
                      className="form-connection__textarea"
                      name="message"
                      id="message"
                    ></textarea>
                    <button className="form-connection__button" type="button">
                      Отправить сообщение
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__wrapper">
            <div className="footer__container">
              <div className="footer__body"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
