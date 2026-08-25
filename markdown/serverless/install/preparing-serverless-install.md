{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install {{ ServerlessProductName }} {id="preparing-serverless-install"}
{%- set context = "preparing-serverless-install" %}

Read the following information about supported configurations and prerequisites before you install {{ ServerlessProductName }}.

{%- if openshift_enterprise %}

*   {{ ServerlessProductName }} is supported for installation in a restricted network environment.
*   {{ ServerlessProductName }} currently cannot be used in a multi-tenant configuration on a single cluster.
{% endif %}

## Supported configurations {id="about-serverless-supported-configs"}

The set of supported features, configurations, and integrations for {{ ServerlessProductName }}, current and past versions, are available at the [Supported Configurations page](https://access.redhat.com/articles/4912821).

{% if openshift_enterprise %}
## Scalability and performance {id="about-serverless-scalability-performance"}

{{ ServerlessProductName }} has been tested with a configuration of 3 main nodes and 3 worker nodes, each of which has 64 CPUs, 457 GB of memory, and 394 GB of storage each.

The maximum number of Knative services that can be created using this configuration is 3,000. This corresponds to the [{{ product_title }} Kubernetes services limit of 10,000](/scalability_and_performance/planning-your-environment-according-to-object-maximums#cluster-maximums-major-releases_object-limits), since 1 Knative service creates 3 Kubernetes services.

The average scale from zero response time was approximately 3.4 seconds, with a maximum response time of 8 seconds, and a 99.9th percentile of 4.5 seconds for a simple Quarkus application. These times might vary depending on the application and the runtime of the application.
{% endif %}

{%- if openshift_enterprise %}

{% leveloffset +1 %}{% include "./modules/serverless-cluster-sizing-req.md" %}{% endleveloffset %}

## Scaling your cluster using compute machine sets {id="install-serverless-operator-scaling-with-machinesets"}

You can use the {{ product_title }} `MachineSet` API to manually scale your cluster up to the desired size. The minimum requirements usually mean that you must scale up one of the default compute machine sets by two additional machines. See [Manually scaling a compute machine set](/machine_management/manually-scaling-machineset#manually-scaling-machineset).

{% leveloffset +2 %}{% include "./modules/serverless-cluster-sizing-req-additional.md" %}{% endleveloffset %}

{% endif %}

{%- if openshift_dedicated or openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/serverless-cluster-sizing-req.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_preparing-serverless-install" ._additional-resources}
{%- if openshift_enterprise %}
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-software-catalog-overview)
*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
{% endif %}