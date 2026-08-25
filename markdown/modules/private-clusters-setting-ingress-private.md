{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the Ingress Controller to private {id="private-clusters-setting-ingress-private_{{ context }}"}

You can configure the default Ingress Controller to use an internal endpoint so that application routes are published only in the private DNS zone. {._abstract}

After you deploy a cluster, you can modify its Ingress Controller to use only a private zone.

**Procedure**

1.  Modify the default Ingress Controller to use only an internal endpoint:
    ```terminal
    $ oc replace --force --wait --filename - <<EOF
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      namespace: openshift-ingress-operator
      name: default
    spec:
      endpointPublishingStrategy:
        type: LoadBalancerService
        loadBalancer:
          scope: Internal
    EOF
    ```
    ```terminal title="Example output"
    ingresscontroller.operator.openshift.io "default" deleted
    ingresscontroller.operator.openshift.io/default replaced
    ```

    The public DNS entry is removed, and the private zone entry is updated.