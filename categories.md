---
layout: default
title: 카테고리
permalink: /categories/
---
<div class="area-common">{% for category in site.featured_categories %}<section><h3><a href="/?category={{ category | url_encode }}">{{ category | escape }} ({{ site.categories[category].size | default: 0 }})</a></h3></section>{% endfor %}<h2 class="title-search title-border">카테고리</h2>{% for category in site.categories %}<section><h3><a href="/?category={{ category[0] | url_encode }}">{{ category[0] | escape }} ({{ category[1].size }})</a></h3>{% for post in category[1] %}<p><a href="{{ post.url }}">{{ post.title | escape }}</a></p>{% endfor %}</section>{% endfor %}</div>
