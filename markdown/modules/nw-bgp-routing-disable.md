{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling Border Gateway Protocol (BGP) routing {id="nw-bgp-routing-config_{{ context }}"}

Disable Border Gateway Protocol (BGP) routing for your cluster by removing additional routing capabilities from the network configuration. {._abstract}

As a cluster administrator, you can disable BGP routing support for your cluster on bare-metal infrastructure.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in to the cluster as a user with the `cluster-admin` role.
*   The cluster is installed on compatible infrastructure.

**Procedure**

*   To disable dynamic routing, enter the following command:
    ```terminal
    $ oc patch Network.operator.openshift.io/cluster --type=merge -p '{
      "spec": { "additionalRoutingCapabilities": null }
    }'
    ```