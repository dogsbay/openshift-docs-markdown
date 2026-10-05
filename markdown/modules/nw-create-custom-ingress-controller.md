{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a custom Ingress Controller {id="nw-create-custom-ingress-controller_{{ context }}"}

As a cluster administrator, you can create a new custom Ingress Controller.  {._abstract}

Because the default Ingress Controller might change during {{ product_title }} updates, creating a custom Ingress Controller can be helpful when maintaining a configuration manually that persists across cluster updates.

This example provides a minimal spec for a custom Ingress Controller. To further customize your custom Ingress Controller, see "Configuring the Ingress Controller".

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a YAML file that defines the custom `IngressController` object:
    ```yaml title="Example custom-ingress-controller.yaml file"
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
        name: <custom_name>
        namespace: openshift-ingress-operator
    spec:
        defaultCertificate:
            name: <custom-ingress-custom-certs>
        replicas: 1
        domain: <custom_domain>
    ```

    where:

    `metadata.name`
    :   Specifies a custom `name` for the `IngressController` object.

    `spec.defaultCertificate.name`
    :   Specifies the name of the secret with the custom wildcard certificate.

    `spec.replicas`
    :   Specifies the number of replicas. Minimum replica needs to be ONE.

    `spec.domain`
    :   Specifies the domain to your domain name. The domain specified on the IngressController object and the domain used for the certificate must match. For example, if the domain value is "custom_domain.mycompany.com", then the certificate must have SAN \*.custom_domain.mycompany.com (with the `*.` added to the domain).

1.  Create the object by running the following command:
    ```terminal
    $ oc create -f custom-ingress-controller.yaml
    ```