import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fullTextSections } from "@/data/dictionary";
import { renderWithGlossary } from "@/lib/renderGlossary";
import { motion } from "framer-motion";

const makeAnchorId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-zа-я0-9\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");

const FullText = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-10 md:py-16 px-6">
        <div className="container max-w-2xl">
          <div className="flex items-center justify-between mb-8">
            <Link to="/reading" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              Назад к фрагментам
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Полный текст</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Юности честное зерцало
            </h1>
          </motion.div>

          <section className="mb-12 rounded-lg border bg-card p-5">
            <h2 className="font-serif text-lg font-semibold text-primary mb-3">Оглавление</h2>
            <div className="grid gap-2">
              {fullTextSections.map((section) => {
                const anchor = makeAnchorId(section.title);
                return (
                  <a
                    key={section.id}
                    href={`#${anchor}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                );
              })}
            </div>
          </section>

          <div className="space-y-12">
            {fullTextSections.map((fragment, fi) => (
              <motion.article
                key={fragment.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: fi * 0.05 }}
                className="border-l-2 border-primary/10 pl-6 md:pl-8"
              >
                <h2
                  id={makeAnchorId(fragment.title)}
                  className="font-serif text-xl font-semibold text-primary mb-4 scroll-mt-24"
                >
                  {fragment.title}
                </h2>
                <div className="space-y-6">
                  {(fragment.text ?? "")
                    .split(/\n+/)
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, li) => (
                      <p key={li} className="reading-text text-foreground/90">
                        {renderWithGlossary(line, fragment.glossary ?? {})}
                      </p>
                    ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FullText;
