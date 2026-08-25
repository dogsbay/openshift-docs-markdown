---
title: Creating applications from installed Operators
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating applications from installed Operators {id="olm-creating-apps-from-installed-operators"}
{%- set context = "olm-creating-apps-from-installed-operators" %}

You can deploy applications on your {{ product_title }} cluster from Operators that a cluster administrator installed. Use the **Installed Operators** page in the web console to create an application from an Operator custom resource (CR) API, such as an etcd cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-creating-etcd-cluster-from-operator.md" %}{% endleveloffset %}