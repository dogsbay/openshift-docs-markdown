{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an Ingress Controller Network Load Balancer on an existing AWS cluster {id="nw-aws-nlb-existing-cluster_{{ context }}"}

To improve performance for high-traffic workloads in {{ product_title }}, configure an Ingress Controller backed by an {{ aws_full }} Network Load Balancer (NLB) on an existing cluster. {._abstract}

You can create an Ingress Controller backed by an {{ aws_full }} Network Load Balancer (NLB) on an existing cluster.

**Prerequisites**

*   You installed an {{ aws_short }} cluster.
*   `PlatformStatus` of the infrastructure resource must be {{ aws_short }}.
    *   To verify that the `PlatformStatus` is {{ aws_short }}, run the following command:
        ```terminal
        $ oc get infrastructure/cluster -o jsonpath='{.status.platformStatus.type}'
        AWS
        ```

**Procedure**

1.  Create the Ingress Controller manifest:
    ```terminal
     $ cat ingresscontroller-aws-nlb.yaml
    ```
    ```yaml title="Example output"
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: <ingress_controller_name>
      namespace: openshift-ingress-operator
    spec:
      domain: <unique_ingress_domain
      endpointPublishingStrategy:
        type: LoadBalancerService
        loadBalancer:
          scope: External
          providerParameters:
            type: AWS
            aws:
              type: NLB
    ```

    where:

    `<ingress_controller_name>`
    :   Specifies a unique name for the Ingress Controller.

    `<unique_ingress_domain>`
    :   Specifies a domain name that is unique among all Ingress Controllers in the cluster. This variable must be a subdomain of the DNS name `<clustername>.<domain>`.

    `scope`
    :   Specifies the type of NLB, either `External` to use an external NLB or `Internal` to use an internal NLB.

1.  Create the resource in the cluster:
    ```terminal
    $ oc create -f ingresscontroller-aws-nlb.yaml
    ```

    :::important

    Before you can configure an Ingress Controller NLB on a new AWS cluster, you must complete the creating the installation configuration file procedure. For more information, see "Creating the installation configuration file".
    
    :::