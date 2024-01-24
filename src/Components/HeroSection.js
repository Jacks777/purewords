export function HeroSection() {
  return (
    <main className="hero_container">
      <div className="hero_container_inner container">
        <div className="hero_container_left">
          <div className="hero_title-top">
            <p className="hero_title_top_intro">Invictus Deus.</p>
            <p className="hero_title_top_intro-extra">Unconquerable God.</p>
            <div className="hero_title_top_intro_box">
              <div className="hero_title_top_intro_left">
                <p>Discover</p> <p>Connect</p> <p>Grow</p>
              </div>
              <div className="hero_title_top_intro_right">
                <p>the Bible.</p> <p>with Christians.</p> <p>in Faith.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_container_right">
          <div className="hero_container-svgBox">
            <img
              src="./assets/bible.svg"
              className="bible_svg"
              alt="bible svg"
            />
            <div className="hero_container-svgBox_text">
              <p className="hero_container-svgBox_text-verse">
                "In the beginning was the Word, and the Word was with God, and
                the Word was God."
              </p>
              <p className="hero_container-svgBox_text-info">John 1:1 KJV</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
