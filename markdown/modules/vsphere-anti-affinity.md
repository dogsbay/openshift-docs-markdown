{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring vSphere DRS anti-affinity rules for control plane nodes {id="anti-affinity-vsphere_{{ context }}"}

vSphere Distributed Resource Scheduler (DRS) anti-affinity rules can be configured to support higher availability of {{ product_title }} Control Plane nodes. Anti-affinity rules ensure that the vSphere Virtual Machines for the {{ product_title }} Control Plane nodes are not scheduled to the same vSphere Host. {._abstract}


:::important

*   The following information applies to compute DRS only and does not apply to storage DRS.
*   The `govc` command is an open-source command available from VMware; it is not available from Red Hat. The `govc` command is not supported by the Red Hat support.
*   Instructions for downloading and installing `govc` are found on the VMware documentation website.

:::


**Procedure**

1.  Create an anti-affinity rule by running the following command:
    ```terminal
    $ govc cluster.rule.create \
      -name openshift4-control-plane-group \
      -dc MyDatacenter -cluster MyCluster \
      -enable \
      -anti-affinity master-0 master-1 master-2
    ```

    After creating the rule, your control plane nodes are automatically migrated by vSphere so they are not running on the same hosts. This might take some time while vSphere reconciles the new rule.

    :::note

    The migration occurs automatically and might cause brief OpenShift API outage or latency until the migration finishes.
    
    :::

1.  If a control plane VM name changes or migrates to a new vSphere Cluster, update the DRS anti-affinity rule manually. Remove the existing rule by running the following command:
    ```terminal
    $ govc cluster.rule.remove \
      -name openshift4-control-plane-group \
      -dc MyDatacenter -cluster MyCluster
    ```
    ```terminal title="Example Output"
    [13-10-22 09:33:24] Reconfigure /MyDatacenter/host/MyCluster...OK
    ```
1.  Create the rule again with updated names by running the following command:
    ```terminal
    $ govc cluster.rule.create \
      -name openshift4-control-plane-group \
      -dc MyDatacenter -cluster MyOtherCluster \
      -enable \
      -anti-affinity master-0 master-1 master-2
    ```