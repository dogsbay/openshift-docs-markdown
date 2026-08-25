---
title: Configuring the cluster-wide proxy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the cluster-wide proxy {id="enable-cluster-wide-proxy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "config-cluster-wide-proxy" %}

To enable your {{ product_title }} cluster to use an HTTP or HTTPS proxy when direct internet access is denied, you can configure cluster-wide proxy settings by modifying the `Proxy` object for existing clusters or by configuring proxy settings in the `install-config.yaml` file for new clusters.

After you enable a cluster-wide egress proxy for your cluster on a supported platform, {{ op_system_first }} populates the `status.noProxy` parameter with the values of the `networking.machineNetwork[].cidr`, `networking.clusterNetwork[].cidr`, and `networking.serviceNetwork[]` fields from your `install-config.yaml` file that exists on the supported platform.


:::note

As a postinstallation task, you can change the `networking.clusterNetwork[].cidr` value, but not the `networking.machineNetwork[].cidr` and the `networking.serviceNetwork[]` values. For more information, see "Configuring the cluster network range".

:::


For installations on {{ aws_first }}, {{ gcp_first }}, {{ azure_first }}, and {{ rh_openstack_first }}, the `status.noProxy` parameter is also populated with the instance metadata endpoint, `169.254.169.254`.

```yaml title="Example of values added to the status: segment of a Proxy object by {{ op_system }}"
apiVersion: config.openshift.io/v1
kind: Proxy
metadata:
  name: cluster
# ...
networking:
  clusterNetwork:
  - cidr: <ip_address_from_cidr>
    hostPrefix: 23
  network type: OVNKubernetes
  machineNetwork:
  - cidr: <ip_address_from_cidr>
  serviceNetwork:
  - 172.30.0.0/16
# ...
status:
  noProxy:
  - localhost
  - .cluster.local
  - .svc
  - 127.0.0.1
  - <api_server_internal_url>
# ...
```

where:


`<ip_address_from_cidr>`
:   Specifies IP address blocks from which pod IP addresses are allocated. The default value is `10.128.0.0/14` with a host prefix of `/23`.

`<ip_address_from_cidr>`
:   Specifies IP address blocks for machines. The default value is `10.0.0.0/16`.

`<ip_address_from_cidr>`
:   Specifies IP address block for services. The default value is `172.30.0.0/16`.

`<api_server_internal_url>`
:   You can find the URL of the internal API server by running the `oc get infrastructures.config.openshift.io cluster -o jsonpath='{.status.etcdDiscoveryDomain}'` command.


:::important

If node IP addresses fall outside the specified `networking.machineNetwork[].cidr` range, you must add the IP addresses to the `noProxy` field. This configuration ensures that traffic between nodes can bypass the proxy.

:::


## Prerequisites {id="prerequisites_cluster-wide-proxy"}

Review the [sites that your cluster requires access to](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) and determine whether any of them must bypass the proxy. By default, all cluster system egress traffic is proxied, including calls to the cloud provider API for the cloud that hosts your cluster. The system-wide proxy affects system components only, not user workloads. If necessary, add sites to the `spec.noProxy` parameter of the `Proxy` object to bypass the proxy.

{% leveloffset +1 %}{% include "./modules/nw-proxy-configure-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-proxy-remove.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-verify-proxy-configuration.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Configuring the cluster network range](/networking/configuring_network_settings/configuring-cluster-network-range#configuring-cluster-network-range)
*   [Understanding the CA Bundle certificate](/security/certificates/updating-ca-bundle#ca-bundle-understanding_updating-ca-bundle)
*   [Proxy certificates](/security/certificate_types_descriptions/proxy-certificates#proxy-cert-customization_proxy-certificates)
*   [How is the cluster-wide proxy setting applied to {{ product_title }} nodes?](https://access.redhat.com/solutions/7065528)