{%- if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{%- if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Cluster Image Registry Operator {id="cluster-image-registry-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Cluster Image Registry capability {id="_cluster_image_registry_capability"}
{% endif %}

{%- if cluster_caps %}
The Cluster Image Registry Operator provides features for the `ImageRegistry` capability.
{% endif %} {._abstract}

The Cluster Image Registry Operator manages a singleton instance of the {{ product_registry }}. It manages all configuration of the registry, including creating storage.

On initial start up, the Operator creates a default `image-registry` resource instance based on the configuration detected in the cluster. This indicates what cloud storage type to use based on the cloud provider.

If insufficient information is available to define a complete `image-registry` resource, then an incomplete resource is defined and the Operator updates the resource status with information about what is missing.

The Cluster Image Registry Operator runs in the `openshift-image-registry` namespace and it also manages the registry instance in that location. All configuration and workload resources for the registry reside in that namespace.

{% if cluster_caps %}
In order to integrate the image registry into the cluster’s user authentication and authorization system, an image pull secret is generated for each service account in the cluster.


:::important

If you disable the `ImageRegistry` capability or if you disable the integrated {{ product_registry }} in the Cluster Image Registry Operator’s configuration, the image pull secret is not generated for each service account.

:::


If you disable the `ImageRegistry` capability, you can reduce the overall resource footprint of {{ product_title }} in Telco environments. Depending on your deployment, you can disable this component if you do not need it.
{% endif %}


Project
:   See "cluster-image-registry-operator".

{% if context == "operator-reference" %}
{%- set operator_ref = false -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = false -%}
{% endif %}