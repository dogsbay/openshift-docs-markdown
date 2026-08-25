{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites for OpenStack {id="hosted-clusters-openstack-prerequisites_{{ context }}"}

Before you create a hosted cluster on {{ rh_openstack_first }}, ensure that you meet the prerequisites. {._abstract}

*   You have administrative access to a management {{ product_title }} cluster version 4.17 or greater. This cluster can run on bare metal, {{ rh_openstack }}, or a supported public cloud.
*   The HyperShift Operator is installed on the management cluster as specified in "Preparing to deploy hosted control planes".
*   The management cluster is configured with OVN-Kubernetes as the default pod network CNI.
*   The OpenShift CLI (`oc`) and hosted control planes CLI, `hcp` are installed.
*   A load-balancer backend, for example, Octavia, is installed on the management OCP cluster. The load balancer is required for the `kube-api` service to be created for each hosted cluster.
    *   When ingress is configured with an Octavia load balance, the {{ rh_openstack }} Octavia service is running in the cloud that hosts the guest cluster.
*   A valid pull secret file is present for the `quay.io/openshift-release-dev` repository.
*   The default external network for the management cluster is reachable from the guest cluster. The `kube-apiserver` load-balancer type service is created on this network.
*   If you use a pre-defined floating IP address for ingress, you created a DNS record that points to it for the following wildcard domain: `*.apps.<cluster_name>.<base_domain>`, where:
    *   `<cluster_name>` is the name of the management cluster.
    *   `<base_domain>` is the parent DNS domain under which your cluster’s applications live.