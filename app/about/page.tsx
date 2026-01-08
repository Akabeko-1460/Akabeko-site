import AboutProfile from "../components/AboutProfile";
import AboutTimeline from "../components/AboutTimeline";
import fs from "fs";
import path from "path";

// Function to read the markdown file
async function getDetailProfile() {
  const filePath = path.join(process.cwd(), "app/about/detailprofile.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
}

export default async function AboutPage() {
  const detailContent = await getDetailProfile();

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom max-w-[800px]">
        {/* Profile Card */}
        <AboutProfile detailContent={detailContent} />

        {/* Timeline Section */}
        <AboutTimeline />

        {/* Qualifications */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">資格</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "基本情報技術者",
              "TOEIC L&R 750点",
              "日本習字 (学生の部 八段 / 成人の部 準一段)",
              "普通自動車第一種運転免許",
              "日商簿記3級",
            ].map((q, i) => (
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
