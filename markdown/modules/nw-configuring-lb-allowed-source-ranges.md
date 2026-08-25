{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring load balancer allowed source ranges {id="nw-configuring-lb-allowed-source-ranges_{{ context }}"}

You can enable and configure the `spec.endpointPublishingStrategy.loadBalancer.allowedSourceRanges` parameter. By configuring load balancer allowed source ranges, you can limit the access to the load balancer for the Ingress Controller to a specified list of IP address ranges.  {._abstract}

The Ingress Operator reconciles the load balancer Service and sets the `spec.loadBalancerSourceRanges` parameter based on `AllowedSourceRanges`.


:::note

If you have already set the `spec.loadBalancerSourceRanges` parameter or the load balancer service anotation `service.beta.kubernetes.io/load-balancer-source-ranges` in a previous version of {{ product_title }}, Ingress Controller starts reporting `Progressing=True` after an upgrade. To fix this, set `AllowedSourceRanges` that overwrites the `spec.loadBalancerSourceRanges` parameter and clears the `service.beta.kubernetes.io/load-balancer-source-ranges` annotation. Ingress Controller starts reporting `Progressing=False` again.

:::


**Prerequisites**

*   You have a deployed Ingress Controller on a running cluster.

**Procedure**

*   Set the allowed source ranges API for the Ingress Controller by running the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontroller/default \
        --type=merge --patch='{"spec":{"endpointPublishingStrategy": \
        {"type":"LoadBalancerService", "loadbalancer": \
        {"scope":"External", "allowedSourceRanges":["0.0.0.0/0"]}}}}'
    ```

    where:

    `allowedSourceRanges`
    :   The example value `0.0.0.0/0` specifies the allowed source range.