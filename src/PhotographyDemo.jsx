import './PhotographyDemo.css'

function PhotographyDemo() {
  return (
    <div className="photo-demo">
      <header className="photo-nav">
        <div className="photo-container photo-nav-inner">
          <a className="photo-logo" href="/">
            LENS<span>STUDIO</span>
          </a>

          <nav>
            <a href="#works">作品</a>
            <a href="#services-photo">服务</a>
            <a href="#about-photo">关于</a>
            <a href="#contact-photo">联系</a>
          </nav>

          <a className="photo-book-btn" href="#contact-photo">
            预约拍摄
          </a>
        </div>
      </header>

      <main>
        <section className="photo-hero">
          <div className="photo-container">
            <div className="photo-demo-badge">DEMO · 演示案例</div>

            <div className="photo-hero-grid">
              <div className="photo-hero-copy">
                <p className="photo-kicker">PHOTOGRAPHY STUDIO</p>

                <h1>
                  光影之间，
                  <br />
                  <em>记录美好。</em>
                </h1>

                <p className="photo-intro">
                  用镜头记录真实、自然、有温度的瞬间。
                  专注人像、情侣、婚礼与品牌摄影。
                </p>

                <div className="photo-actions">
                  <a href="#works" className="photo-primary-btn">
                    浏览作品
                  </a>

                  <a href="#contact-photo" className="photo-text-link">
                    预约咨询 →
                  </a>
                </div>
              </div>

              <div className="photo-hero-art">
                <div className="photo-main-image">
                  <div className="photo-landscape-one"></div>
                  <div className="photo-subject"></div>
                  <span>PORTRAIT / 2026</span>
                </div>

                <div className="photo-small-image">
                  <div className="photo-landscape-two"></div>
                  <span>STORY</span>
                </div>

                <div className="photo-floating-note">
                  <strong>自然 · 真实 · 有温度</strong>
                  <span>Every moment tells a story.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="photo-works" id="works">
          <div className="photo-container">
            <div className="photo-section-heading">
              <div>
                <p>SELECTED WORK</p>
                <h2>精选作品</h2>
              </div>

              <span>
                每一次快门，
                <br />
                都在保存一段故事。
              </span>
            </div>

            <div className="photo-gallery">
              <article className="photo-work photo-work-large">
                <div className="photo-scene scene-one"></div>

                <div className="photo-work-info">
                  <span>01</span>
                  <div>
                    <h3>城市漫步</h3>
                    <p>PORTRAIT</p>
                  </div>
                </div>
              </article>

              <article className="photo-work">
                <div className="photo-scene scene-two"></div>

                <div className="photo-work-info">
                  <span>02</span>
                  <div>
                    <h3>山野之间</h3>
                    <p>COUPLE</p>
                  </div>
                </div>
              </article>

              <article className="photo-work">
                <div className="photo-scene scene-three"></div>

                <div className="photo-work-info">
                  <span>03</span>
                  <div>
                    <h3>午后时光</h3>
                    <p>LIFESTYLE</p>
                  </div>
                </div>
              </article>

              <article className="photo-work photo-work-wide">
                <div className="photo-scene scene-four"></div>

                <div className="photo-work-info">
                  <span>04</span>
                  <div>
                    <h3>属于我们的那一天</h3>
                    <p>WEDDING</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="photo-services" id="services-photo">
          <div className="photo-container">
            <div className="photo-section-heading">
              <div>
                <p>SERVICES</p>
                <h2>拍摄服务</h2>
              </div>

              <span>选择适合你的记录方式。</span>
            </div>

            <div className="photo-service-grid">
              <article>
                <span className="photo-service-number">01</span>
                <h3>个人写真</h3>
                <p>
                  适合个人形象、生日纪念、旅行记录和生活写真。
                </p>
                <strong>¥699 起</strong>
              </article>

              <article>
                <span className="photo-service-number">02</span>
                <h3>情侣 / 婚礼</h3>
                <p>
                  记录自然互动与重要时刻，保留属于你们的故事。
                </p>
                <strong>¥1299 起</strong>
              </article>

              <article>
                <span className="photo-service-number">03</span>
                <h3>品牌摄影</h3>
                <p>
                  为工作室、品牌和产品提供统一视觉风格的商业拍摄。
                </p>
                <strong>定制报价</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="photo-about" id="about-photo">
          <div className="photo-container photo-about-grid">
            <div className="photo-about-visual">
              <div className="photo-about-image">
                <div className="photo-camera-shape">
                  <div className="photo-camera-lens"></div>
                </div>
              </div>

              <span>PHOTOGRAPHER / LENS STUDIO</span>
            </div>

            <div className="photo-about-copy">
              <p className="photo-small-label">ABOUT THE STUDIO</p>

              <h2>
                我们更在意
                <br />
                <em>照片里的情绪。</em>
              </h2>

              <p>
                Lens Studio 是一个专注真实与自然影像的摄影工作室。
                我们希望拍摄过程轻松、不拘谨，让每个人都能留下属于自己的画面。
              </p>

              <p>
                与其追求复杂摆拍，我们更喜欢捕捉那些不经意的表情、
                动作和真实关系。
              </p>

              <div className="photo-about-stats">
                <div>
                  <strong>120+</strong>
                  <span>拍摄故事</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>服务方向</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>值得记录的瞬间</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="photo-contact" id="contact-photo">
          <div className="photo-container">
            <div className="photo-contact-box">
              <div>
                <p>BOOK A SESSION</p>

                <h2>
                  想留下一组
                  <br />
                  属于你的照片？
                </h2>

                <span>
                  告诉我们你的拍摄想法、时间和地点，
                  我们会尽快回复。
                </span>
              </div>

              <div className="photo-contact-info">
                <a href="mailto:demo@example.com">
                  demo@example.com
                </a>

                <span>微信：LensStudioDemo</span>

                <a className="photo-contact-btn" href="mailto:demo@example.com">
                  开始咨询 →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="photo-sales-cta">
  <div className="photo-container">
    <div className="photo-sales-card">
      <div>
        <p className="photo-sales-label">
          LAUNCHPAGE STUDIO · DEMO
        </p>

        <h2>
          喜欢这种风格？
          <br />
          可以做成属于你的网站。
        </h2>

        <p className="photo-sales-copy">
          这是一套摄影网站演示案例。
          可以根据你的照片、品牌、服务内容和联系方式进行定制。
        </p>

        <div className="photo-sales-price">
          标准展示官网 <strong>¥499 起</strong>
        </div>
      </div>

      <div className="photo-sales-actions">
        <a href="/#pricing" className="photo-sales-primary">
          查看建站方案
        </a>

        <a href="/?plan=standard#contact" className="photo-sales-secondary">
          提交需求 →
        </a>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="photo-footer">
        <div className="photo-container">
          <div>
            LENS<span>STUDIO</span>
          </div>

          <p>Photography Demo · 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default PhotographyDemo