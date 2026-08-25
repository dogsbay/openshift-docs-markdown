{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an internal load balancer for a gateway {id="configuring-internal-lb-gateway_{{ context }}"}

By default, Gateway API provisions an external load balancer. To restrict your gateway traffic to your private network, you can configure Gateway API to provision an internal load balancer by adding a cloud-specific annotation to your `Gateway` custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.
*   You have configured a `GatewayClass` object.

**Procedure**

1.  Create or edit your `Gateway` CR to include the cloud-specific annotation under `spec.infrastructure.annotations`.

    The following example provisions an internal load balancer for an {{ aws_short }} cluster:
    ```yaml title="Example Gateway CR for an {{ aws_short }} internal load balancer"
    apiVersion: gateway.networking.k8s.io/v1
    kind: Gateway
    metadata:
      name: mygateway
      namespace: openshift-ingress
    spec:
      gatewayClassName: openshift-default
      infrastructure:
        annotations:
        # Specifies the cloud provider annotation and value required to provision an internal load balancer:
          service.beta.kubernetes.io/aws-load-balancer-internal: "true"
      listeners:
      - name: https
        hostname: "*.example.com"
        port: 443
        protocol: HTTPS
        tls:
          mode: Terminate
          certificateRefs:
          - name: gateway-tls-secret
    # ...
    ```
1.  Apply the updated `Gateway` CR by running the following command:
    ```terminal
    $ oc apply -f <gateway_filename>.yaml
    ```

**Verification**

*   Verify that the load balancer service is provisioned and has an internal IP address by running the following command:
    ```terminal
    $ oc -n openshift-ingress get svc
    ```