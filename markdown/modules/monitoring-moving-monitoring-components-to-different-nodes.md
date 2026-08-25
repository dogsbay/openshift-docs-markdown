{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving monitoring components to different nodes {id="moving-monitoring-components-to-different-nodes_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" %}

To specify the nodes in your cluster on which monitoring stack components will run, configure the `nodeSelector` constraint for the components in the `cluster-monitoring-config` config map to match labels assigned to the nodes.


:::note

You cannot add a node selector constraint directly to an existing scheduled pod.

:::


You can move any of the components that monitor workloads for user-defined projects to specific worker nodes. 


:::warning

It is not permitted to move components to control plane or infrastructure nodes.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
*   You have installed the {{ oc_first }}.

{%- if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as a user with the `cluster-admin` cluster role or as a user with the `user-workload-monitoring-config-edit` role in the `openshift-user-workload-monitoring` project.
*   A cluster administrator has enabled monitoring for user-defined projects.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
*   The `user-workload-monitoring-config` `ConfigMap` object exists. This object is created by default when the cluster is created.
{%- endif %}
*   You have installed the {{ oc_first }}.

**Procedure**

1.  If you have not done so yet, add a label to the nodes on which you want to run the monitoring components:
    ```terminal
    $ oc label nodes <node_name> <node_label> (1)
    ```
    1.  Replace `<node_name>` with the name of the node where you want to add the label. 
    Replace `<node_label>` with the name of the wanted label.
1.  Edit the `{{ configmap_name }}`{minja} `ConfigMap` object in the `{{ namespace_name }}`{minja} project:
    ```terminal {minja}
    $ oc -n {{ namespace_name }} edit configmap {{ configmap_name }}
    ```
1.  Specify the node labels for the `nodeSelector` constraint for the component under `data/config.yaml`:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: {{ configmap_name }}
      namespace: {{ namespace_name }}
    data:
      config.yaml: |
        # ...
        <component>: (1)
          nodeSelector:
            <node_label_1> (2)
            <node_label_2> (3)
        # ...
    ```
    1.  Substitute `<component>` with the appropriate monitoring stack component name.
    1.  Substitute `<node_label_1>` with the label you added to the node.
    1.  Optional: Specify additional labels.
    If you specify additional labels, the pods for the component are only scheduled on the nodes that contain all of the specified labels.

    :::note

    If monitoring components remain in a `Pending` state after configuring the `nodeSelector` constraint, check the pod events for errors relating to taints and tolerations.
    
    :::

1.  Save the file to apply the changes. The components specified in the new configuration are automatically moved to the new nodes, and the pods affected by the new configuration are redeployed.

{%- set configmap_name = "" -%}
{%- set namespace_name = "" -%}