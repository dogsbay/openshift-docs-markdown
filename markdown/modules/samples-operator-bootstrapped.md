{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster Samples Operator use of management state {id="samples-operator-bootstrapped_{{ context }}"}

The Cluster Samples Operator is bootstrapped as `Managed` by default or if global proxy is configured. {._abstract}

In the `Managed` state, the Cluster Samples Operator is actively managing its resources and keeping the component active to pull sample image streams and images from the registry and ensure that the requisite sample templates are installed.

Certain circumstances result in the Cluster Samples Operator bootstrapping itself as `Removed` including:

*   If the Cluster Samples Operator cannot reach the registry after three minutes on initial startup after a clean installation.
*   If the Cluster Samples Operator detects that it is on an IPv6 network.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   If the image controller configuration parameters prevent the creation of image streams by using the default image registry, or by using the image registry specified by `samplesRegistry` setting. For more information, see the following links:
    *   [Image controller configuration parameters](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/images/image-configuration-classic#images-configuration-parameters_image-configuration)
    *   [Cluster Samples Operator configuration parameters](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/images/configuring-samples-operator#samples-operator-configuration_configuring-samples-operator)
{% endif %}


:::note

For {{ product_title }}, the default image registry is
{%- if openshift_enterprise %}
`registry.redhat.io`.
{% endif %}
{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin %}
`registry.access.redhat.com` or `quay.io`.
{%- endif %}

:::


{% if openshift_enterprise or openshift_dedicated or openshift_origin %}
However, if the Cluster Samples Operator detects that it is on an IPv6 network and an {{ product_title }} global proxy is configured, then the IPv6 check supersedes all the checks. As a result, the Cluster Samples Operator bootstraps itself as `Removed`.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
However, if the Cluster Samples Operator detects that it is on an IPv6 network and a {{ product_title }} global proxy is configured, then the IPv6 check supersedes all the checks. As a result, the Cluster Samples Operator bootstraps itself as `Removed`.
{% endif %}


:::important

IPv6 installations are not currently supported by the registry. The Cluster Samples Operator pulls most of the sample image streams and images from the registry.

:::