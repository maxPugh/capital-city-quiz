import { useNavigate } from "react-router-dom";
import Button from "../shared/components/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center gap-y-20 my-20 text-center">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-5xl font-bold md:text-7xl">Country Quiz</h1>
        <h2 className="text-xl md:text-2xl">
          Put your knowledge of capital cities to the test
        </h2>
      </div>
      <Button text="Start" handleClick={() => navigate("/quiz")} />
    </div>
  );
};

export default Home;
