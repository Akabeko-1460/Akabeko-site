"use client";

import AboutProfile from "../components/AboutProfile";
import AboutTimeline from "../components/AboutTimeline";
import { useLanguage } from "../contexts/LanguageContext";

// Static content - loaded at build time, but we use client component to access language context
const detailContentJa = `## ERP コンサルを志したきっかけ

私が ERP コンサルタントを志すようになったのは、小学生時代にまで遡ります。当時から漠然と「将来は企業の基幹システムを作りたい」という思いがありました。子供ながらに、企業の活動を支える仕組みに興味を持っていたのです。

高校時代になり、進路を真剣に考え始めた際、この幼い頃の夢を改めて思い出しました。企業の基幹システム、つまり ERP システムの導入や運用に携わることで、企業全体の業務効率化や経営改善に貢献できることを知り、ERP コンサルタントという職業に強く惹かれるようになりました。理系への転換を決意したのも、この目標を達成するために IT の専門知識を身につける必要があると考えたからです。

現在は基本情報技術者資格の取得や簿記 3 級の学習を通して、IT スキルとビジネス知識の両面から ERP コンサルタントに必要な基礎力を磨いています。

---

## PM を志したきっかけ

プロジェクトマネージャーを志すようになったのは、大学 2 年次の経験がきっかけです。

大学 2 年次に、私は自らメンバー 8 人とメンター 1 人を集めてアプリ開発プロジェクトを立ち上げました。このプロジェクトを通じて、チームをまとめ、目標に向かって導くことの難しさとやりがいを実感しました。技術的な課題解決だけでなく、メンバーのモチベーション管理やスケジュール調整、コミュニケーションの重要性を身をもって学ぶことができました。

この経験から、単にシステムを開発するだけでなく、プロジェクト全体を俯瞰し、チームを成功に導くプロジェクトマネージャーという役割に強い魅力を感じるようになりました。

---

## 強み・特徴

### 学業への真摯な姿勢

大学では GPA3.88 を獲得するなど、学業に真剣に取り組んでいます。解析学や線形代数学といった基礎科目をしっかりと学び、論理的思考力の基盤を築いています。

### 技術スキルの習得

デイトラ Python コースでプログラミングを学び、ハッカソンにも出場するなど、実践的な技術スキルの習得に積極的です。また、基本情報技術者資格を取得し、IT 基礎知識を体系的に身につけています。

### グローバルコミュニケーション

TOEIC 750 点を取得しており、グローバルな環境でのコミュニケーションにも対応できる英語力を有しています。

### 多様な興味と人間力

ほぼすべてのスポーツを好み、音楽にも興味を持つなど、多様な分野に関心を持っています。「人間が好き」という言葉に表れているように、人との関わりを大切にする姿勢は、コンサルタントや PM として必須の素養です。`;

const detailContentEn = `## Why I Want to Become an ERP Consultant

My aspiration to become an ERP consultant traces back to my elementary school days. Even then, I vaguely dreamed of "creating enterprise core systems in the future." As a child, I was already interested in the mechanisms that support business activities.

When I seriously started thinking about my career path in high school, I recalled this childhood dream. Learning that ERP system implementation and operation could contribute to company-wide operational efficiency and business improvement, I became strongly attracted to the profession of ERP consultant. My decision to switch to the science track was because I believed I needed IT expertise to achieve this goal.

Currently, I am building the foundational skills necessary for an ERP consultant through obtaining the Fundamental Information Technology Engineer certification and studying Bookkeeping Level 3, developing both IT skills and business knowledge.

---

## Why I Want to Become a PM

My aspiration to become a project manager was sparked by my experience in my second year of university.

In my second year, I launched an app development project by gathering 8 members and 1 mentor on my own. Through this project, I experienced both the challenges and rewards of bringing a team together and guiding them toward a goal. I learned firsthand the importance of not just technical problem-solving, but also motivation management, scheduling, and communication.

From this experience, I became strongly attracted to the role of project manager—someone who oversees the entire project and leads the team to success, rather than just developing systems.

---

## Strengths and Characteristics

### Sincere Approach to Academics

I take my studies seriously at university, achieving a GPA of 3.88. I have built a foundation for logical thinking by thoroughly studying fundamental subjects such as calculus and linear algebra.

### Technical Skill Acquisition

I actively work on acquiring practical technical skills, such as learning programming through the Daily Python course and participating in hackathons. I have also obtained the Fundamental Information Technology Engineer certification, systematically acquiring IT foundational knowledge.

### Global Communication

With a TOEIC score of 750, I have the English proficiency to communicate in global environments.

### Diverse Interests and People Skills

I enjoy almost all sports and am interested in music, showing interest in diverse fields. As expressed in the phrase "I love people," my attitude of valuing relationships with others is an essential quality for consultants and PMs.`;

export default function AboutPage() {
  const { t } = useLanguage();

  const qualifications = [
    t("about.qualifications.fe"),
    t("about.qualifications.toeic"),
    t("about.qualifications.calligraphy"),
    t("about.qualifications.driver"),
    t("about.qualifications.bookkeeping"),
  ];

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom max-w-[800px]">
        {/* Profile Card */}
        <AboutProfile
          detailContentJa={detailContentJa}
          detailContentEn={detailContentEn}
        />

        {/* Timeline Section */}
        <AboutTimeline />

        {/* Qualifications */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {t("about.qualifications.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {qualifications.map((q, i) => (
              <div
                key={i}
                className="bg-white p-4 border-l-4 border-gray-800 shadow-sm flex items-center"
              >
                <div className="w-2 h-2 bg-bain-red rounded-full mr-3" />
                <span className="font-bold text-gray-700">{q}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
