export function HeroSection() {
  return (
    <main className="hero_container">
      <div className="hero_container_inner container">
        <div className="hero_container_left">
          <div className="hero_title-top">
            <p className="hero_title_top_intro">Invictus Deus.</p>
            Discover <br></br>Connect<br></br>Grow
          </div>
          <div className="hero_title-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet est eget dapibus. In hac habitasse platea dictumst.
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
