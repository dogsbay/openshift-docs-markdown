{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an Ingress Controller to use an internal load balancer {id="nw-ingress-setting-internal-lb_{{ context }}"}

When creating an Ingress Controller on cloud platforms, the Ingress Controller is published by a public cloud load balancer by default.
As an administrator, you can create an Ingress Controller that uses an internal cloud load balancer.

{% if not (openshift_rosa or openshift_dedicated) %}

:::warning

If your cloud provider is Microsoft Azure, you must have at least one public load balancer that points to your nodes.
If you do not, all of your nodes will lose egress connectivity to the internet.

:::

{% endif %}


:::important

If you want to change the `scope` for an `IngressController`, you can change the `.spec.endpointPublishingStrategy.loadBalancer.scope` parameter after the custom resource (CR) is created.

:::


**Figure 1. Diagram of LoadBalancer**

![{{ product_title }} Ingress LoadBalancerService endpoint publishing strategy](/images/202_OpenShift_Ingress_0222_load_balancer.png)

The preceding graphic shows the following concepts pertaining to {{ product_title }} Ingress LoadBalancerService endpoint publishing strategy:

*   You can load balance externally, using the cloud provider load balancer, or internally, using the OpenShift Ingress Controller Load Balancer.
*   You can use the single IP address of the load balancer and more familiar ports, such as 8080 and 4200 as shown on the cluster depicted in the graphic.
*   Traffic from the external load balancer is directed at the pods, and managed by the load balancer, as depicted in the instance of a down node.
See the [Kubernetes Services documentation](https://kubernetes.io/docs/concepts/services-networking/service/#internal-load-balancer)
for implementation details.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create an `IngressController` custom resource (CR) in a file named `<name>-ingress-controller.yaml`, such as in the following example:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      namespace: openshift-ingress-operator
      name: <name> (1)
    spec:
      domain: <domain> (2)
      endpointPublishingStrategy:
        type: LoadBalancerService
        loadBalancer:
          scope: Internal (3)
    ```
    1.  Replace `<name>` with a name for the `IngressController` object.
    1.  Specify the `domain` for the application published by the controller.
    1.  Specify a value of `Internal` to use an internal load balancer.
1.  Create the Ingress Controller defined in the previous step by running the following command:
    ```terminal
    $ oc create -f <name>-ingress-controller.yaml (1)
    ```
    1.  Replace `<name>` with the name of the `IngressController` object.
1.  Optional: Confirm that the Ingress Controller was created by running the following command:
    ```terminal
    $ oc --all-namespaces=true get ingresscontrollers
    ```