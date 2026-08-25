{% if context == "operators-overview" %}
{%- set index = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Operators in {{ product_title }} {id="operators-overview_{{ context }}"}

Operators are the foundational control plane extensions of {{ product_title }}. Use Operators as the preferred method to package, deploy, and manage services on the control plane, and to support your applications. {._abstract}

Operators integrate with Kubernetes APIs and CLI tools such as `kubectl` and the {{ oc_first }}. 
Operators provide the means of monitoring applications, performing health checks, managing over-the-air (OTA) updates, and ensuring that applications remain in your specified state.

Operators also offer a more granular configuration experience. You configure each component by modifying the API that the Operator exposes instead of modifying a global configuration file.

Because CRI-O and the Kubelet run on every node, almost every other cluster function can be managed on the control plane by using Operators. Components that are added to the control plane by using Operators include critical networking and credential services.

While both follow similar Operator concepts and goals, Operators in {{ product_title }} are managed by two different systems, depending on their purpose:


Cluster Operators
:   Managed by the Cluster Version Operator (CVO) and installed by default to perform cluster functions.

Optional add-on Operators
:   Managed by Operator Lifecycle Manager (OLM) and can be made accessible for users to run in their applications. Also known as _OLM-based Operators_.

{% if context == "operators-overview" %}
{%- set index = false -%}
{% endif %}