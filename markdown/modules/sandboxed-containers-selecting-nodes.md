{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ sandboxed_containers_first }} on selected nodes using the CLI {id="sandboxed-containers-selecting-nodes-CLI_{{ context }}"}

You can use labels to install the `kata` as a `RuntimeClass` on specific worker nodes.

By default, when you create the `KataConfig` custom resource (CR), the {{ sandboxed_containers_operator }} installs `kata` as a `RuntimeClass` on all worker nodes. Add labels to specific worker nodes and define the label in the `KataConfig` CR when you create it to install Kata only on the labeled nodes.

**Prerequisites**

*   You have installed {{ product_title }} {{ product_version }} on your cluster.
*   You have installed the OpenShift CLI (oc).
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ sandboxed_containers_operator }}.

**Procedure**

1.  Apply a label to a node using the following command:
    ```terminal
    $ oc label node <worker_node_name> <label_key=<label_value>
    ```
    ```terminal title="Example"
    $ oc label node worker_node_abc custom-kata-machine-pool=true
    ```
1.  Repeat this step for each node you want to label.
1.  Create a YAML file with the following manifest:
    ```yaml
        apiVersion: kataconfiguration.openshift.io/v1
        kind: KataConfig
        metadata:
          name: cluster-kataconfig
        spec:
          kataConfigPoolSelector:
            matchLabels:
               <label_key>: '<label_value>'
    ```
1.  Create the `KataConfig` resource:
    ```terminal
    $ oc create -f <file name>.yaml
    ```

The new `KataConfig` CR is created and begins to install `kata` as a `RuntimeClass` on the worker nodes.


:::important

{{ sandboxed_containers_first }} installs Kata only as a secondary, optional runtime on the cluster and not as the primary runtime.

:::


**Verification**

*   Monitor the installation progress:
    ```terminal
    $ watch oc describe kataconfig
    ```


    Once the value of **Completed nodes** equals the number of labeled nodes, the installation is complete.