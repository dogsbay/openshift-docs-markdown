{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying an existing Ingress Controller for manual DNS management {id="modifying-an-existing-ingress-controller_{{ context }}"}

As a cluster administrator, you can modify an existing Ingress Controller to manually manage the DNS record lifecycle. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Modify the chosen Ingress Controller to set the `dnsManagementPolicy` parameter:  
    ```terminal
    $ SCOPE=$(oc -n openshift-ingress-operator get ingresscontroller <name> -o=jsonpath="{.status.endpointPublishingStrategy.loadBalancer.scope}")
    ```
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontrollers/default --type=merge --patch="{\"spec\":{\"endpointPublishingStrategy\":{\"type\":\"LoadBalancerService\",\"loadBalancer\":{\"dnsManagementPolicy\":\"Unmanaged\", \"scope\":\"${SCOPE}\"}}}}"
    ingresscontroller.operator.openshift.io/default patched
    ```
1.  Verify that the Ingress Controller was modified correctly by running the following command:
    ```terminal
    $ oc get ingresscontroller <name> -n openshift-ingress-operator -o=jsonpath={.spec.endpointPublishingStrategy.loadBalancer}
    ```

    Inspect the output and confirm that `dnsManagementPolicy` is set to `Unmanaged`.