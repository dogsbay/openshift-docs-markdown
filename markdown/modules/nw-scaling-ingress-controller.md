{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling an Ingress Controller {id="nw-ingress-controller-configuration_{{ context }}"}

Manually scale an Ingress Controller to meeting routing performance or availability requirements such as the requirement to increase throughput. `oc` commands are used to scale the `IngressController` resource. The following procedure provides an example for scaling up the default `IngressController`.


:::note

Scaling is not an immediate action, as it takes time to create the desired number of replicas.

:::


**Prerequisites**

*   On {{ vmw_first }}, bare-metal, and Nutanix installer-provisioned infrastructure, scaling up Ingress Controller pods does not improve external traffic performance. To improve performance, ensure that you complete the following prerequisites:
    *   You manually configured a user-managed load balancer for your cluster. 
    *   You ensured that the load balancer was configured for the cluster nodes that handle incoming traffic from the Ingress Controller.

**Procedure**

1.  View the current number of available replicas for the default `IngressController`:
    ```terminal
    $ oc get -n openshift-ingress-operator ingresscontrollers/default -o jsonpath='{$.status.availableReplicas}'
    ```
1.  Scale the default `IngressController` to the desired number of replicas by using the `oc patch` command. The following example scales the default `IngressController` to 3 replicas.
    ```terminal
    $ oc patch -n openshift-ingress-operator ingresscontroller/default --patch '{"spec":{"replicas": 3}}' --type=merge
    ```
1.  Verify that the default `IngressController` scaled to the number of replicas that you specified:
    ```terminal
    $ oc get -n openshift-ingress-operator ingresscontrollers/default -o jsonpath='{$.status.availableReplicas}'
    ```

    :::tip

    You can alternatively apply the following YAML to scale an Ingress Controller to three replicas:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: default
      namespace: openshift-ingress-operator
    spec:
      replicas: 3               (1)
    ```
    
    :::

    1.  If you need a different amount of replicas, change the `replicas` value.