const links_social_media = {
  github: 'Baabie',
  youtube: '',
  facebook: 'PamellaNamie',
  instagram: 'babiee_chan',
  twitter: '@Babiee_chan'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_image.src = data.avatar_url
      user_login.textContent = data.login
    })
}

getGitHubProfileInfos()
