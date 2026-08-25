{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring custom domains for applications {id="rosa-applications-config-custom-domains_{{ context }}"}

The top-level domains (TLDs) are owned by the customer that is operating the {{ product_title }} cluster. The Custom Domains Operator sets up a new ingress controller with a custom certificate as a second day operation. The public DNS record for this ingress controller can then be used by an external DNS to create a wildcard CNAME record for use with a custom domain. {._abstract}


:::note

Custom API domains are not supported because Red Hat controls the API domain. However, customers can change their application domains. For private custom domains with a private `IngressController`, set `.spec.scope` to `Internal` in the `CustomDomain` CR.

:::


**Prerequisites**

*   A user account with `dedicated-admin` privileges
*   A unique domain or wildcard domain, such as `*.apps.<company_name>.io`
*   A custom certificate or wildcard custom certificate, such as `CN=*.apps.<company_name>.io`
*   Access to a cluster with the latest version of the `oc` CLI installed


:::important

Do not use the reserved names `default` or `apps*`, such as `apps` or `apps2`, in the `metadata/name:` section of the `CustomDomain` CR.

:::


**Procedure**

1.  Create a new TLS secret from a private key and a public certificate, where `fullchain.pem` and `privkey.pem` are your public or private wildcard certificates.
    ```terminal title="Example"
    $ oc create secret tls <name>-tls --cert=fullchain.pem --key=privkey.pem -n <my_project>
    ```
1.  Create a new `CustomDomain` custom resource (CR):
    ```yaml title="Example <company_name>-custom-domain.yaml"
    apiVersion: managed.openshift.io/v1alpha1
    kind: CustomDomain
    metadata:
      name: <company_name>
    spec:
      domain: apps.<company_name>.io
      scope: External
      loadBalancerType: Classic
      certificate:
        name: <name>-tls
        namespace: <my_project>
      routeSelector:
        matchLabels:
         route: acme
      namespaceSelector:
        matchLabels:
         type: sharded
    ```
    where:


    `spec.domain`
    :   Specifies the custom domain.

    `spec.loadBalancerType`
    :   Specifies the type of load balancer for your custom domain. This type can be the default `classic` or `NLB` if you use a network load balancer.

    `spec.certificate.name`
    :   Specifies the secret created in the previous step.

    `spec.routeSelector`
    :   Optional. Filters the set of routes serviced by the CustomDomain ingress. If no value is provided, the default is no filtering.

    `spec.namespaceSelector`
    :   Optional. Filters the set of namespaces serviced by the CustomDomain ingress. If no value is provided, the default is no filtering.
1.  Apply the CR:
    ```terminal title="Example"
    $ oc apply -f <company_name>-custom-domain.yaml
    ```
1.  Get the status of your newly created CR:
    ```terminal
    $ oc get customdomains
    ```
    ```terminal title="Example output"
    NAME               ENDPOINT                                                    DOMAIN                       STATUS
    <company_name>     xxrywp.<company_name>.cluster-01.opln.s1.openshiftapps.com  *.apps.<company_name>.io     Ready
    ```

{% if openshift_rosa %}
1.  Using the endpoint value, add a new wildcard CNAME record set to your managed DNS provider, such as Route53.
{% endif %}
{% if not openshift_rosa %}
1.  Using the endpoint value, add a new wildcard CNAME record set to your managed DNS provider, such as Route53, Azure DNS, or Google DNS.
{% endif %}

    ```terminal title="Example"
    *.apps.<company_name>.io -> xxrywp.<company_name>.cluster-01.opln.s1.openshiftapps.com
    ```
1.  Create a new application and expose it:
    ```terminal title="Example"
    $ oc new-app --docker-image=docker.io/openshift/hello-openshift -n my-project
    ```
    ```terminal
    $ oc create route <route_name> --service=hello-openshift hello-openshift-tls --hostname hello-openshift-tls-my-project.apps.<company_name>.io -n my-project
    ```
    ```terminal
    $ oc get route -n my-project
    ```
    ```terminal
    $ curl https://hello-openshift-tls-my-project.apps.<company_name>.io
    Hello OpenShift!
    ```

**Troubleshooting**

*   [Error creating TLS secret](https://access.redhat.com/solutions/5419501)
*   [Troubleshooting: CustomDomain in NotReady state](https://access.redhat.com/solutions/6546011)