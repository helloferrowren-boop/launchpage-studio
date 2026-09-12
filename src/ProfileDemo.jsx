import './ProfileDemo.css'

function ProfileDemo() {
  return (
    <div className="profile-demo">

      <header className="profile-nav">
        <div className="profile-container">
          <div className="profile-logo">
            Alex Chen
          </div>

          <nav>
            <a href="#intro">介绍</a>
            <a href="#works-profile">作品</a>
            <a href="#experience">经历</a>
            <a href="#contact-profile">联系</a>
          </nav>
        </div>
      </header>


      <main>

        <section className="profile-hero" id="intro">
          <div className="profile-container profile-hero-grid">

            <div className="profile-copy">

              <p className="profile-label">
                CREATOR · DEVELOPER · DESIGNER
              </p>

              <h1>
                用技术
                <br />
                创造有价值的产品。
              </h1>

              <p className="profile-desc">
                我是一名软件工程学生，
                专注 Web 开发、产品设计和数字体验。
                喜欢把想法变成真实可用的网站。
              </p>


              <div className="profile-buttons">

                <a href="#works-profile">
                  查看作品
                </a>

                <a href="#contact-profile">
                  联系我
                </a>

              </div>


              <div className="profile-info">

                <div>
                  <strong>02+</strong>
                  <span>开发经验</span>
                </div>

                <div>
                  <strong>10+</strong>
                  <span>完成项目</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>持续成长</span>
                </div>

              </div>

            </div>


            <div className="profile-avatar">

              <div className="avatar-circle">
                AC
              </div>

              <div className="avatar-card">
                <strong>
                  Available
                </strong>

                <span>
                  Open for projects
                </span>
              </div>

            </div>

          </div>
        </section>



        <section className="profile-about">

          <div className="profile-container">

            <p className="profile-label">
              ABOUT ME
            </p>

            <h2>
              不只是学习代码，
              <br />
              更希望创造产品。
            </h2>


            <p className="profile-text">

              从前端开发到产品设计，
              我喜欢研究如何让技术服务真实需求。

              目前主要学习 React、Node.js
              以及现代 Web 开发技术。

            </p>


          </div>

        </section>




        <section
          className="profile-works"
          id="works-profile"
        >

          <div className="profile-container">


            <div className="profile-title-row">

              <div>

                <p className="profile-label">
                  SELECTED WORK
                </p>

                <h2>
                  我的作品
                </h2>

              </div>

            </div>



            <div className="profile-work-grid">


              <article>

                <span>
                  01
                </span>

                <h3>
                  企业官网设计
                </h3>

                <p>
                  为小型企业打造品牌展示网站。
                </p>

              </article>



              <article>

                <span>
                  02
                </span>

                <h3>
                  AI 效率工具
                </h3>

                <p>
                  使用 AI 技术提升工作效率。
                </p>

              </article>




              <article>

                <span>
                  03
                </span>

                <h3>
                  个人作品集
                </h3>

                <p>
                  展示个人能力和项目经历。
                </p>

              </article>


            </div>


          </div>

        </section>






        <section
          className="profile-experience"
          id="experience"
        >

          <div className="profile-container">

            <p className="profile-label">
              EXPERIENCE
            </p>


            <h2>
              成长经历
            </h2>



            <div className="timeline">


              <div>

                <strong>
                  2025
                </strong>

                <p>
                  开始深入学习 Web 开发。
                </p>

              </div>


              <div>

                <strong>
                  2026
                </strong>

                <p>
                  完成多个个人项目并上线。
                </p>

              </div>


              <div>

                <strong>
                  NOW
                </strong>

                <p>
                  持续探索 AI 与软件产品。
                </p>

              </div>


            </div>


          </div>

        </section>






        <section
          className="profile-contact"
          id="contact-profile"
        >

          <div className="profile-container">

            <div className="profile-contact-box">

              <p>
                LET'S CONNECT
              </p>


              <h2>
                有项目想法？
                <br />
                一起创造。
              </h2>


              <a href="mailto:hello@example.com">
                hello@example.com →
              </a>


            </div>


          </div>

        </section>


      </main>




      <footer className="profile-footer">

        <div className="profile-container">

          Alex Chen
          · Personal Website Demo

        </div>

      </footer>


    </div>
  )
}


export default ProfileDemo