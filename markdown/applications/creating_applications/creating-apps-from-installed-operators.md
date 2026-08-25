---
title: Creating applications from installed Operators
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating applications from installed Operators {id="creating-apps-from-installed-operators"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-apps-from-installed-operators" %}

You can deploy applications on your {{ product_title }} cluster from Operators that a cluster administrator installed. Use the **Installed Operators** page in the web console to create an application from an Operator custom resource (CR) API.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**

*   [What are Operators?](/operators/understanding/olm-what-operators-are#olm-what-operators-are)
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-creating-etcd-cluster-from-operator.md" %}{% endleveloffset %}