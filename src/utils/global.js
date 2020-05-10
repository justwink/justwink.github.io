import urljoin from 'url-join'
import moment from 'moment'
import config from '../../data/SiteConfig'

const formatDate = date => moment.utc(date).format(config.dateFormat)

const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat)
  return urljoin(config.repo, '/blob/migrate/content/posts', `${date}-${post.slug}.md`)
}

export { formatDate, editOnGithub }