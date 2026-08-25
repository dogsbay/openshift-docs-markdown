{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported configurations {id="ossm-supported-configurations_{{ context }}"}

The following configurations are supported for the current release of {{ SMProductName }}.

## Supported platforms {id="ossm-supported-platforms_{{ context }}"}

The {{ SMProductName }} Operator supports multiple versions of the `ServiceMeshControlPlane` resource. Version {{ MaistraVersion }} {{ SMProductShortName }} control planes are supported on the following platform versions:

{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   Red Hat OpenShift Container Platform version 4.10 or later
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   Red Hat {{ product_title }} version 4.10 or later
{%- endif %}
*   {{ product_dedicated }} version 4
*   Azure Red Hat OpenShift (ARO) version 4
*   Red Hat OpenShift Service on AWS
*   Red Hat OpenShift Service on AWS classic architecture

## Unsupported configurations {id="ossm-unsupported-configurations_{{ context }}"}

Explicitly unsupported cases include:

*   OpenShift Online is not supported for {{ SMProductName }}.
*   {{ SMProductName }} does not support the management of microservices outside the cluster where {{ SMProductShortName }} is running.

## Supported network configurations {id="ossm-supported-configurations-networks_{{ context }}"}

{{ SMProductName }} supports the following network configurations.

*   OpenShift-SDN
*   OVN-Kubernetes is available on all supported versions of {{ product_title }}.
*   Third-Party Container Network Interface (CNI) plugins that have been certified on {{ product_title }} and passed {{ SMProductShortName }} conformance testing. See [Certified OpenShift CNI Plug-ins](https://access.redhat.com/articles/5436171) for more information.

## Supported configurations for {{ SMProductShortName }} {id="ossm-supported-configurations-sm_{{ context }}"}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   This release of {{ SMProductName }} is only available on {{ product_title }} x86_64, {{ ibm_z_name }}, and {{ ibm_power_name }}.
    *   {{ ibm_z_name }} is only supported on {{ product_title }} 4.10 and later.
    *   {{ ibm_power_name }} is only supported on {{ product_title }} 4.10 and later.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
*   This release of {{ SMProductName }} is only available on {{ product_title }} x86_64.
{%- endif %}
*   Configurations where all {{ SMProductShortName }} components are contained within a single {{ product_title }} cluster.
*   Configurations that do not integrate external services such as virtual machines.
*   {{ SMProductName }} does not support `EnvoyFilter` configuration except where explicitly documented.

## Supported configurations for Kiali {id="ossm-supported-configurations-kiali_{{ context }}"}

*   The Kiali console is only supported on the two most recent releases of the Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari browsers.
*   The `openshift` authentication strategy is the only supported authentication configuration when Kiali is deployed with {{ SMProductName }} (OSSM). The `openshift` strategy controls access based on the individual’s role-based access control (RBAC) roles of the {{ product_title }}.

## Supported configurations for Distributed Tracing {id="ossm-supported-configurations-jaeger_{{ context }}"}

*   Jaeger agent as a sidecar is the only supported configuration for Jaeger. Jaeger as a daemonset is not supported for multitenant installations or OpenShift Dedicated.

## Supported WebAssembly module {id="ossm-supported-configurations-webassembly_{{ context }}"}

*   3scale WebAssembly is the only provided WebAssembly module. You can create custom WebAssembly modules.