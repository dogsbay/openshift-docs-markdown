{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring global access for an Ingress Controller on {{ gcp_short }} {id="nw-ingress-controller-configuration-gcp-global-access_{{ context }}"}

An Ingress Controller created on {{ gcp_short }} with an internal load balancer generates an internal IP address for the service. A cluster administrator can specify the global access option, which enables clients in any region within the same VPC network and compute region as the load balancer, to reach the workloads running on your cluster.

For more information, see the {{ gcp_short }} documentation for [global access](https://cloud.google.com/kubernetes-engine/docs/how-to/internal-load-balancing#global_access).

**Prerequisites**

*   You deployed an {{ product_title }} cluster on {{ gcp_short }} infrastructure.
*   You configured an Ingress Controller to use an internal load balancer.
*   You installed the OpenShift CLI (`oc`).

**Procedure**

1.  Configure the Ingress Controller resource to allow global access.

    :::note

    You can also create an Ingress Controller and specify the global access option.
    
    :::

    1.  Configure the Ingress Controller resource:
        ```terminal
        $ oc -n openshift-ingress-operator edit ingresscontroller/default
        ```
    1.  Edit the YAML file:
        ```yaml title="Sample clientAccess configuration to Global"
          spec:
            endpointPublishingStrategy:
              loadBalancer:
                providerParameters:
                  gcp:
                    clientAccess: Global (1)
                  type: GCP
                scope: Internal
              type: LoadBalancerService
        ```
        1.  Set `gcp.clientAccess` to `Global`.
    1.  Save the file to apply the changes.
1.  Run the following command to verify that the service allows global access:
    ```terminal
    $ oc -n openshift-ingress edit svc/router-default -o yaml
    ```

    The output shows that global access is enabled for {{ gcp_short }} with the annotation, `networking.gke.io/internal-load-balancer-allow-global-access`.