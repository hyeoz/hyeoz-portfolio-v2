import { useProgress } from '@react-three/drei';

function Loading() {
  const { progress } = useProgress();

  return (
    <article className="loading-wrapper h-screen-vh">
      <div className="progress-wrapper">
        <progress id="loading-progress" value={progress} max={100} />
      </div>
      <p className="progress-number">{progress.toFixed()}%</p>
    </article>
  );
}
export default Loading;
