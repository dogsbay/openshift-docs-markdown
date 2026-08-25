{%- set _mod_docs_content_type = "PROCEDURE" %}
# Labeling a node to host egress IP addresses {id="nw-egress-ips-node_{{ context }}"}

You can apply the `k8s.ovn.org/egress-assignable=""` label to a node in your cluster so that {{ product_title }} can assign one or more egress IP addresses to the node. {._abstract}

**Prerequisites**

{% if not openshift_rosa %}
*   You installed the {{ oc_first }}.
{% endif %}
{% if openshift_rosa %}
*   You installed the ROSA CLI (`rosa`).
{%- endif %}
*   You logged in to the cluster as a cluster administrator.

**Procedure**

*   To label a node so that it can host one or more egress IP addresses, enter the following command:
    {%- if not openshift_rosa %}
    ```terminal
    $ oc label nodes <node_name> k8s.ovn.org/egress-assignable=""
    ```

    `<node_name>`
    :   Specifies the name of the node to label.

    :::tip

    You can alternatively apply the following YAML to add the label to a node:

    ```yaml
    apiVersion: v1
    kind: Node
    metadata:
      labels:
        k8s.ovn.org/egress-assignable: ""
      name: <node_name>
    ```
    
    :::

{% endif %}
{% if openshift_rosa %}
    ```terminal
    $ rosa edit machinepool <machinepool_name> --cluster=<cluster_name> --labels "k8s.ovn.org/egress-assignable="
    ```

    :::important

    This command replaces any existing node labels on your machinepool. You should include any of the desired labels to the `--labels` field to ensure that your existing node labels persist.
    
    :::

{% endif %}