import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque error quisquam, sit voluptatem obcaecati accusantium eaque deserunt, perspiciatis ipsum, necessitatibus quibusdam accusamus impedit asperiores eius soluta voluptatibus aspernatur? Expedita, culpa?"
      />
      <Post author="Pedro Lucas" content="Um Novo post muito legal!" />
    </div>
  );
}
