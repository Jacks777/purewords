export function HeroSection2() {
  return (
    <main className="hero_container2">
      <div className="hero_container2_inner container">
        <div className="hero_container2_left">
          <div className="hero_container2-svgBox">
            <img
              src="./assets/pigeon.svg"
              className="bible_svg"
              alt="bible svg"
            />
            <div className="hero_container2-svgBox_text">
              <p className="hero_container2-svgBox_text-verse">
                "For all the law is fulfilled in one word, even in this; Thou
                shalt love thy neighbour as thyself."
              </p>
              <p className="hero_container2-svgBox_text-info">
                Galatians 5:14 KJV
              </p>
            </div>
          </div>
        </div>
        <div className="hero_container2_right">
          <div className="hero_title2-top">Why InvictusDeus?</div>
          <div className="hero_title2-info">
            A Christian hub providing the full King James Bible, prayers, daily
            verses, readplans, and engaging blogs—all in one place.
          </div>
        </div>
      </div>
    </main>
  );
}
