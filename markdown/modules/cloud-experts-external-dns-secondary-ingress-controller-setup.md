{%- set _mod_docs_content_type = "PROCEDURE" %}
# Secondary ingress controller setup {id="cloud-experts-external-dns-secondary-ingress-controller-setup_{{ context }}"}

Use the following procedure to deploy a secondary ingress controller using a custom domain. {._abstract}

**Prerequisites**

*   A unique domain, such as `apps.example.com`
*   A wildcard or SAN TLS certificate configured with the custom domain selected above (`CN=*.apps.example.com`)

**Procedure**

1.  Create a new TLS secret from a private key and a public certificate, where `fullchain.pem` is your full wildcard certificate chain (including any intermediaries) and `privkey.pem` is your wildcard certificate’s private key:
    ```terminal
    $ oc -n openshift-ingress create secret tls external-dns-tls --cert=fullchain.pem --key=privkey.pem
    ```
1.  Create a new `IngressController` resource:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: external-dns-ingress
      namespace: openshift-ingress-operator
    spec:
      domain: ${DOMAIN}
      defaultCertificate:
        name: external-dns-tls
      endpointPublishingStrategy:
        loadBalancer:
          dnsManagementPolicy: Unmanaged
          providerParameters:
            aws:
              type: NLB
            type: AWS
          scope: External
        type: LoadBalancerService
    EOF
    ```

    :::warning

    This `IngressController` example will create an internet accessible Network Load Balancer (NLB) in your AWS account. To provision an internal NLB instead, set the `.spec.endpointPublishingStrategy.loadBalancer.scope` parameter to `Internal` before creating the `IngressController` resource.
    
    :::

1.  Verify that your custom domain IngressController has successfully created an external load balancer:
    ```terminal
    $ oc -n openshift-ingress get service/router-external-dns-ingress
    ```
    ```terminal title="Example output"
    NAME                          TYPE           CLUSTER-IP      EXTERNAL-IP                                                                     PORT(S)                      AGE
    router-external-dns-ingress   LoadBalancer   172.30.71.250   a4838bb991c6748439134ab89f132a43-aeae124077b50c01.elb.us-east-1.amazonaws.com   80:32227/TCP,443:30310/TCP   43s
    ```