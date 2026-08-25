{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up the secondary ingress controller {id="cloud-experts-using-cloudfront-and-waf-secondary_ingress_controller_setup_{{ context }}"}

You must configure a secondary ingress controller to segment your external Web Application Firewall (WAF)-protected traffic from your standard and default cluster ingress controller. {._abstract}

**Prerequisites**

*   You have a publicly trusted Subject Alternative Name (SAN) or wildcard certificate for your custom domain, such as `CN=*.apps.example.com`

    :::important

    Amazon CloudFront uses HTTPS to communicate with your cluster’s secondary ingress controller. As explained in the [Amazon CloudFront documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-cloudfront-to-custom-origin.html), you cannot use a self-signed certificate for HTTPS communication between CloudFront and your cluster. Amazon CloudFront verifies that the certificate was issued by a trusted certificate authority.
    
    :::


**Procedure**

1.  Create a new Transport Layer Security (TLS) secret from a private key and a public certificate, where `fullchain.pem` is your full wildcard certificate chain, including any intermediaries, and `privkey.pem` is your wildcard certificate’s private key.
    ```terminal title="Example"
    $ oc -n openshift-ingress create secret tls waf-tls --cert=fullchain.pem --key=privkey.pem
    ```
1.  Create a new `IngressController` resource, for example, a `waf-ingress-controller.yaml`:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: cloudfront-waf
      namespace: openshift-ingress-operator
    spec:
      domain: apps.example.com
      defaultCertificate:
        name: waf-tls
      endpointPublishingStrategy:
        loadBalancer:
          dnsManagementPolicy: Unmanaged
          providerParameters:
            aws:
              type: NLB
            type: AWS
          scope: External
        type: LoadBalancerService
      routeSelector:
        matchLabels:
         route: waf
    ```
    where:


    `domain: apps.example.com`
    :   Specifies the custom domain you want to use for the `IngressController`.

    `routeSelector`
    :   Filters the set of routes serviced by the Ingress Controller. If you don’t provide a value, no filtering occurs. In this tutorial, you use the `waf` route selector.
1.  Apply the `IngressController`:
    ```terminal title="Example"
    $ oc apply -f waf-ingress-controller.yaml
    ```

**Verification**

*   Verify that your IngressController has successfully created an external load balancer:
    ```terminal
    $ oc -n openshift-ingress get service/router-cloudfront-waf
    ```
    ```terminal title="Example output"
    NAME                    TYPE           CLUSTER-IP      EXTERNAL-IP                                                                     PORT(S)                      AGE
    router-cloudfront-waf   LoadBalancer   172.30.16.141   a68a838a7f26440bf8647809b61c4bc8-4225395f488830bd.elb.us-east-1.amazonaws.com   80:30606/TCP,443:31065/TCP   2m19s
    ```