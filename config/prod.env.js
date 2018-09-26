module.exports = {
  NODE_ENV: '"production"',
  domainkey: JSON.stringify(process.env.domainkey),
  gitlabtoken: JSON.stringify(process.env.gitlabtoken),
  netlifytoken:JSON.stringify(process.env.netlifytoken)
}
