require 'redmine'

require_dependency 'hooks/view_layouts_base_html_head_hook'

Redmine::Plugin.register :redmine_lightbox2 do
  name 'Redmine Lightbox 2'
  author 'G.K. & Tobias Fischer'
  description 'This plugin lets you preview image, pdf and swf attachments in a lightbox.'
  version '0.0.5'
  url 'https://github.com/paginagmbh/redmine_lightbox2'
  requires_redmine :version_or_higher => '2.6.0'
end
