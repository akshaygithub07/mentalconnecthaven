import React, { useState } from "react";

export function SelfAssessment() {
  const [currentQuiz, setCurrentQuiz] = useState<string>("");
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<{
    title: string;
    description: string;
  } | null>(null);

  // Quiz templates
  const quizzes = {
    anxiety: {
      title: "Anxiety Assessment",
      questions: [
        {
          id: "q1",
          text: "How often have you felt nervous, anxious, or on edge over the last 2 weeks?",
          options: [
            { value: "not-at-all", label: "Not at all" },
            { value: "several-days", label: "Several days" },
            { value: "more-than-half", label: "More than half the days" },
            { value: "nearly-everyday", label: "Nearly every day" },
          ],
        },
        {
          id: "q2",
          text: "How often have you been unable to stop or control worrying?",
          options: [
            { value: "not-at-all", label: "Not at all" },
            { value: "several-days", label: "Several days" },
            { value: "more-than-half", label: "More than half the days" },
            { value: "nearly-everyday", label: "Nearly every day" },
          ],
        },
      ],
      scoring: (responses: { [key: string]: string }) => {
        const scoreMap: { [key: string]: number } = {
          "not-at-all": 0,
          "several-days": 1,
          "more-than-half": 2,
          "nearly-everyday": 3,
        };

        const total = Object.values(responses).reduce(
          (sum, val) => sum + (scoreMap[val] || 0),
          0
        );

        if (total >= 5)
          return {
            title: "Consider Professional Support",
            description:
              "Your responses suggest you might benefit from speaking with a mental health professional.",
          };

        return {
          title: "Within Normal Range",
          description:
            "Your anxiety levels appear typical, but monitor any changes.",
        };
      },
    },
    depression: {
      title: "PHQ-9 Depression Screen",
      questions: [
        {
          id: "q1",
          text: "Little interest or pleasure in doing things?",
          options: [
            { value: "not-at-all", label: "Not at all" },
            { value: "several-days", label: "Several days" },
            { value: "more-than-half", label: "More than half the days" },
            { value: "nearly-everyday", label: "Nearly every day" },
          ],
        },
        {
          id: "q2",
          text: "Feeling down, depressed, or hopeless?",
          options: [
            { value: "not-at-all", label: "Not at all" },
            { value: "several-days", label: "Several days" },
            { value: "more-than-half", label: "More than half the days" },
            { value: "nearly-everyday", label: "Nearly every day" },
          ],
        },
      ],
      scoring: (responses: { [key: string]: string }) => {
        const scoreMap: { [key: string]: number } = {
          "not-at-all": 0,
          "several-days": 1,
          "more-than-half": 2,
          "nearly-everyday": 3,
        };

        const total = Object.values(responses).reduce(
          (sum, val) => sum + (scoreMap[val] || 0),
          0
        );

        if (total >= 10)
          return {
            title: "Seek Professional Help",
            description:
              "Your responses indicate significant depressive symptoms that warrant professional evaluation.",
          };

        if (total >= 5)
          return {
            title: "Mild Concerns",
            description: "Consider self-care strategies and monitor your mood.",
          };

        return {
          title: "Low Risk",
          description: "No significant depressive symptoms detected.",
        };
      },
    },
  };

  const handleResponse = (questionId: string, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (currentQuiz && quizzes[currentQuiz as keyof typeof quizzes]) {
      const quiz = quizzes[currentQuiz as keyof typeof quizzes];
      setResult(quiz.scoring(responses));
    }
  };

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Mental Health Self-Assessment
      </h2>

      {!currentQuiz ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(quizzes).map(([key, quiz]) => (
            <button
              key={key}
              onClick={() => setCurrentQuiz(key)}
              className="p-4 rounded-xl bg-muted/10 hover:bg-muted/20 transition-colors text-left"
            >
              <h3 className="font-medium">{quiz.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {quiz.questions.length} questions · 3-5 minutes
              </p>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {quizzes[currentQuiz as keyof typeof quizzes].questions.map(
              (question, index) => (
                <div key={question.id}>
                  <p className="font-medium">
                    {index + 1}. {question.text}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {question.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() =>
                          handleResponse(question.id, option.value)
                        }
                        className={`p-2 rounded-lg text-sm ${
                          responses[question.id] === option.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted/10 hover:bg-muted/20"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          {result ? (
            <div className="p-4 rounded-xl bg-muted/10">
              <h3 className="font-medium">{result.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {result.description}
              </p>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={
                Object.keys(responses).length <
                quizzes[currentQuiz as keyof typeof quizzes].questions.length
              }
              className="w-full p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-50"
            >
              Get Results
            </button>
          )}

          <button
            onClick={() => {
              setCurrentQuiz("");
              setResponses({});
              setResult(null);
            }}
            className="text-sm text-primary hover:underline"
          >
            ← Back to Assessments
          </button>

          <p className="text-sm text-muted-foreground mt-4">
            Note: This self-assessment is not a diagnostic tool. Always consult
            a qualified mental health professional for clinical evaluations.
          </p>
        </div>
      )}
    </section>
  );
}
