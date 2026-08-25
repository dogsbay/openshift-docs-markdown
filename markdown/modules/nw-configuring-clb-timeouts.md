{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Classic Load Balancer timeouts {id="nw-configuring-clb-timeouts_{{ context }}"}

You can configure the default timeouts for a Classic Load Balancer (CLB) to extend idle connections. {._abstract}

**Prerequisites**

*   You must have a deployed Ingress Controller on a running cluster.

**Procedure**

1.  Set an {{ aws_full }} connection idle timeout of five minutes for the default `ingresscontroller` by running the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontroller/default \
        --type=merge --patch='{"spec":{"endpointPublishingStrategy": \
        {"type":"LoadBalancerService", "loadBalancer": \
        {"scope":"External", "providerParameters":{"type":"AWS", "aws": \
        {"type":"Classic", "classicLoadBalancer": \
        {"connectionIdleTimeout":"5m"}}}}}}}'
    ```
1.  Optional: Restore the default value of the timeout by running the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontroller/default \
        --type=merge --patch='{"spec":{"endpointPublishingStrategy": \
        {"loadBalancer":{"providerParameters":{"aws":{"classicLoadBalancer": \
        {"connectionIdleTimeout":null}}}}}}}'
    ```

    :::note

    You must specify the `scope` field when you change the connection timeout value unless the current scope is already set. When you set the `scope` field, you do not need to do so again if you restore the default timeout value.
    
    :::