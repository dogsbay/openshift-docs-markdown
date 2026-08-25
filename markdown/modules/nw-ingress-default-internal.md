{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the default Ingress Controller for your cluster to be internal {id="nw-ingress-default-internal_{{ context }}"}

You can configure the `default` Ingress Controller for your cluster to be internal by deleting and recreating it.

{% if not (openshift_rosa or openshift_dedicated) %}

:::warning

If your cloud provider is Microsoft Azure, you must have at least one public load balancer that points to your nodes.
If you do not, all of your nodes will lose egress connectivity to the internet.

:::

{% endif %}


:::important

If you want to change the `scope` for an `IngressController`, you can change the `.spec.endpointPublishingStrategy.loadBalancer.scope` parameter after the custom resource (CR) is created.

:::


**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Configure the `default` Ingress Controller for your cluster to be internal by deleting and recreating it.
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