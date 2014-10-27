require 'redmine'

require_dependency 'hooks/view_layouts_base_html_head_hook'

Redmine::Plugin.register :redmine_lightbox do
  name 'Redmine Light Box plugin'
  author 'G.K.'
  description 'Lightbox for attachments'
  version '0.0.2'
  url 'https://github.com/paginagmbh/redmine_lightbox'
  author_url 'https://github.com/zipme/redmine_lightbox'
  requires_redmine :version_or_higher => '2.6.0'
end
