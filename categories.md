---
layout: default
title: Categories
permalink: /categories/
---
<section class="archive-page"><p class="eyebrow">// DIRECTORY</p><h1>Categories</h1>{% assign cats = site.categories | sort %}{% for category in cats %}<section id="{{ category[0] | slugify }}" class="archive-category"><h2>{{ category[0] }} <span>{{ category[1].size }}</span></h2><ul>{% for post in category[1] %}<li><time>{{ post.date | date: "%Y.%m.%d" }}</time><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>{% endfor %}</ul></section>{% endfor %}</section>
