{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an Ingress Controller for manual DNS management {id="creating-a-custom-ingress-controller_{{ context }}"}

As a cluster administrator, you can create a new custom Ingress Controller with the Unmanaged DNS management policy. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create an `IngressController` custom resource (CR) file named `sample-ingress.yaml` with the following content:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      namespace: openshift-ingress-operator
      name: <name>
    spec:
      domain: <domain>
      endpointPublishingStrategy:
        type: LoadBalancerService
        loadBalancer:
          scope: External
          dnsManagementPolicy: Unmanaged
    ```

    where:

    `metadata.name`
    :   Specify the `<name>` with a name for the `IngressController` object.

    `spec.domain`
    :   Specify the `domain` based on the DNS record that was created as a prerequisite.

    `loadBalancer.scope`
    :   Specify the `scope` as `External` to expose the load balancer externally.
        `loadBalancer.dnsManagementPolicy`: Specifies if the Ingress Controller is managing the lifecycle of the wildcard DNS record associated with the load balancer. The valid values are `Managed` and `Unmanaged`. The default value is `Managed`.

1.  Apply the manifest to create the `IngressController` object:
    ```terminal
    $ oc apply -f sample-ingress.yaml
    ```
1.  Verify that the Ingress Controller was created with the correct policy by running the following command:
    ```terminal
    $ oc get ingresscontroller <name> -n openshift-ingress-operator -o=jsonpath={.spec.endpointPublishingStrategy.loadBalancer}
    ```

    Inspect the output and confirm that `dnsManagementPolicy` is set to `Unmanaged`.