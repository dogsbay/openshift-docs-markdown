{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring the data plane {id="hcp-monitor-dp_{{ context }}"}

While the deployment proceeds, you can monitor the data plane. {._abstract}

You can gather information about the following artifacts:

*   The cluster version
*   The nodes, specifically, about whether the nodes joined the cluster
*   The cluster Operators

**Procedure**

1.  Enter the following command to get the `kubeconfig` secret:
    ```
    $ oc get secret -n clusters-hosted-ipv4 admin-kubeconfig \
      -o jsonpath='{.data.kubeconfig}' | base64 -d > /root/hc_admin_kubeconfig.yaml
    ```
1.  Enter the following command to export the `kubeconfig` file for the deployment:
    ```
    $ export KUBECONFIG=/root/hc_admin_kubeconfig.yaml
    ```
1.  Enter the following command to monitor the deployment:
    ```
    $ watch "oc get clusterversion,nodes,co"
    ```