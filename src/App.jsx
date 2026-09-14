import { useEffect, useState } from 'react'
import './App.css'

function App() {
 useEffect(() => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }

      });
    },
    {
  threshold: 0.15,
  rootMargin: "0px 0px -120px 0px",
}
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();

}, []);
  const [formStatus, setFormStatus] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)
const [selectedPlan, setSelectedPlan] = useState('')
const [requestText, setRequestText] = useState('')
const [budget, setBudget] = useState('')
const [budgetOpen, setBudgetOpen] = useState(false)
useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const plan = params.get('plan')

  const planMap = {
    personal: '个人展示页 ¥199 起',
    standard: '标准展示官网 ¥499 起',
    brand: '品牌展示官网 ¥899 起',
  }

  if (plan && planMap[plan]) {
    setSelectedPlan(planMap[plan])
  }

  const hash = window.location.hash

  if (!hash) return

  const timer = setTimeout(() => {
    const target = document.querySelector(hash)

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, 150)

  return () => clearTimeout(timer)
}, [])

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

  setRequestText('')
  setBudget('')
  setBudgetOpen(false)
  setSelectedPlan('')
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
              <div className="badge">
  LaunchPage Studio · 网站制作服务
</div>

<h1>
  为个人创作者与小型品牌
  <br />
  打造<span>专业展示网站</span>
</h1>

<p className="hero-subtitle">
  从设计、开发到部署上线，一站式完成
</p>

<p className="hero-description">
  适用于个人主页、作品集、摄影展示、工作室官网。
  <br />
  响应式适配 · 快速上线 · 支持后续修改
</p>

              

              <div className="hero-actions">
                <a className="primary-button" href="#cases">
  查看案例 →
</a>

<a className="secondary-button" href="#contact">
  获取报价
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
                    <button
  type="button"
  onClick={() => {
    document
      .getElementById('services')
      ?.scrollIntoView({ behavior: 'smooth' })
  }}
>
  了解更多 →
</button>
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

        
        <section className="pricing fade-up" id="pricing">
  <div className="container">
    <div className="section-heading">
      <h2>套餐价格</h2>
      <p>简单透明的价格，满足不同需求。</p>
    </div>

    <div className="pricing-grid">
      <article className="pricing-card">
  <h3>个人展示页</h3>
  <p className="pricing-desc">
    适合学生、开发者、设计师和自由职业者
  </p>

  <div className="pricing-price">
    ¥199 <small>起</small>
  </div>

  <ul>
    <li>✓ 1 个完整页面</li>
    <li>✓ 手机 + 电脑适配</li>
    <li>✓ 个人介绍与联系方式</li>
    <li>✓ 项目 / 作品展示</li>
    <li>✓ 基础 SEO 设置</li>
    <li>✓ 网站部署上线</li>
    <li>✓ 1 次套餐内修改</li>
  </ul>

  <button
    className="pricing-button"
    type="button"
    onClick={() => choosePlan('个人展示页 ¥199 起')}
  >
    选择这个套餐
  </button>
</article>

      <article className="pricing-card featured">
  <div className="popular-badge">推荐</div>

  <h3>标准展示官网</h3>
  <p className="pricing-desc">
    适合工作室、小商家和个人品牌
  </p>

  <div className="pricing-price">
    ¥499 <small>起</small>
  </div>

  <ul>
    <li>✓ 1–5 个完整页面</li>
    <li>✓ 手机 + 电脑适配</li>
    <li>✓ 首页 / 服务 / 案例 / 关于 / 联系</li>
    <li>✓ 联系表单</li>
    <li>✓ 基础 SEO 设置</li>
    <li>✓ 域名绑定协助</li>
    <li>✓ 网站部署上线</li>
    <li>✓ 基础文案排版协助</li>
    <li>✓ 2 次套餐内修改</li>
  </ul>

  <button
    className="pricing-button primary"
    type="button"
    onClick={() => choosePlan('标准展示官网 ¥499 起')}
  >
    选择这个套餐
  </button>
</article>

      <article className="pricing-card">
  <h3>品牌展示官网</h3>

  <p className="pricing-desc">
    适合对品牌形象、内容呈现和设计质感要求更高的客户
  </p>

  <div className="pricing-price">
    ¥899 <small>起</small>
  </div>

  <ul>
    <li>✓ 3–6 个完整页面</li>
    <li>✓ 专属视觉方向与页面风格</li>
    <li>✓ 首页重点区域精细设计</li>
    <li>✓ 手机 + 电脑适配</li>
    <li>✓ 内容结构与信息层级梳理</li>
    <li>✓ 服务 / 案例 / FAQ / 联系表单</li>
    <li>✓ 图片与文案排版优化</li>
    <li>✓ 基础 SEO 设置</li>
    <li>✓ 域名绑定与部署上线</li>
    <li>✓ 3 次套餐内修改</li>
    <li>✓ 上线后 7 天基础问题支持</li>
  </ul>

  <button
    className="pricing-button"
    type="button"
    onClick={() => choosePlan('品牌展示官网 ¥899 起')}
  >
    选择这个套餐
  </button>
</article>
    </div>
    <div className="pricing-note">
  <strong>服务范围说明</strong>

  <p>
    以上套餐主要适用于个人主页、作品集、工作室和品牌展示类网站。
    如需预约、支付、会员、后台管理等扩展功能，可先评估后单独报价。
  </p>

  <p>
    域名及第三方付费服务按实际费用承担。
    超出套餐页面数量或新增功能，会在制作前确认费用后再开始。
  </p>
</div>
  </div>
</section>
<section className="cases-section fade-up" id="cases">
  <div className="container">
    <div className="section-heading cases-heading">
      <div>
        <h2>看看你的网站可以做成什么样</h2>
<p>
  以下均为演示项目，不是真实客户案例。
  选择与你需求接近的风格，进入查看完整效果。
</p>
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
            <h3>程序员个人主页 / 开发者作品集</h3>
<p>
  适合程序员、软件工程学生和独立开发者，
  展示项目、技术栈、经历和联系方式。
</p>
<div className="case-tags">
  <span>React</span>
  <span>响应式</span>
  <span>作品展示</span>
</div>
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
            <h3>摄影师作品集 / 摄影工作室官网</h3>
<p>
  适合摄影师和摄影工作室，
  用于展示作品、拍摄服务、品牌风格和预约方式。
</p>
<div className="case-tags">
  <span>图片展示</span>
  <span>作品集设计</span>
  <span>移动适配</span>
</div>
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
            <h3>个人主页 / 个人品牌作品集</h3>
<p>
  适合学生、设计师、创作者和自由职业者，
  集中展示个人介绍、作品、经历和联系方式。
</p>
<div className="case-tags">
  <span>个人品牌</span>
  <span>信息展示</span>
  <span>快速部署</span>
</div>
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
      <h2>从需求到上线，只需 5 步</h2>
      <p>
        制作内容、费用和修改范围都会提前确认，流程简单透明。
      </p>
    </div>

    <div className="process-grid">
      <div className="process-step">
        <div className="step-number">1</div>
        <h3>提交需求</h3>
        <p>
          告诉我们网站用途、喜欢的风格、需要的页面和参考网站。
        </p>
      </div>

      <div className="process-step">
        <div className="step-number">2</div>
        <h3>确认方案与报价</h3>
        <p>
          明确制作范围、价格和预计时间，确认后支付定金开始制作。
        </p>
      </div>

      <div className="process-step">
        <div className="step-number">3</div>
        <h3>制作第一版</h3>
        <p>
          完成页面设计与开发，提供可以直接查看的第一版网站。
        </p>
      </div>

      <div className="process-step">
        <div className="step-number">4</div>
        <h3>修改与确认</h3>
        <p>
          根据套餐内的修改次数调整内容，直到确认最终版本。
        </p>
      </div>

      <div className="process-step">
        <div className="step-number">5</div>
        <h3>尾款与正式上线</h3>
        <p>
          确认成品后结清尾款，完成域名绑定、部署上线和最终交付。
        </p>
      </div>
    </div>
  </div>
</section>
<section className="faq fade-up" id="faq">
  <div className="container">
    <div className="section-heading">
      <h2>常见问题</h2>
      <p>第一次做网站？这些是客户最常问的几个问题。</p>
    </div>

    <div className="faq-grid">
      <details className="faq-item">
        <summary>多久能做好？</summary>
        <p>
          一般个人展示页大约 2–4 天，标准展示官网约 4–7 天，
          品牌展示官网通常 7–10 天左右。具体时间会根据页面数量、
          资料准备情况和修改次数确认。
        </p>
      </details>

      <details className="faq-item">
        <summary>域名需要自己买吗？</summary>
        <p>
          可以自己购买，也可以先告诉我们你想用的域名名称，
          我们协助你完成购买和绑定。域名费用按实际平台价格计算，
          不包含在套餐内。
        </p>
      </details>

      <details className="faq-item">
        <summary>可以帮我把网站上线吗？</summary>
        <p>
          可以。我们会协助你完成部署上线、域名绑定和基础访问检查，
          让网站可以正式对外打开访问。
        </p>
      </details>

      <details className="faq-item">
        <summary>可以做商城或者会员系统吗？</summary>
        <p>
          当前套餐主要面向展示型网站。如果你需要预约、支付、会员、
          后台管理等扩展功能，可以先把需求发给我们，我们会先评估，
          再决定是否单独报价制作。
        </p>
      </details>

      <details className="faq-item">
        <summary>怎么付款？</summary>
        <p>
          确认需求、制作范围和报价后支付定金开始制作。
          第一版完成并按约定修改确认后，再结清尾款并正式上线。
          具体付款方式会在制作前确认。
        </p>
      </details>

      <details className="faq-item">
        <summary>套餐里的修改怎么算？</summary>
        <p>
          文字、图片、颜色和局部排版调整通常属于套餐内修改。
          如果中途新增页面、改变整体结构或增加新功能，
          会先说明新增费用，确认后再继续制作。
        </p>
      </details>

      <details className="faq-item">
        <summary>做网站前需要准备什么？</summary>
        <p>
          你只需要提供网站用途、名称、介绍文字、联系方式、图片素材，
          以及你喜欢的参考网站即可。如果暂时没有完整文案，
          我们也可以协助整理页面内容结构。
        </p>
      </details>

      <details className="faq-item">
        <summary>不会技术也能做吗？</summary>
        <p>
          可以。你不用懂代码，只要把需求、资料和想法告诉我们，
          我们会负责设计、制作、适配和上线，尽量让整个过程简单清楚。
        </p>
      </details>
    </div>
  </div>
</section>
<section className="trust-section">
  <div className="container">
    <div className="section-heading trust-heading">
      <span className="trust-eyebrow">WHY LAUNCHPAGE</span>

      <h2>第一次做网站，也可以很简单</h2>

      <p>
        我们把需求、制作、修改和上线拆成清楚的步骤，
        让你不用懂代码，也能知道网站正在做到哪一步。
      </p>
    </div>

    <div className="trust-grid">
      <article className="trust-card">
        <div className="trust-card-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <h3>制作前先确认</h3>

        <p>
          页面数量、功能范围、价格和预计时间都会提前沟通，
          确认后再开始制作。
        </p>
      </article>

      <article className="trust-card">
        <div className="trust-card-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16" />
            <path d="M7 3v4M17 3v4" />
            <rect x="4" y="5" width="16" height="16" rx="3" />
            <path d="m8 14 2.5 2.5L16 11" />
          </svg>
        </div>

        <h3>过程可以预览</h3>

        <p>
          第一版完成后先给你查看效果，再根据套餐范围进行修改，
          不需要等到上线才知道结果。
        </p>
      </article>

      <article className="trust-card">
        <div className="trust-card-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v12" />
            <path d="m8 11 4 4 4-4" />
            <path d="M5 19h14" />
          </svg>
        </div>

        <h3>从制作到上线</h3>

        <p>
          不只交给你一份代码，还会协助完成部署、域名绑定和上线检查，
          让网站真正可以访问。
        </p>
      </article>
    </div>
  </div>
</section>
<section className="contact-section fade-up" id="contact">
  <div className="container">
    <div className="contact-box">

      <div className="contact-main">
        <div className="section-heading contact-heading">
  <div className="contact-eyebrow">
    LET&apos;S BUILD TOGETHER
    <span></span>
  </div>

  <h2>
    有想法？
    <span className="contact-title-blue">
      把需求发给我们看看。
    </span>
  </h2>

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

  <div className="contact-input-wrap">
    <span className="contact-input-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
  </svg>
</span>

    <input
      type="text"
      name="name"
      placeholder="例如：张三"
      required
    />
  </div>
</label>
</div>

    <label>
手机号或邮箱


  <div className="contact-input-wrap">
    <span className="contact-input-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
</span>

    <input
      type="text"
      name="contact"
      placeholder="例如：13800138000 或 name@example.com"
      pattern="(?:1[3-9][0-9]{9}|[^@ ]+@[^@ ]+[.][^@ ]+)"
      title="请输入正确的中国大陆手机号（11位）或邮箱地址"
      required
    />
  </div>
</label>
  <label>
  想做什么

  <div className="contact-textarea-wrap">
    <span className="contact-textarea-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M14 3v5h5" />
    <path d="M8 13h8" />
    <path d="M8 17h6" />
  </svg>
</span>

    <textarea
      name="request"
      rows="5"
      minLength="10"
      maxLength="500"
      placeholder="例如：我想做一个展示摄影作品的个人网站……"
      value={requestText}
      onChange={(e) => setRequestText(e.target.value.slice(0, 500))}
      required
    />

    <span className="char-count">
      {requestText.length}/500
    </span>
  </div>
</label>


          <label className="budget-field">
  预算

  <div className="custom-select">
    <button
      type="button"
      className={`custom-select-trigger ${budgetOpen ? 'is-open' : ''} ${
        budget ? 'has-value' : ''
      }`}
      onClick={() => setBudgetOpen(!budgetOpen)}
      aria-haspopup="listbox"
      aria-expanded={budgetOpen}
    >
      <span className="custom-select-left">
        <span className="custom-select-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="m8.5 7.5 3.5 5 3.5-5" />
            <path d="M9 13h6" />
            <path d="M9 16h6" />
            <path d="M12 12.5V18" />
          </svg>
        </span>

        <span>{budget || '请选择预算范围'}</span>
      </span>

      <svg
        className="custom-select-chevron"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m7 10 5 5 5-5" />
      </svg>
    </button>

    <input type="hidden" name="budget" value={budget} />

    {budgetOpen && (
      <div className="custom-select-menu" role="listbox">
        {[
  '¥200 以内',
  '¥200～499',
  '¥500～899',
  '¥900～1499',
  '¥1500 以上',
  '暂时不确定',
].map((option) => (
          <button
            key={option}
            type="button"
            className={`custom-select-option ${
              budget === option ? 'is-selected' : ''
            }`}
            onClick={() => {
              setBudget(option)
              setBudgetOpen(false)
            }}
          >
            <span>{option}</span>

            {budget === option && (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4 4L19 6" />
              </svg>
            )}
          </button>
        ))}
      </div>
    )}
  </div>
</label>
              

          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting || !budget}
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
        <div className="contact-side-plane">
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M8 27 56 8 38 56 29 35 8 27Z" />
    <path d="M29 35 56 8" />
  </svg>
</div>
        <p className="contact-side-title">
          也可以直接联系我们
        </p>

        <div className="contact-item">
  <div className="contact-icon">✉</div>

  <div className="contact-email-content">
    <strong>邮箱</strong>

    <a href="mailto:launchpagestudio@163.com">
      launchpagestudio@163.com
    </a>
  </div>

  <button
    type="button"
    className="contact-copy-button"
    onClick={() => {
      navigator.clipboard.writeText('launchpagestudio@163.com')
    }}
    title="复制邮箱"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
    </svg>
  </button>
</div>


<div className="contact-item">
  <div className="contact-icon">💬</div>

  <div className="contact-email-content">
    <strong>微信</strong>

    <span>duty0629</span>
  </div>

  

      <button
    type="button"
    className="contact-copy-button"
    onClick={() => {
      navigator.clipboard.writeText('duty0629')
    }}
    title="复制微信号"
  >
    复制
  </button>
</div>
        <div className="contact-trust-list">

  <div className="contact-trust-item">
    <div className="trust-icon trust-blue">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
  </svg>
</div>
    <div>
      <strong>快速回复</strong>
      <p>通常 1 个工作日内回复</p>
    </div>
  </div>

  <div className="contact-trust-item">
    <div className="trust-icon trust-green">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 7.5 3.5 5 3.5-5" />
    <path d="M9 13h6" />
    <path d="M9 16h6" />
    <path d="M12 12.5V18" />
  </svg>
</div>
    <div>
      <strong>费用透明</strong>
      <p>先沟通需求，再确认方案和大概费用</p>
    </div>
  </div>

  <div className="contact-trust-item">
    <div className="trust-icon trust-purple">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
</div>
    <div>
      <strong>专业支持</strong>
      <p>从需求到上线，全程提供建议与支持</p>
    </div>
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
