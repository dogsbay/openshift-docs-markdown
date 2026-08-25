{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing Ingress Controller Classic Load Balancer with Network Load Balancer {id="nw-aws-replacing-clb-with-nlb_{{ context }}"}

To improve performance and reduce latency for traffic in {{ product_title }} on {{ aws_full }}, replace an Ingress Controller using a Classic Load Balancer (CLB) with one that uses a Network Load Balancer (NLB).  {._abstract}


:::warning

This procedure might cause an outage that can last several minutes due to new DNS records propagation, new load balancers provisioning, and other factors. IP addresses and canonical names of the Ingress Controller load balancer might change after applying this procedure.

:::


**Procedure**

1.  Create a file with a new default Ingress Controller. The following example assumes that your default Ingress Controller has an `External` scope and no other customizations:
    ```yaml title="Example ingresscontroller.yml file"
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

    If your default Ingress Controller has other customizations, ensure that you modify the file accordingly.

    :::tip

    If your Ingress Controller has no other customizations and you are only updating the load balancer type, consider following the procedure detailed in "Switching the Ingress Controller from using a Classic Load Balancer to a Network Load Balancer".
    
    :::

1.  Force replace the Ingress Controller YAML file:
    ```terminal
    $ oc replace --force --wait -f ingresscontroller.yml
    ```

    Wait until the Ingress Controller is replaced. Expect several of minutes of outages.