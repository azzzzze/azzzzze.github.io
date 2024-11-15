---
layout: post
title: "Mon roman?"
categories: [Roman]
---

<div class="posts">
  {% for post in site.posts %}
    {% if post.categories contains "Roman" %}
      <article>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>