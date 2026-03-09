import { Link } from "react-router-dom";
import { ArrowLeft, BookText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { readingContent } from "@/data/dictionary";
import { motion } from "framer-motion";
import WordTooltip from "@/components/WordTooltip";
import { renderWithGlossary } from "@/lib/renderGlossary";

const Reading = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-10 md:py-16 px-6">
        <div className="container max-w-2xl">
          {/* Breadcrumbs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={14} />
              Главная
            </Link>
            <Link to="/dictionary" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
              <BookText size={14} />
              Словарь
            </Link>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Фрагменты произведения</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Юности честное зерцало
            </h1>
            <p className="text-sm text-muted-foreground mt-3">
              Наведите на{" "}
              <span className="word-highlight pointer-events-none">выделенные слова</span>
              {" "}для пояснения
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/reading/full"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Прочитать полностью
              </Link>
            </div>
          </motion.div>

          {/* Text fragments */}
          <div className="space-y-12">
            {readingContent.map((fragment, fi) => (
              <motion.article
                key={fragment.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: fi * 0.1 }}
                className="border-l-2 border-primary/10 pl-6 md:pl-8"
              >
                <h2 className="font-serif text-xl font-semibold text-primary mb-4">{fragment.title}</h2>
                {fragment.text ? (
                  <div className="space-y-6">
                    {fragment.text
                      .split(/\n+/)
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line, li) => (
                        <p key={li} className="reading-text text-foreground/90">
                          {renderWithGlossary(line, fragment.glossary ?? {})}
                        </p>
                      ))}
                  </div>
                ) : (
                  <p className="reading-text text-foreground/90">
                    {fragment.parts?.map((part, pi) =>
                      part.wordId ? (
                        <WordTooltip key={pi} wordId={part.wordId}>
                          {part.text}
                        </WordTooltip>
                      ) : (
                        <span key={pi}>{part.text}</span>
                      )
                    )}
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reading;
