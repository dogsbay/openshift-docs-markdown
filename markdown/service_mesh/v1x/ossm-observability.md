{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Data visualization and observability {id="ossm-observability-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "observability-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

You can view your application’s topology, health and metrics in the Kiali console. If your service is having issues, the Kiali console offers ways to visualize the data flow through your service. You can view insights about the mesh components at different levels, including abstract applications, services, and workloads. It also provides an interactive graph view of your namespace in real time.

**Before you begin**

You can observe the data flow through your application if you have an application installed.

{% if not (openshift_rosa or openshift_dedicated) %}
If you don’t have your own application installed, you can see how observability works in {{ SMProductName }} by installing the [Bookinfo sample application](/service_mesh/v1x/prepare-to-deploy-applications-ossm#ossm-tutorial-bookinfo-overview_deploying-applications-ossm-v1x).
{% endif %}

{% leveloffset +1 %}{% include "./modules/ossm-observability-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-observability-visual.md" %}{% endleveloffset %}