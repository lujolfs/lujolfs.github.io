---
layout: layout/base.njk
permalink: blog.html
title: Blog
description: Aqui é o blog!
featured_image: favicon.png
---
Aqui será o blog.
<ul class="none">
  {% assign top_posts = collections.posts | reverse %}
  {%- for post in top_posts -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
  {% endfor %}
</ul>
