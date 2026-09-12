import { useState } from 'react'
import './App.css'

function App() {
  const [formStatus, setFormStatus] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)
const [selectedPlan, setSelectedPlan] = useState('')

async function handleSubmit(e) {
  e.preventDefault()

  setIsSubmitting(true)
  setFormStatus('')

  const form = e.currentTarget
  const formData = new FormData(form)

  try {
    const response = await fetch('https://formspree.io/f/moeqbgnj', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      setFormStatus('success')
      form.reset()
    } else {
      setFormStatus('error')
    }
  } catch {
    setFormStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}function choosePlan(plan) {
  setSelectedPlan(plan)

  setTimeout(() => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <span>LaunchPage</span> Studio
          </div>

          <nav className="nav-links">
            <a href="#services">服务</a>
            <a href="#pricing">价格</a>
            <a href="#cases">案例</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">联系</a>
          </nav>

          <a className="nav-button" href="#contact">
  提交需求
</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">用网站，让更多人看到你</div>

              <h1>
                把你的想法，
                <br />
                做成<span>能访问的网站</span>
              </h1>

              <p className="hero-subtitle">
  个人主页 ¥99 起 · 小型官网 ¥299 起
</p>

              <p className="hero-description">
  个人主页、作品集、小型官网、网站修改与上线，都可以联系我们。
</p>

              <div className="hero-actions">
                <a className="primary-button" href="#services">
  查看服务 →
</a>

<a className="secondary-button" href="#contact">
  提交需求
</a>
              </div>

              <div className="hero-note">
  支持手机和电脑 · 可协助上线 · 制作前确认价格
</div>
<div className="hero-trust">
  <span>✓ 价格透明</span>
  <span>✓ 制作前确认需求</span>
  <span>✓ 套餐内支持修改</span>
</div>
            </div>

            <div className="hero-preview">
              <div className="browser">
                <div className="browser-top">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-brand">Your Brand</div>
                </div>

                <div className="browser-content">
                  <div>
                    <small>YOUR WEBSITE</small>
                    <h2>用创意构建更好的未来</h2>
                    <p>让好的设计帮助你的想法被更多人看到。</p>
                    <button>了解更多 →</button>
                  </div>

                  <div className="preview-art">
                    <div className="mountain mountain-one"></div>
                    <div className="mountain mountain-two"></div>
                    <div className="sun"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-heading">
              <h2>我们能帮你做什么</h2>
              <p>从个人到小团队，提供简单、专业、可靠的网站服务。</p>
            </div>

            <div className="service-grid">
              <article className="service-card">
                <div className="service-icon">👤</div>
                <h3>个人主页 / 作品集</h3>
                <div className="price">¥99 <small>起</small></div>
                <p>适合学生、程序员、摄影师、设计师</p>
              </article>

              <article className="service-card">
                <div className="service-icon green">▣</div>
                <h3>小型展示官网</h3>
                <div className="price">¥299 <small>起</small></div>
                <p>适合工作室、小商家、个人品牌</p>
              </article>

              <article className="service-card">
                <div className="service-icon purple">&lt;/&gt;</div>
                <h3>网站修改 / 上线</h3>
                <div className="price">¥49 <small>起</small></div>
                <p>适合已有网站或 GitHub 项目</p>
              </article>
            </div>
          </div>
        </section>
        <section className="pricing-section" id="pricing">
  <div className="container">
    <div className="section-heading">
      <h2>套餐价格</h2>
      <p>简单透明的价格，满足不同需求。</p>
    </div>

    <div className="pricing-grid">
      <article className="pricing-card">
        <h3>个人主页</h3>
        <p className="pricing-desc">适合个人展示与作品集</p>

        <div className="pricing-price">
          ¥99 <small>起</small>
        </div>

        <ul>
          <li>✓ 1 个页面</li>
          <li>✓ 手机 + 电脑适配</li>
          <li>✓ 个人介绍</li>
          <li>✓ 项目展示</li>
          <li>✓ 1 次修改</li>
        </ul>

        <button
  className="pricing-button"
  type="button"
  onClick={() => choosePlan('个人主页 ¥99 起')}
>
  选择这个套餐
</button>
      </article>

      <article className="pricing-card featured">
        <div className="popular-badge">最受欢迎</div>

        <h3>展示网站</h3>
        <p className="pricing-desc">适合工作室、小商家、个人品牌</p>

        <div className="pricing-price">
          ¥299 <small>起</small>
        </div>

        <ul>
          <li>✓ 1–5 个页面</li>
          <li>✓ 手机 + 电脑适配</li>
          <li>✓ 服务介绍</li>
          <li>✓ 案例展示</li>
          <li>✓ 联系方式</li>
          <li>✓ 2 次修改</li>
        </ul>

        <button
  className="pricing-button primary"
  type="button"
  onClick={() => choosePlan('展示网站 ¥299 起')}
>
  选择这个套餐
</button>
      </article>

      <article className="pricing-card">
        <h3>定制需求</h3>
        <p className="pricing-desc">有特殊需求？先聊聊你的想法</p>

        <div className="pricing-price custom-price">
          单独报价
        </div>

        <ul>
          <li>✓ 根据功能评估</li>
          <li>✓ 上线支持</li>
          <li>✓ 页面拓展</li>
          <li>✓ 内容协助</li>
          <li>✓ 长期合作可谈</li>
        </ul>

        <button
  className="pricing-button"
  type="button"
  onClick={() => choosePlan('定制需求')}
>
  联系我们
</button>
      </article>
    </div>
  </div>
</section>
<section className="cases-section" id="cases">
  <div className="container">
    <div className="section-heading cases-heading">
      <div>
        <h2>Demo 案例</h2>
        <p>这里展示的是演示作品，用来让你了解我们能做出的效果。</p>
      </div>

      <span className="demo-label">DEMO / 演示案例</span>
    </div>

    <div className="cases-grid">

      <a
  className="case-card case-link"
  href="/developer-demo"
>
        <div className="case-preview developer-preview">
          <div className="case-mini-nav">
            <span>Alex.dev</span>
            <span>About · Work · Contact</span>
          </div>

          <div className="developer-content">
            <small>HELLO, I'M ALEX</small>
            <h3>
              Developer &
              <br />
              Creative Builder.
            </h3>
            <p>专注于 Web 开发与数字产品。</p>
            <button>查看作品</button>
          </div>

          <div className="code-box">
            <span>const idea =</span>
            <strong>"build it"</strong>
            <span>→ deploy();</span>
          </div>
        </div>

        <div className="case-info">
          <div>
            <h3>程序员作品集</h3>
            <p>展示个人介绍、技能、项目经历和联系方式。</p>
          </div>

          <span className="case-arrow">→</span>
        </div>
      </a>


      <a
  className="case-card case-link"
  href="/photography-demo"
>
        <div className="case-preview photo-preview">
          <div className="case-mini-nav dark">
            <span>Lens Studio</span>
            <span>作品 · 关于 · 联系</span>
          </div>

          <div className="photo-content">
            <div>
              <small>PHOTOGRAPHY</small>
              <h3>光影之间<br />记录美好</h3>
              <button>浏览作品</button>
            </div>

            <div className="photo-grid">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="case-info">
          <div>
            <h3>摄影工作室</h3>
            <p>用于展示摄影作品、服务内容和预约联系方式。</p>
          </div>

          <span className="case-arrow">→</span>
        </div>
      </a>


      <a
  className="case-card case-link"
  href="/profile-demo"
>
        <div className="case-preview personal-preview">
          <div className="case-mini-nav">
            <span>小林</span>
            <span>关于 · 作品 · 联系</span>
          </div>

          <div className="personal-content">
            <small>DESIGNER</small>
            <h3>
              你好，我是小林
              <br />
              一名独立设计师
            </h3>
            <p>记录设计、生活与正在做的事情。</p>
            <button>了解我</button>
          </div>

          <div className="personal-art">
            <div className="circle"></div>
            <div className="hill hill-one"></div>
            <div className="hill hill-two"></div>
          </div>
        </div>

        <div className="case-info">
          <div>
            <h3>个人主页</h3>
            <p>适合学生、设计师、创作者建立自己的个人网站。</p>
          </div>

          <span className="case-arrow">→</span>
        </div>
      </a>

    </div>
  </div>
</section>
<section className="process-section">
  <div className="container">
    <div className="section-heading">
      <h2>服务流程</h2>
      <p>简单 5 步，把你的想法变成可以访问的网站。</p>
    </div>

    <div className="process-grid">
      <div className="process-step">
        <div className="step-number">1</div>
        <h3>告诉我们需求</h3>
        <p>简单描述你想做的网站、风格和用途。</p>
      </div>

      <div className="process-step">
        <div className="step-number">2</div>
        <h3>确认价格和内容</h3>
        <p>我们评估需求，确认制作内容和报价。</p>
      </div>

      <div className="process-step">
        <div className="step-number">3</div>
        <h3>制作第一版</h3>
        <p>开始设计和开发，并提供第一版预览。</p>
      </div>

      <div className="process-step">
        <div className="step-number">4</div>
        <h3>提出修改</h3>
        <p>根据你的反馈，对页面进行调整。</p>
      </div>

      <div className="process-step">
        <div className="step-number">5</div>
        <h3>网站上线</h3>
        <p>确认完成后部署上线，并交付使用。</p>
      </div>
    </div>
  </div>
</section>
<section className="faq-section" id="faq">
  <div className="container">
    <div className="section-heading">
      <h2>常见问题</h2>
      <p>第一次做网站？这些可能是你最关心的问题。</p>
    </div>

    <div className="faq-grid">
      <details>
        <summary>多久能做好？</summary>
        <p>
          简单个人主页通常 1～3 天可以完成第一版，
          展示型网站一般需要 3～7 天，具体根据需求确定。
        </p>
      </details>

      <details>
        <summary>域名需要自己买吗？</summary>
        <p>
          可以自己购买。如果你不熟悉域名，我们也可以协助完成选择、
          解析和网站绑定。
        </p>
      </details>

      <details>
        <summary>可以帮我把网站上线吗？</summary>
        <p>
          可以。我们可以协助部署到合适的平台，
          并完成域名绑定和基础上线配置。
        </p>
      </details>

      <details>
        <summary>可以做商城或者复杂系统吗？</summary>
        <p>
          目前主要提供个人主页、作品集和小型展示网站。
          商城、复杂后台和大型系统暂时不作为标准服务。
        </p>
      </details>
    </div>
  </div>
</section>
<section className="contact-section" id="contact">
  <div className="container">
    <div className="contact-box">

      <div className="contact-main">
        <div className="section-heading">
          <h2>有想法？把需求发给我们看看。</h2>
          <p>
            不需要懂技术，告诉我们你想做什么就可以。
            我们会先了解需求，再确认是否适合以及大概费用。
          </p>
        </div>

        <form
  className="contact-form"
  onSubmit={handleSubmit}
>
  {selectedPlan && (
    <label>
      已选择套餐
      <input
        type="text"
        name="plan"
        value={selectedPlan}
        readOnly
      />
    </label>
  )}

  <div className="form-row">
    <label>
      姓名
      <input
        type="text"
        name="name"
        placeholder="例如：张三"
        required
      />
    </label>

    <label>
      手机号或邮箱
      <input
        type="text"
        name="contact"
        placeholder="例如：13800138000 或 name@example.com"
        pattern="(?:1[3-9][0-9]{9}|[^@ ]+@[^@ ]+[.][^@ ]+)"
        title="请输入正确的中国大陆手机号（11位）或邮箱地址"
        required
      />
    </label>
  </div>
          

          

          <label>
  想做什么
  <textarea
    name="request"
    rows="5"
    minLength="10"
    placeholder="例如：我想做一个展示摄影作品的个人网站……"
    required
  />
</label>

          <label>
            预算
            <select
              name="budget"
              defaultValue=""
              required
            >
              <option value="" disabled>
                请选择预算范围
              </option>
              <option>¥100 以下</option>
              <option>¥100～299</option>
              <option>¥300～599</option>
              <option>¥600 以上</option>
              <option>暂时不确定</option>
            </select>
          </label>

          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? '提交中...' : '提交需求'}
          </button>

          {formStatus === 'success' && (
            <p className="form-success">
              ✓ 提交成功，我们收到需求后会尽快联系你。
            </p>
          )}

          {formStatus === 'error' && (
            <p className="form-error">
              提交失败，请稍后重试，或者直接发送邮件联系我们。
            </p>
          )}
        </form>
      </div>

      <aside className="contact-side">
        <p className="contact-side-title">
          也可以直接联系我们
        </p>

        <div className="contact-item">
          <div className="contact-icon">✉</div>

          <div>
            <strong>邮箱</strong>
            <p>
              <a href="mailto:launchpagestudio@163.com">
                launchpagestudio@163.com
              </a>
            </p>
          </div>
        </div>
      </aside>

    </div>
  </div>
</section>

<footer className="footer">
  <div className="container footer-inner">
    <div className="logo">
      <span>LaunchPage</span> Studio
    </div>

    <p>© 2026 LaunchPage Studio</p>
  </div>
</footer>
      </main>
    </div>
  )
}



export default App
