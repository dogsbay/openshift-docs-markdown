---
title: Architecture overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Architecture overview {id="architecture-overview"}

{%- if openshift_dedicated or openshift_rosa %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "architecture-overview" %}

{{ product_title }} is a cloud-based Kubernetes platform that provides the foundational architecture to build, deploy, and manage enterprise container workloads. {._abstract}

To learn more about {{ product_title }} and Kubernetes, see "Product architecture".

{% leveloffset +1 %}{% include "./modules/openshift-architecture-common-terms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Product architecture](/architecture/architecture#architecture)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [{{ product_title }} networking](/networking/networking_overview/understanding-networking#understanding-networking)
{%- endif %}
*   [{{ product_title }} storage](/storage/index#index)
*   [{{ product_title }} authentication](/authentication/index#index)
*   [OLM](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Introduction to OpenShift updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates)
{%- endif %}

{% if openshift_dedicated or openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/sd-vs-ocp.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/about-installation-and-updates.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/about-control-planes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-containerized-applications-for-developers.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/coreos-and-ignition.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/about-admission-plug-ins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/architecture-about-cgroup-v2.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [{{ hcp_capital }} overview](/hosted_control_planes/index#hcp-overview)
*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [{{ op_system_first }} architecture](/architecture/architecture-rhcos#architecture-rhcos)
{%- endif %}
*   [Understanding {{ product_title }} development](/architecture/understanding-development#understanding-development)
*   [Admission plugins](/architecture/admission-plug-ins#admission-plug-ins)
*   [Linux control group version 2](https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html)
*   [Pressure Stall Information](https://www.kernel.org/doc/html/latest/accounting/psi.html)