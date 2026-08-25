# {{ SMProductName }} supported configurations {id="ossm-supported-configurations-v1x_{{ context }}"}

The following are the only supported configurations for the {{ SMProductName }}:

*   {{ product_title }} version 4.6 or later.


:::note

OpenShift Online and {{ product_dedicated }} are not supported for {{ SMProductName }}.

:::


*   The deployment must be contained within a single {{ product_title }} cluster that is not federated.
*   This release of {{ SMProductName }} is only available on {{ product_title }} x86_64.
*   This release only supports configurations where all {{ SMProductShortName }} components are contained in the {{ product_title }} cluster in which it operates. It does not support management of microservices that reside outside of the cluster, or in a multi-cluster scenario.
*   This release only supports configurations that do not integrate external services such as virtual machines.

For additional information about {{ SMProductName }} lifecycle and supported configurations, refer to the [Support Policy](https://access.redhat.com/support/policy/updates/openshift#ossm).

## Supported configurations for Kiali on {{ SMProductName }} {id="ossm-supported-configurations-kiali_{{ context }}"}

*   The Kiali observability console is only supported on the two most recent releases of the Chrome, Edge, Firefox, or Safari browsers.

## Supported Mixer adapters {id="ossm-supported-configurations-adapters_{{ context }}"}

*   This release only supports the following Mixer adapter:
    *   3scale Istio Adapter