---
title: Removing the kubeadmin user
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Removing the kubeadmin user {id="removing-kubeadmin"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "removing-kubeadmin" %}

After installation, {{ product_title }} creates a cluster administrator user called `kubeadmin` with the `cluster-admin` role. To improve cluster security, you can remove this user after configuring an identity provider and creating a new `cluster-admin` user.

{% leveloffset +1 %}{% include "./modules/authentication-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/authentication-remove-kubeadmin.md" %}{% endleveloffset %}