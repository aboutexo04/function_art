import { useState } from "react";
const steps = [
  {
    title: "Week 9 - Function art",
    description: "Today, we'll create art work using functions in Scratch!",
    images: ["/images/first.png"],
  },
  {
    title: "Seating Chart",
    description:
      "Please check your seat and make sure you're in the right place.",
    images: ["/images/seating-chart-week9.png"],
  },
  {
    title: "Step 1: Draw threee backdrops",

    images: [
      "/images/1_backdrop1.png",
      "/images/2_backdrop2.png",
      "/images/3_backdrop3.png",
    ],
  },
  {
    title: "Step 2: Make function blocks",

    images: ["/images/4_makeablock.png", "/images/5_blockname.png"],
  },
  {
    title: "Step 3: Let's code for the green flag button",
    images: ["/images/6_start.png"],
  },
  {
    title: "Step 4: Let's code for circle function",
    images: ["/images/7_circle.png"],
  },
  {
    title: "Step 5: Let's code for another circle function",
    images: ["/images/8_circle2.png"],
  },
  {
    title: "Step 6: Let's code for start of drawing",
    images: ["/images/9_when1pressed.png"],
  },
  {
    title:
      "Step 7: Test your drawing and share the project to the studio week 9",
    description: "Dont forget to add your project to the studio week 9.",
  },
];

export default function ScratchGameTutorial() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  return (
    <div style={styles.container}>
      <div style={styles.progressBarWrapper}>
        <div
          style={{
            ...styles.progressBar,
            width: `${((stepIndex + 1) / steps.length) * 100}%`,
          }}
        />
      </div>
      <div style={styles.card}>
        <h2 style={styles.title}>{step.title}</h2>
        <p style={styles.description}>{step.description}</p>

        {/* Multiple images display section - vertical stack only */}
        {step.images && step.images.length > 0 && (
          <div style={styles.imagesContainer}>
            {step.images.map((image, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img
                  src={image}
                  alt={`${step.title} - image ${index + 1}`}
                  style={styles.image}
                />
              </div>
            ))}
          </div>
        )}

        <div style={styles.buttonRow}>
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            disabled={stepIndex === 0}
            style={{
              ...styles.button,
              ...(stepIndex === 0 ? styles.disabledButton : {}),
            }}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={stepIndex === steps.length - 1}
            style={{
              ...styles.button,
              ...(stepIndex === steps.length - 1 ? styles.disabledButton : {}),
            }}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarWrapper: {
    height: "10px",
    width: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1e88e5",
    transition: "width 0.3s ease",
  },
  container: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    padding: "1rem",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f0f8ff",
    borderRadius: "24px",
    border: "2px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: "1.5rem",
  },
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: "16px",
    border: "2px solid #90caf9",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  disabledButton: {
    backgroundColor: "#bbdefb",
    cursor: "not-allowed",
  },
};
