---
layout: default
title: Tags
permalink: /tags/
---
<section class="archive-page"><p class="eyebrow">// INDEX</p><h1>Tags</h1>{% assign tags = site.tags | sort %}{% for tag in tags %}<section id="{{ tag[0] | slugify }}" class="archive-category"><h2>#{{ tag[0] }} <span>{{ tag[1].size }}</span></h2><ul>{% for post in tag[1] %}<li><time>{{ post.date | date: "%Y.%m.%d" }}</time><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>{% endfor %}</ul></section>{% endfor %}</section>
