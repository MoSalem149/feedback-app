import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import { FeedbackProvider } from "./context/FeedbackContext";
import "./App.css";

function App() {
  return (
    <FeedbackProvider>
      <Header text="Feedback App" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
