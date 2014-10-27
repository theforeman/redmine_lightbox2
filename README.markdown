Redmine Lightbox plugin
=======================

This plugin lets you preview the image, pdf and swf attachments in a lightbox.

Screenshots
-----------

![Screenshot 1](http://img.skitch.com/20110303-gj7p1qyb984s1yjn1takdfsid7.medium.jpg)

![Screenshot 2](http://img.skitch.com/20110303-pufurh8rw42kin8h2jgjxu1nee.medium.jpg)

![Screenshot 3](http://img.skitch.com/20110303-q2bqemgwccnfqdtt7shimguwm7.medium.jpg) 

![Screenshot 4](http://img.skitch.com/20110401-c5fx2ccgb1bg64ydhfemurqqch.medium.jpg) 

Installation and Setup
----------------------

* Clone or [download](https://github.com/paginagmbh/redmine_lightbox/releases) this repo into your **redmine_root/plugins/** folder
```
$ git clone https://github.com/paginagmbh/redmine_lightbox.git
```
* You have to run the plugin rake task to provide the assets (from the Redmine root directory):
```
$ rake redmine:plugins:migrate RAILS_ENV=production
```
* Restart redmine

Compatibility
-------------

The latest version only supports redmine 2.6.0+.

A Redmine 2.0 - 2.5.x compatible version can be found in the `redmine-2.5-and-lower` branch.

For older version please download this package https://github.com/zipme/redmine_lightbox/zipball/7cd1d66d54f267015dcd0b0d0eadab251918de1d)