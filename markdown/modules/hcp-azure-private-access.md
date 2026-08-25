{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing a private {{ azure_short }} hosted cluster {id="hcp-azure-private-access_{{ context }}"}

After you create a private hosted cluster, you need to take additional steps to access it. {._abstract}

**Prerequisites**

*   You completed the steps in "Creating a private {{ azure_short }} hosted cluster".

**Procedure**

*   To access a private hosted cluster by generating a `kubeconfig` file, enter the following command:
    ```terminal
    $ hcp create kubeconfig \
      --name ${CLUSTER_NAME} \
      --port-forward > ${CLUSTER_NAME}-kubeconfig
    ```
*   If you have access to the management cluster, you can port forward to the API server to access the private hosted cluster.
    1.  Port forward to the `kube-apiserver` service by entering the following command:
        ```terminal
        $ kubectl port-forward svc/kube-apiserver \
          -n clusters-${CLUSTER_NAME} 6443:6443 &
        ```
    1.  Access the hosted cluster by using the `kubeconfig` file:
        ```bash
        $ KUBECONFIG=${CLUSTER_NAME}-kubeconfig oc get nodes
        ```
*   If you have a virtual machine (VM) in an {{ azure_short }} Virtual Network (VNet) that is peered with the hosted cluster’s VNet, you can access the API server, but you must first link the private DNS zones to the peered VNet.

    :::note

    The Control Plane Operator links private DNS zones only to the hosted cluster’s VNet. If you want to resolve the API server hostname from a peered VNet, you must manually link the private DNS zones to that VNet as shown in the following steps. Otherwise, DNS resolution fails from the peered VNet.
    
    :::

    1.  Link the private DNS zone to your peered VNet as shown in the following example:
        ```bash
        $ PEERED_VNET_ID="/subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.Network/virtualNetworks/<vnet>"
        ```
    1.  Enter the following command:
        ```terminal
        $ az network private-dns link vnet create \
          --resource-group "${MANAGED_RG_NAME}" \
          --zone-name "${CLUSTER_NAME}.hypershift.local" \
          --name "peered-vnet-link" \
          --virtual-network "${PEERED_VNET_ID}" \
          --registration-enabled false
        ```
    1.  If you also need base-domain resolution, enter the following command:
        ```terminal
        $ az network private-dns link vnet create \
          --resource-group "${MANAGED_RG_NAME}" \
          --zone-name "${PARENT_DNS_ZONE}" \
          --name "peered-vnet-basedomain-link" \
          --virtual-network "${PEERED_VNET_ID}" \
          --registration-enabled false
        ```
    1.  Access the cluster as shown in the following example:
        ```bash
        $ KUBECONFIG=${CLUSTER_NAME}-kubeconfig oc get nodes
        ```