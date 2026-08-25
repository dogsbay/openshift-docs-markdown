{% if context == "configuring-hybrid-networking" %}
{%- set post_install = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring hybrid networking with OVN-Kubernetes {id="configuring-hybrid-ovnkubernetes_{{ context }}"}

To configure hybrid networking with OVN-Kubernetes, you can set `hybridOverlayConfig` during installation or patch the Cluster Network Operator (CNO) after installation. {._abstract}


:::note

This configuration is necessary to run both Linux and Windows nodes in the same cluster.

:::


**Prerequisites**

{% if not post_install %}
*   You defined `OVNKubernetes` for the `networking.networkType` parameter in the `install-config.yaml` file. See the installation documentation for configuring {{ product_title }} network customizations on your chosen cloud provider for more information.
{% endif %}

{% if post_install %}
*   Install the OpenShift CLI (`oc`).
*   Log in to the cluster as a user with `cluster-admin` privileges.
*   Ensure that the cluster uses the OVN-Kubernetes network plugin.
{% endif %}

**Procedure**

{% if not post_install %}
1.  Change to the directory that contains the installation program and create the manifests:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```

    For the `<installation_directory>`, specify the name of the directory that contains the `install-config.yaml` file for your cluster.
1.  Create a stub manifest file for the advanced network configuration that is named `cluster-network-03-config.yml` in the `<installation_directory>/manifests/` directory:
    ```terminal
    $ cat <<EOF > <installation_directory>/manifests/cluster-network-03-config.yml
    apiVersion: operator.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
    EOF
    ```

    For `<installation_directory>`, specify the directory name that contains the `manifests/` directory for your cluster.
1.  Open the `cluster-network-03-config.yml` file in an editor and specify a hybrid networking configuration similar to the following example:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      defaultNetwork:
        ovnKubernetesConfig:
          hybridOverlayConfig:
            hybridClusterNetwork:
            - cidr: 10.132.0.0/14
              hostPrefix: 23
            hybridOverlayVXLANPort: 9898
    ```

    where:

    `spec.defaultNetwork.ovnKubernetesConfig.hybridOverlayConfig.hybridClusterNetwork`
    :   Specifies the CIDR configuration used for nodes on the additional overlay network. The `hybridClusterNetwork` CIDR must not overlap with the `clusterNetwork` CIDR.

    `spec.defaultNetwork.ovnKubernetesConfig.hybridOverlayConfig.hybridOverlayVXLANPort`
    :   Specifies a custom VXLAN port for the additional overlay network. This is required for running Windows nodes in a cluster installed on vSphere, and must not be configured for any other cloud provider. The custom port can be any open port excluding the default `6081` port. For more information on this requirement, see [Pod-to-pod connectivity between hosts is broken](https://docs.microsoft.com/en-us/virtualization/windowscontainers/kubernetes/common-problems#pod-to-pod-connectivity-between-hosts-is-broken-on-my-kubernetes-cluster-running-on-vsphere) in the Microsoft documentation.

    :::note

    Windows Server Long-Term Servicing Channel (LTSC): Windows Server 2019 is not supported on clusters with a custom `hybridOverlayVXLANPort` value because this Windows server version does not support selecting a custom VXLAN port.
    
    :::


1.  Save the `cluster-network-03-config.yml` file and quit the text editor.
1.  Optional: Back up the `manifests/cluster-network-03-config.yml` file. The installation program deletes the `manifests/` directory when creating the cluster.
{% endif %}

{% if post_install %}
1.  To configure the OVN-Kubernetes hybrid network overlay, enter the following command:
    ```terminal
    $ oc patch networks.operator.openshift.io cluster --type=merge \
      -p '{
        "spec":{
          "defaultNetwork":{
            "ovnKubernetesConfig":{
              "hybridOverlayConfig":{
                "hybridClusterNetwork":[
                  {
                    "cidr": "<cidr>",
                    "hostPrefix": <prefix>
                  }
                ],
                "hybridOverlayVXLANPort": <overlay_port>
              }
            }
          }
        }
      }'
    ```

    where:

    `<cidr>`
    :   Specifies the CIDR configuration used for nodes on the additional overlay network. This CIDR must not overlap with the cluster network CIDR.

    `<prefix>`
    :   Specifies the subnet prefix length to assign to each individual node. For example, if `hostPrefix` is set to `23`, then each node is assigned a `/23` subnet out of the given `cidr`, which allows for 510 (2^(32 - 23) - 2) pod IP addresses. If you are required to provide access to nodes from an external network, configure load balancers and routers to manage the traffic.

    `<overlay_port>`
    :   Specifies a custom VXLAN port for the additional overlay network. This is required for running Windows nodes in a cluster installed on vSphere, and must not be configured for any other cloud provider. The custom port can be any open port excluding the default `6081` port. For more information on this requirement, see [Pod-to-pod connectivity between hosts is broken](https://docs.microsoft.com/en-us/virtualization/windowscontainers/kubernetes/common-problems#pod-to-pod-connectivity-between-hosts-is-broken-on-my-kubernetes-cluster-running-on-vsphere) in the Microsoft documentation.

    :::note

    Windows Server Long-Term Servicing Channel (LTSC): Windows Server 2019 is not supported on clusters with a custom `hybridOverlayVXLANPort` value because this Windows server version does not support selecting a custom VXLAN port.
    
    :::

    ```text title="Example output"
    network.operator.openshift.io/cluster patched
    ```

1.  To confirm that the configuration is active, enter the following command. It can take several minutes for the update to apply.
    ```terminal
    $ oc get network.operator.openshift.io -o jsonpath="{.items[0].spec.defaultNetwork.ovnKubernetesConfig}"
    ```
{% endif %}
{% if post_install %}
{%- set post_install = false -%}
{% endif %}