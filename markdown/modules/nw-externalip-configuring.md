{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure external IP address blocks for your cluster {id="nw-externalip-configuring_{{ context }}"}

As a cluster administrator, you can configure the ExternalIP settings to provide predictable entry points for external traffic to reach your cluster. {._abstract}

The following list details these ExternalIP settings:

*   An ExternalIP address block used by {{ product_title }} to automatically populate the `spec.clusterIP` field for a `Service` object.
*   A policy object to restrict what IP addresses may be manually assigned to the `spec.clusterIP` array of a `Service` object.

**Prerequisites**

*   Install the {{ oc_first }}
*   Access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Optional: To display the current external IP configuration, enter the following command:
    ```terminal
    $ oc describe networks.config cluster
    ```
1.  To edit the configuration, enter the following command:
    ```terminal
    $ oc edit networks.config cluster
    ```
1.  Modify the ExternalIP configuration, as in the following example:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      ...
      externalIP:
      ...
    ```
    *   `externalIP`: Specify the configuration for the `externalIP` stanza.
1.  To confirm the updated ExternalIP configuration, enter the following command:
    ```terminal
    $ oc get networks.config cluster -o go-template='{{.spec.externalIP}}{{"\n"}}'
    ```