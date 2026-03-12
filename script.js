// ==================== 教師經歷資料 ====================
const experiences = [
  {
    title: "資深程式設計講師",
    period: "2020 - 至今",
    description:
      "專注於教授現代網頁開發技術,包括 HTML、CSS、JavaScript 及各種前端框架。曾指導超過 500 名學生成功轉職成為軟體工程師。",
  },
  {
    title: "全端工程師",
    period: "2015 - 2020",
    description:
      "在知名科技公司擔任全端工程師,負責大型專案的前後端開發,累積豐富的實戰經驗。參與多個企業級應用程式的開發與維護。",
  },
  {
    title: "技術顧問",
    period: "2018 - 至今",
    description:
      "為多家新創公司提供技術諮詢服務,協助制定技術架構、進行程式碼審查,並提供團隊培訓。成功輔導 20+ 專案上線。",
  },
  {
    title: "開源專案貢獻者",
    period: "2013 - 至今",
    description:
      "活躍於開源社群,為多個知名專案貢獻程式碼。定期參與技術研討會並分享最新的技術趨勢與實踐經驗。",
  },
];

// ==================== 課程資料 ====================
const courses = [
  {
    title: "生成式AI在土建工程之實務應用",
    description:
      "聚焦於如何運用生成式AI 工具,提升工作效率、優化流程與強化工程管理決策支持。",
    image: "images/生成式AI在土建工程之實務應用.jpg",
    sessions: [
      {
        batch: "第一梯次",
        date: "03/14、15、21(六日)",
        time: "09:00-16:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8143",
      },
      {
        batch: "第二梯次",
        date: "10/05、07、09、12、14、16(一三五)",
        time: "18:30-21:30",
        url: "https://store.cpc.org.tw/Train/Contents/TC8144",
      },
    ],
  },
  {
    title: "建築工程估價班",
    description:
      "培訓建築工程估算人員,以提升營建業在職人員技能水準及服務品質。",
    image: "images/建築工程估價班.jpg",
    sessions: [
      {
        batch: "第一梯次 確定開課",
        date: "03/21、22、23(六日一)",
        time: "08:30-17:30",
        url: "https://store.cpc.org.tw/Train/Contents/TC8130",
      },
      {
        batch: "第二梯次",
        date: "10/17、18、19(六日一)",
        time: "08:30-17:30",
        url: "https://store.cpc.org.tw/Train/Contents/TC8131",
      },
    ],
  },
  {
    title:
      "案例式導讀履約管理防禦工事讀本與日本工事寫真計畫導入應用_聚焦在中小規模工程",
    description:
      "期望對於中小規模技術顧問與營造業者,就公共工程品質管理事宜與工程法務,建構正確認知以促進品質提升降低作業成本減少爭議。",
    image:
      "images/案例式導讀履約管理防禦工事讀本與日本工事寫真計畫導入應用_聚焦在中小規模工程.jpg",
    sessions: [
      {
        batch: "第一梯次",
        date: "03/28、29(六日)",
        time: "09:00~17:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8134",
      },
      {
        batch: "第二梯次",
        date: "10/17、18(六日)",
        time: "09:00~17:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8135",
      },
    ],
  },
  {
    title: "機水電工程識圖基礎培訓班-視訊課",
    description: "培訓機水電工程識圖基礎能力,提升工程人員專業技能。",
    image: "images/機水電工程識圖基礎培訓班-視訊班.jpg",
    sessions: [
      {
        batch: "第一梯次 確定開課",
        date: "07/04、05、11、12(六日)",
        time: "09:00-16:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8140",
      },
      {
        batch: "第二梯次",
        date: "11/07、08、14、15(六日)",
        time: "09:00-16:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8139",
      },
    ],
  },
   {
    title: "建築物室內裝修工程管理實務班",
    description: "培訓室內裝修工程管理實務能力,提升專業技能與管理水準。",
    image: "images/建築物室內裝修工程管理實務班.jpg",
    sessions: [
      {
        batch: "",
        date: "08/15、16、22、23(六日)",
        time: "08:30-17:30",
        url: "https://store.cpc.org.tw/Train/Contents/TC8132",
      },
    ],
  },
  {
    title: "建築結構施工(低碳建築+基礎+模板+鋼筋+混凝土)",
    description:
      "深入學習建築結構施工技術,涵蓋低碳建築、基礎、模板、鋼筋與混凝土等專業知識。",
    image: "images/4.jpg",
    sessions: [
      {
        batch: "",
        date: "07/18、19、25(六日)",
        time: "09:00-16:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8142",
      },
    ],
  },
  {
    title: "建築識圖與估價實務班",
    description: "培訓建築識圖與估價實務能力,提升工程專業技能。",
    image: "images/建築識圖與估價實務班.jpg",
    sessions: [
      {
        batch: "",
        date: "04/12、18、19、25、26(六日)",
        time: "09:00-16:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8141",
      },
    ],
  },
  {
    title: "施工進度管理",
    description: "學習施工進度管理技巧,掌握專案時程控制與協調能力。",
    image: "images/施工進度管理.jpg",
    sessions: [
      {
        batch: "",
        date: "06/27、28(六日)",
        time: "09:00~17:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8133",
      },
    ],
  },
  {
    title: "機水電工程估價人員培訓班",
    description: "培訓機水電工程估價專業能力,提升工程估算技能與服務品質。",
    image: "images/機水電工程估價人員培訓班.jpg",
    sessions: [
      {
        batch: "",
        date: "06/06、07、14(六日)",
        time: "09:00-16:00",
        url: "https://store.cpc.org.tw/Train/Contents/TC8136",
      },
    ],
  },
];

// ==================== 生成經歷區塊 ====================
function renderExperiences() {
  const aboutContent = document.getElementById("aboutContent");

  experiences.forEach((exp, index) => {
    const expItem = document.createElement("div");
    expItem.className = "experience-item";
    expItem.style.animationDelay = `${index * 0.1}s`;

    expItem.innerHTML = `
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-period">${exp.period}</p>
            <p class="experience-description">${exp.description}</p>
        `;

    aboutContent.appendChild(expItem);
  });
}

// ==================== 生成課程卡片 ====================
function renderCourses() {
  const coursesGrid = document.getElementById("coursesGrid");

  courses.forEach((course, index) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.style.animationDelay = `${index * 0.1}s`;

    // 生成梯次資訊 HTML
    const sessionsHTML = course.sessions
      .map(
        (session) => `
            <div class="session-item">
                <div class="session-info">
                    <span class="session-batch">${session.batch}</span>
                    <div class="session-date-time">
                        <span class="session-date">📅 ${session.date}</span>
                        <span class="session-time">⏰ ${session.time}</span>
                    </div>
                </div>
                <div class="session-action">
                    <a href="${session.url}" target="_blank" class="session-link">立即報名</a>
                </div>
            </div>
        `
      )
      .join("");

    courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" />
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-sessions">
                    ${sessionsHTML}
                </div>
            </div>
        `;

    coursesGrid.appendChild(courseCard);
  });
}

// ==================== 平滑滾動效果 ====================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ==================== 滾動動畫效果 ====================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // 觀察所有需要動畫的元素
  const animatedElements = document.querySelectorAll(
    ".experience-item, .course-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ==================== 導航列滾動效果 ====================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });
}

// ==================== 初始化所有功能 ====================
document.addEventListener("DOMContentLoaded", () => {
  // 生成內容
  // renderExperiences(); // 已改為直接在 HTML 中顯示講師介紹
  renderCourses();

  // 初始化功能
  initSmoothScroll();
  initNavbarScroll();

  // 延遲初始化滾動動畫,確保元素已渲染
  setTimeout(() => {
    initScrollAnimations();
  }, 100);

  console.log("✅ 網站已成功載入!");
  console.log(`📚 共載入 ${experiences.length} 項經歷`);
  console.log(`🎓 共載入 ${courses.length} 門課程`);
});
