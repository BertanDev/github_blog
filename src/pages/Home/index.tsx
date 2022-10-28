import {
    ContainerPosts,
    SearchContainer,
    Label
} from "./styles";

import { PostCover } from "../../components/PostCover";
import { Profile } from "../../components/Profile";
import { useEffect, useState } from "react";
import { api } from "../../axios/api";

export function Home() {
  const [issues, setIssues] = useState([]);
  const [fetchParam, setFetchParam] = useState("");

  useEffect(() => {
    async function fetchIssues() {
      const q = `${
        fetchParam ? `${fetchParam}` : ""
      } repo:${"BertanDev"}/${"github_blog"}`;

      console.log(q);

      const response = await api.get("/search/issues", {
        params: { q },
      });

      setIssues(response.data.items);
    }

    fetchIssues();
  }, [fetchParam]);

  function alterParam(param) {
    setFetchParam(param);
  }

  return (
    <main>
      <Profile /> 

      <SearchContainer>
        <Label>
          <h2>Publicações</h2>
          <span>{issues.length} publicações</span>
        </Label>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={fetchParam}
          onChange={(e) => setFetchParam(e.target.value)}
        />

      </SearchContainer>

      <ContainerPosts>
        {issues.map((issue) => {
          return <PostCover issue={issue} key={issue.number} />;
        })}
      </ContainerPosts>
    </main>
  );
}
