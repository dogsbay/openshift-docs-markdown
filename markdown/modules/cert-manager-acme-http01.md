{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an ACME issuer to solve HTTP-01 challenges {id="cert-manager-acme-http01_{{ context }}"}

You can use {{ cert_manager_operator }} to set up an ACME issuer to solve HTTP-01 challenges. This procedure uses _Let’s Encrypt_ as the ACME CA server. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have a service that you want to expose. In this procedure, the service is named `sample-workload`.

**Procedure**

1.  Create an ACME cluster issuer.
    1.  Create a YAML file, `acme-cluster-issuer.yaml`, that defines the `ClusterIssuer` object:
        ```yaml
        apiVersion: cert-manager.io/v1
        kind: ClusterIssuer
        metadata:
          name: <cluster_issuer_name>
        spec:
          acme:
            preferredChain: ""
            privateKeySecretRef:
              name: <secret_for_private_key>
            server: <url>
            solvers:
            - http01:
                ingress:
                  ingressClassName: <ingress_class_name>
        ```

        where:

        `<cluster_issuer_name>`
        :   Specifies a name for the cluster issuer.

        `<secret_for_private_key>`
        :   Specifies the name of secret to store the ACME account private key in.

        `<url>`
        :   Specifies the URL to access the ACME server’s `directory` endpoint. This example uses the _Let’s Encrypt_ staging environment.

        `<ingress_class_name>`
        :   Specifies the Ingress class, for example, `openshift-default`.

    1.  Optional: If you create the object without specifying `ingressClassName`, use the following command to patch the existing ingress:
        ```terminal
        $ oc patch ingress/<ingress-name> --type=merge --patch '{"spec":{"ingressClassName":"openshift-default"}}' -n <namespace>
        ```
    1.  Create the `ClusterIssuer` object by running the following command:
        ```terminal
        $ oc create -f acme-cluster-issuer.yaml
        ```
1.  Create an Ingress to expose the service of the user workload.
    1.  Create a YAML file, for example, `namespace.yaml`, that defines a `Namespace` object:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: <ingress_namespace>
        ```

        Replace `<ingress_namespace>` with the namespace for the Ingress.
    1.  Create the `Namespace` object by running the following command:
        ```terminal
        $ oc create -f namespace.yaml
        ```
    1.  Create a YAML file, for example, `ingress.yaml`, that defines the `Ingress` object:
        ```yaml
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: <ingress_name>
          namespace: <ingress_namespace>
          annotations:
            cert-manager.io/cluster-issuer: <cluster_issuer_name>
        spec:
          ingressClassName: <ingress_class_name>
          tls:
          - hosts:
            - <tls_hostname>
            secretName: <secret_name>
          rules:
          - host: <hostname>
            http:
              paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: <service_name>
                    port:
                      number: 80
        ```

        where:

        `<ingress_name>`
        :   Specifies the name of the Ingress.

        `<ingress_namespace>`
        :   Specifies the namespace that you created for the Ingress.

        `<cluster_issuer_name>`
        :   Specifies the cluster issuer that you created.

        `<ingress_class_name>`
        :   Specifies the Ingress class name.

        `<tls_hostname>`
        :   Specifies the Subject Alternative Name (SAN) to be associated with the certificate. This name is used to add DNS names to the certificate.

        `<secret_name>`
        :   Specifies the secret that stores the certificate.

        `<hostname>`
        :   Specifies the host name. You can use the `<host_name>.<cluster_ingress_domain>` syntax to take advantage of the `*.<cluster_ingress_domain>` wildcard DNS record and serving certificate for the cluster. For example, you might use `apps.<cluster_base_domain>`. Otherwise, you must ensure that a DNS record exists for the chosen hostname.

        `<service_name>`
        :   Specifies the name of the service to expose. This example uses a service named `sample-workload`.

    1.  Create the `Ingress` object by running the following command:
        ```terminal
        $ oc create -f ingress.yaml
        ```