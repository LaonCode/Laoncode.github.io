---
layout: default
title: 태그
permalink: /tags/
---
<div class="area-tag"><h2 class="title-search title-border">Tag</h2><div class="box-tag">{% assign tags = site.tags | sort %}{% for tag in tags %}<a href="/?tag={{ tag[0] | url_encode }}">#{{ tag[0] | escape }} ({{ tag[1].size }})</a>{% endfor %}</div></div>
