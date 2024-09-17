---
layout: layout/base.njk
permalink: index.html
title: Página inicial
description: Ah maenri
featured_image: favicon.png
---
# Olá!

Testando coisas! Uôu!

<strong>Vasco da Gama</strong>

**Maneiro**

## Últimas postagens do Blog
<div id="recentpostlistdiv">
    <ul>
        {% assign top_posts = collections.posts | reverse %}
            {%- for post in top_posts limit: 5 -%}
                <li><a href="{{ post.data.permalink }}">{{post.data.date | readableDate }} >> {{ post.data.title }} </a></li>
            {% endfor %}<li class="moreposts"><a href="blog.html">>> Blog</a></li>
    </ul>
</div>