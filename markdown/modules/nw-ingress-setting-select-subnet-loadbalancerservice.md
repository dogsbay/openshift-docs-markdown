{%- set _mod_docs_content_type = "PROCEDURE" %}
# Choosing subnets while creating a LoadBalancerService Ingress Controller {id="nw-ingress-setting-select-subnet-Loadbalancerservice_{{ context }}"}

To manually control network placement for Ingress Controllers in an existing cluster, specify the load balancer subnets in your configuration. This method provides precise control over your infrastructure by overriding the default automatic subnet discovery method used by {{ aws_full }}. {._abstract}

**Prerequisites**

*   You must have an installed {{ aws_short }} cluster.
*   You must know the names or IDs of the subnets to which you intend to map your `IngressController`.

**Procedure**

1.  Create a custom resource (CR) YAML file, such as `sample-ingress.yaml`, and specifying the following content for the file:
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
      dnsManagementPolicy: Managed
    # ...
    ```
1.  Add subnets to the CR file:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name:  <name>
      namespace: openshift-ingress-operator
    spec:
      domain: <domain>
      endpointPublishingStrategy:
        type: LoadBalancerService
        loadBalancer:
          scope: External
          providerParameters:
            type: AWS
            aws:
              type: Classic
              classicLoadBalancer:
                subnets:
                  ids:
                  - <subnet>
                  - <subnet>
                  - <subnet>
    dnsManagementPolicy: Managed
    ```

    where:

    `name`
    :   Specifies a name for the `IngressController`.

    `domain`
    :   Specifies the DNS name serviced by the `IngressController`.

    `classicLoadBalancer`
    :   Specifies the type of load balancer, either `classicLoadBalancer` if using a CLB or `networkLoadBalancer` field if using an NLB.

    `ids`
    :   Specifies a subnet by name using the `names` field instead of specifying the subnet by ID. This field is optional.

    `<subnet>`
    :   Specifies the subnet IDs (or names if you using `names`).

    :::important

    You can specify a maximum of one subnet per availability zone. Only provide public subnets for external Ingress Controllers and private subnets for internal Ingress Controllers.
    
    :::


1.  Save and apply the CR file by using the {{ oc_first }}:
    ```terminal
    $  oc apply -f sample-ingress.yaml
    ```
1.  Confirm the load balancer was provisioned successfully by checking the `IngressController` conditions. 
    ```terminal
    $ oc get ingresscontroller -n openshift-ingress-operator <name> -o jsonpath="{.status.conditions}" | yq -PC
    ```