{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Cluster Network Addons Operator {id="virt-about-cluster-network-addons-operator_{{ context }}"}

The Cluster Network Addons Operator, `cluster-network-addons-operator`, deploys networking components on a cluster and manages the related resources for extended network functionality. {._abstract}

![cluster-network-addons-operator components](/_assets/images/cnv_components_cluster-network-addons-operator.png)

**Cluster Network Addons Operator components**

| **Component** | **Description** |
| --- | --- |
| `deployment/kubemacpool-cert-manager` | Manages TLS certificates of Kubemacpool’s webhooks. |
| `deployment/kubemacpool-mac-controller-manager` | Provides a MAC address pooling service for virtual machine (VM) network interface cards (NICs). |
| `daemonset/bridge-marker` | Marks network bridges available on nodes as node resources. |
| `daemonset/kube-cni-linux-bridge-plugin` | Installs Container Network Interface (CNI) plugins on cluster nodes, enabling the attachment of VMs to Linux bridges through network attachment definitions. |