{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating to load balancer allowed source ranges {id="nw-configuring-lb-allowed-source-ranges-migration_{{ context }}"}

If you have already set the annotation `service.beta.kubernetes.io/load-balancer-source-ranges`, you can migrate to load balancer allowed source ranges. When you set the `AllowedSourceRanges`, the Ingress Controller sets the `spec.loadBalancerSourceRanges` field based on the `AllowedSourceRanges` value and unsets the `service.beta.kubernetes.io/load-balancer-source-ranges` annotation. {._abstract}


:::note

If you have already set the `spec.loadBalancerSourceRanges` parameter or the load balancer service anotation `service.beta.kubernetes.io/load-balancer-source-ranges` in a previous version of {{ product_title }}, the Ingress Controller starts reporting `Progressing=True` after an upgrade. To fix this, set `AllowedSourceRanges` that overwrites the `spec.loadBalancerSourceRanges` parameter and clears the `service.beta.kubernetes.io/load-balancer-source-ranges` annotation. The Ingress Controller starts reporting `Progressing=False` again.

:::


**Prerequisites**

*   You have set the `service.beta.kubernetes.io/load-balancer-source-ranges` annotation.

**Procedure**

1.  Check that the `service.beta.kubernetes.io/load-balancer-source-ranges` is set by entering the following command:
    ```terminal
    $ oc get svc router-default -n openshift-ingress -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        service.beta.kubernetes.io/load-balancer-source-ranges: 192.168.0.1/32
    ```
1.  Check that the `spec.loadBalancerSourceRanges` parameter is unset by entering the following command:
    ```terminal
    $ oc get svc router-default -n openshift-ingress -o yaml
    ```
    ```yaml title="Example output"
    ...
    spec:
      loadBalancerSourceRanges:
      - 0.0.0.0/0
    ...
    ```
1.  Update your cluster to {{ product_title }} {{ product_version }}.
1.  Set the allowed source ranges API for the `ingresscontroller` by running the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontroller/default \
        --type=merge --patch='{"spec":{"endpointPublishingStrategy": \
        {"loadBalancer":{"allowedSourceRanges":["0.0.0.0/0"]}}}}'
    ```

    where:

    `allowedSourceRanges`
    :   The example value `0.0.0.0/0` specifies the allowed source range.