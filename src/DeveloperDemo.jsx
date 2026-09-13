import { useEffect } from "react";
import "./DeveloperDemo.css";

function DeveloperDemo() {

  useEffect(() => {
    document.title = "程序员个人主页制作｜开发者作品集网站 Demo - LaunchPage Studio";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "程序员个人主页和开发者作品集网站 Demo，展示项目经历、技术栈、GitHub 和个人介绍。"
      );
  }, []);

  return (
  
    <div className="dev-demo">
      <header className="dev-nav">
        <div className="dev-container dev-nav-inner">
          <a className="dev-logo" href="/">
            Alex<span>.dev</span>
          </a>

          <nav>
            <a href="#about">关于</a>
            <a href="#projects">项目</a>
            <a href="#skills">技能</a>
            <a href="#contact-demo">联系</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="dev-hero">
          <div className="dev-container dev-hero-grid">
            <div className="dev-hero-copy">
              <p className="dev-kicker">HELLO, I'M ALEX 👋</p>

              <h1>
                Developer &
                <br />
                <span>Creative Builder.</span>
              </h1>

              <p className="dev-intro">
                一名热爱技术与产品的软件开发者。
                喜欢把想法做成真正可以使用的产品。
              </p>

              <div className="dev-actions">
                <a href="#projects" className="dev-primary">
                  查看我的项目 →
                </a>

                <a href="#contact-demo" className="dev-secondary">
                  联系我
                </a>
              </div>

              <div className="dev-stats">
                <div>
                  <strong>6+</strong>
                  <span>个人项目</span>
                </div>

                <div>
                  <strong>2+</strong>
                  <span>年学习开发</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>持续学习</span>
                </div>
              </div>
            </div>

            <div className="dev-code-card">
              <div className="dev-code-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
                <code>{`const developer = {
  name: "Alex",
  role: "Developer",
  skills: [
    "React",
    "JavaScript",
    "Node.js"
  ],
  passion: "Build things"
}

developer.create()
  .learn()
  .improve()
  .repeat()`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="dev-about" id="about">
          <div className="dev-container dev-about-grid">
            <div>
              <p className="dev-section-label">ABOUT ME</p>

              <h2>
                不只是写代码，
                <br />
                更喜欢解决问题。
              </h2>
            </div>

            <div className="dev-about-copy">
              <p>
                我目前专注于 Web 开发，喜欢 React、JavaScript
                和各种能够把想法快速变成产品的技术。
              </p>

              <p>
                我相信最好的学习方式，就是不断做真实项目、
                解决真实问题，并把每一次尝试变成新的经验。
              </p>
            </div>
          </div>
        </section>

        <section className="dev-projects" id="projects">
          <div className="dev-container">
            <div className="dev-section-heading">
              <div>
                <p className="dev-section-label">SELECTED WORK</p>
                <h2>精选项目</h2>
              </div>

              <p>一些我正在学习和完成的作品。</p>
            </div>

            <div className="dev-project-grid">
              <article className="dev-project-card dev-project-blue">
                <div className="dev-project-number">01</div>

                <div className="dev-project-content">
                  <span>WEB APP</span>
                  <h3>个人任务管理工具</h3>
                  <p>
                    一个用于管理学习计划和每日任务的轻量 Web 应用。
                  </p>

                  <div className="dev-tags">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                  </div>
                </div>
              </article>

              <article className="dev-project-card dev-project-purple">
                <div className="dev-project-number">02</div>

                <div className="dev-project-content">
                  <span>WEBSITE</span>
                  <h3>工作室展示官网</h3>
                  <p>
                    为小型工作室设计的响应式品牌展示网站。
                  </p>

                  <div className="dev-tags">
                    <span>React</span>
                    <span>UI Design</span>
                    <span>Responsive</span>
                  </div>
                </div>
              </article>

              <article className="dev-project-card dev-project-dark">
                <div className="dev-project-number">03</div>

                <div className="dev-project-content">
                  <span>EXPERIMENT</span>
                  <h3>AI 小工具实验</h3>
                  <p>
                    使用 AI 辅助开发的一系列效率工具和产品实验。
                  </p>

                  <div className="dev-tags">
                    <span>AI</span>
                    <span>API</span>
                    <span>Automation</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="dev-skills" id="skills">
          <div className="dev-container">
            <p className="dev-section-label">TECH STACK</p>
            <h2>正在使用和学习</h2>

            <div className="dev-skill-grid">
              <div>JavaScript</div>
              <div>React</div>
              <div>HTML / CSS</div>
              <div>Node.js</div>
              <div>Git</div>
              <div>Linux</div>
              <div>Docker</div>
              <div>AI Tools</div>
            </div>
          </div>
        </section>

        <section className="dev-contact" id="contact-demo">
          <div className="dev-container">
            <div className="dev-contact-box">
              <p>LET'S BUILD SOMETHING</p>

              <h2>
                有一个有趣的想法？
                <br />
                一起聊聊。
              </h2>

              <a href="mailto:hello@example.com">
                hello@example.com →
              </a>
            </div>
          </div>
        </section>
        <section className="dev-sales-cta">
  <div className="dev-container">
    <div className="dev-sales-card">
      <div>
        <p className="dev-sales-label">
          LAUNCHPAGE STUDIO · DEMO
        </p>

        <h2>
          想要这样的程序员个人主页？
          <br />
          可以按你的经历和项目定制。
        </h2>

        <p className="dev-sales-copy">
          这是一套开发者个人主页演示案例。
          可以替换成你的个人介绍、技术栈、项目经历、GitHub 和联系方式。
        </p>

        <div className="dev-sales-price">
          个人展示页 <strong>¥199 起</strong>
        </div>
      </div>

      <div className="dev-sales-actions">
        <a href="/#pricing" className="dev-sales-primary">
          查看建站方案
        </a>

        <a href="/?plan=personal#contact" className="dev-sales-secondary">
          提交需求 →
        </a>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="dev-footer">
        <div className="dev-container">
          <span>Alex.dev</span>
          <span>Demo Portfolio · 2026</span>
        </div>
      </footer>
    </div>
  )
}

export default DeveloperDemo