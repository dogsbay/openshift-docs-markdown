{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying a floating IP address in the Ingress Controller {id="nw-osp-specify-floating-ip_{{ context }}"}

To establish external access to your {{ product_title }} cluster on {{ rh_openstack_first }}, use the automatically assigned floating IP address. The floating IP address is associated with your Ingress port. {._abstract}

You might want to precreate a floating IP address before updating your DNS records and cluster deployment. In this situation, you can define a floating IP address to the Ingress Controller. You can do this regardless of whether you are using Octavia or a user-managed cluster.

**Procedure**

1.  Create the Ingress Controller custom resource (CR) file with the floating IPs:
    ```yaml title="Example Ingress config sample-ingress.yaml"
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
          providerParameters:
            type: OpenStack
            openstack:
              floatingIP: <ingress_port_IP>
    ```

    where:

    `metadata.name`
    :   Specifies the name of your Ingress Controller. If you are using the default Ingress Controller, the value for this field is `default`.

    `spec.domain`
    :   Specifies the DNS name serviced by the Ingress Controller.

    `loadBalancer.scope`
    :   You must set the scope to `External` to use a floating IP address.

    `openstack.floatingIP`
    :   Specifies the floating IP address associated with the port your Ingress Controller is listening on.

1.  Apply the CR file by running the following command:
    ```terminal
    $ oc apply -f sample-ingress.yaml
    ```
1.  Update your DNS records with the Ingress Controller endpoint:
    ```text
    *.apps.<name>.<domain>. IN A <ingress_port_IP>
    ```
1.  Continue with creating your {{ product_title }} cluster.

**Verification**

*   Confirm that the load balancer was successfully provisioned by checking the `IngressController` conditions using the following command:
    ```terminal
    $ oc get ingresscontroller -n openshift-ingress-operator <name> -o jsonpath="{.status.conditions}" | yq -PC
    ```