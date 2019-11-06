import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/coffee.jpg';
import pic2 from '../assets/images/weights.jpg';
import pic3 from '../assets/images/hikt.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    caption: 'Cherish',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    caption: 'Different.',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    caption: 'History was made here',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    caption: 'People come and go and walk away',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h2>About</h2>
      </header>
      <div className="container">
        <h4>
          Versatile and highly motivated self-starter, Full stack web developer with a passion for creating real-world solutions always seeking ways to enhance current skill sets as well as learning new ones daily.
      </h4>
      </div>
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            See Projects
          </a>
        </Scroll>
      </footer>
    </section>

    <article className="container box style2">
      <header>
        <h2>Projects</h2>
      </header>
    </article>

    <article id="first" className="container box style1 right">
      <a href="https://koffee-shop.netlify.com/" className="image fit">
        <img src={pic1} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Koffee
          </h2>
        </header>
        <p>
          Online ordering platform for a local coffee shop. Includes dynamic shopping cart built using React Redux.
        </p>
        <a href="https://github.com/Beaulieu527/koffee" className="button style2 ">
          Github
          </a>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="https://love-every-pound.netlify.com/" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Love Every Pound
            <br />

          </h2>
        </header>
        <p>
          A weight tracker app with inspirational quotes to keep you motivated every day. Shows a graph and a calendar of your past weights.
        </p>
        <a href="https://github.com/kyoung90/Love-Every-Pound" className="button style2 ">
          Github
          </a>
      </div>
    </article>

    <article id="first" className="container box style1 right">
      <a href="https://agile-peak-09148.herokuapp.com/" className="image fit">
        <img src={pic3} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Hikt
          </h2>
        </header>
        <p>
          Social media site that allows you to keep track of all your favorite hikes throughout the world in one place.
        </p>
        <a href="https://github.com/Beaulieu527/hikt_with_JS-" className="button style2 ">
          Github
        </a>
      </div>
    </article>

    <article className="container box style2">
      <header>
        <h2>Technologies</h2>
      </header>

      <div className="inner gallery">
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
      </div>
    </article>

    <article className="container box style3">
      <header>
        <h2>Elements</h2>
        <p>This starter has other elements.</p>
        <br />
        Check it out
        <Link to="/Element"> here </Link>
      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
