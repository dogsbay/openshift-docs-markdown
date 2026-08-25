{%- set _mod_docs_content_type = "PROCEDURE" %}
# Switching the Ingress Controller from using a Classic Load Balancer to a Network Load Balancer {id="nw-aws-switching-clb-with-nlb_{{ context }}"}

To improve performance and reduce latency for cluster traffic in {{ product_title }} on {{ aws_full }}, switch an Ingress Controller using a Classic Load Balancer (CLB) to one that uses a Network Load Balancer (NLB). {._abstract}

Switching between these load balancers does not delete the `IngressController` object.


:::warning

This procedure might cause an outage that can last several minutes due to new DNS records propagation, new load balancers provisioning, and other factors. IP addresses and canonical names of the Ingress Controller load balancer might change after applying this procedure.

:::


**Procedure**

1.  Modify the existing Ingress Controller that you want to switch to by using an NLB. This example assumes that your default Ingress Controller has an `External` scope and no other customizations:
    ```yaml title="Example ingresscontroller.yaml file"
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      creationTimestamp: null
      name: default
      namespace: openshift-ingress-operator
    spec:
      endpointPublishingStrategy:
        loadBalancer:
          scope: External
          providerParameters:
            type: AWS
            aws:
              type: NLB
        type: LoadBalancerService
    ```

    :::note

    If you do not specify a value for the `spec.endpointPublishingStrategy.loadBalancer.providerParameters.aws.type` field, the Ingress Controller uses the `spec.loadBalancer.platform.aws.type` value from the cluster `Ingress` configuration that was set during installation.
    
    :::


    :::tip

    If your Ingress Controller has other customizations that you want to update, such as changing the domain, consider force replacing the Ingress Controller definition file instead.
    
    :::

1.  Apply the changes to the Ingress Controller YAML file by running the command:
    ```terminal
    $ oc apply -f ingresscontroller.yaml
    ```
1.  Check that the `Progressing` condition of the Ingress Controller is set to `True` by running the following command:
    ```terminal
    $ oc get ingresscontroller default -n openshift-ingress-operator -o jsonpath='{.status.conditions[?(@.type=="Progressing")]}'
    ```
1.  Delete the service associated with the Ingress Controller by running the following command:
    ```terminal
    $ oc -n openshift-ingress delete svc/router-<name>
    ```
    *   Replace `<name>` with the specific instance name of your Ingress Controller.

        Expect several minutes of outages while the Ingress Controller updates.

**Verification**

*   Confirm that the Ingress Controller updated successfully by running the following command:
    ```terminal
    $ oc get ingresscontroller -n openshift-ingress-operator default -o jsonpath="{.status.conditions}" | yq -PC
    ```