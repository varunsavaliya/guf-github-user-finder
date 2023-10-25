import { useEffect, useState } from "react";

function useProfileStates() {
    const [profileStates, setProfileStates] = useState({
        githubData: [],
        searchText: "varun"
    })
//   const [githubData, setGithubData] = useState([]);
//   const [searchText, setSearchText] = useState("varun");
  async function fetchProfiles() {
    let data = await fetch(`https://api.github.com/users`).then((response) => {
      return response.json();
    });
    const users = data.map((u) => {
      return {
        avatar_url: u.avatar_url,
        github_url: u.html_url,
        name: u.login,
        id: u.id,
      };
    });
    setProfileStates((state) => ({...state, githubData: users}));
  }

  async function findProfiles() {
    let data = await fetch(
      `https://api.github.com/search/users?q=${profileStates.searchText}`
    ).then((response) => {
      return response.json();
    });
    data = data.items;

    const users = data.map((u) => {
      return {
        avatar_url: u.avatar_url,
        github_url: u.html_url,
        name: u.login,
        id: u.id,
      };
    });
    setProfileStates((state) => ({...state, githubData: users}));
  }

  useEffect(() => {
    if (profileStates.searchText) findProfiles();
    else fetchProfiles();
  }, [profileStates.searchText]);

  return { profileStates, setProfileStates };
}

export default useProfileStates;
