import { useParams } from "react-router-dom";

export default function useWordsFromUrl() {
  const { words } = useParams();

  return atob(words!).split("\n");
}
