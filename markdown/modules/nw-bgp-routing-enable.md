{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Border Gateway Protocol (BGP) routing {id="nw-bgp-routing-config_{{ context }}"}

To allow external network integration and route advertisement on supported infrastructure, you can enable Border Gateway Protocol (BGP) routing for your cluster by configuring the cluster network to use an FRR-based dynamic routing provider. {._abstract}

As a cluster administrator, you can enable BGP routing support for your cluster on bare-metal infrastructure.

If you are using BGP routing in conjunction with the MetalLB Operator, the necessary BGP routing support is enabled automatically. You do not need to manually enable BGP routing support.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in to the cluster as a user with the `cluster-admin` role.
*   The cluster is installed on compatible infrastructure.

**Procedure**

*   To enable a dynamic routing provider, enter the following command:
    ```terminal
    $ oc patch Network.operator.openshift.io/cluster --type=merge -p '{
      "spec": {
        "additionalRoutingCapabilities": {
          "providers": ["FRR"]
        }
      }
    }'
    ```