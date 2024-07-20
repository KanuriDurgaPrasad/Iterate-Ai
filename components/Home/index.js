import './index.css'

const Home = () => (
  <div className="main-container">
    <div className="container-1">
      <p className="container-1-desc">
        <span>
          <img
            className="desc-icon"
            alt="Badge"
            src="https://res.cloudinary.com/dlvynkvfc/image/upload/v1721392938/vdzryvmctdzha1mvhfqy.png"
          />
        </span>
        WORLD’S LARGEST APP FOR HINDU DEVOTEES
      </p>
      <h1 className="container-1-heading">
        Pray daily with <span className="sri-mandir-text">Sri Mandir</span>.{' '}
        <br /> One App for all your devotional needs.
      </h1>
      <div className="container-1-apps">
        <img
          className="app-download-item app-download-google"
          alt="google play"
          src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png"
        />
        <img
          className="app-download-item app-download-apple"
          alt="App store"
          src="https://res.cloudinary.com/dlvynkvfc/image/upload/v1721394869/rusxxtdxgkskmyfkd9m1.png"
        />
      </div>
    </div>
    <div className="container-2">
      <img
        className="container-2-img"
        alt="homeImage"
        src="https://res.cloudinary.com/dlvynkvfc/image/upload/v1721393891/dv5kbk3kc1devugzawkl.png"
      />
    </div>
  </div>
)

export default Home
