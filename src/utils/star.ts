// 获取GitHub仓库的Star数量
export function getRepoStarCount(githubUrl) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) {
    return Promise.reject(new Error('Invalid GitHub URL'));
  }
  const owner = match[1];
  const repo = match[2];
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
  console.log('apiUrl', apiUrl);
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.stargazers_count)
    .catch((error) => {
      console.error('Error fetching star count:', error);
      return null;
    });
}

export function updateProjectsStarCount(projects) {
  const fetchPromises = projects.map((project, index) => {
    return getRepoStarCount(project.github).then((starCount) => {
      console.log('starCount', starCount);
      if (starCount !== null) {
        projects[index].star = starCount;
      }
    });
  });

  return Promise.all(fetchPromises).then(() => projects);
}
