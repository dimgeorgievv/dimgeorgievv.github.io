---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% if page.author and site.data.authors[page.author] %}
  {% assign author = site.data.authors[page.author] %}{% else %}{% assign author = site.author %}
{% endif %}

{% if author.googlescholar %}
  <p>For a full list, check <a href="{{author.googlescholar}}">my Google Scholar profile</a>.</p>
{% endif %}

<br>

<p>Selected publications:</p>

<br>

{% for post in site.publications reversed %}
  {% include archive-single-publication.html %}
{% endfor %}
