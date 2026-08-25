{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an ACME issuer by using explicit credentials for {{ gcp_full }} DNS {id="cert-manager-acme-dns01-explicit-gcp_{{ context }}"}

You can use the {{ cert_manager_operator }} to set up an ACME issuer to solve DNS-01 challenges by using explicit credentials on {{ gcp_short }}. This procedure uses _Let’s Encrypt_ as the ACME CA server and shows how to solve DNS-01 challenges with {{ gcp_full }} DNS. {._abstract}

**Prerequisites**

*   You have set up a {{ gcp_full }} service account with a desired role for {{ gcp_full }} DNS.

    :::note

    You can use {{ gcp_full }} DNS with explicit credentials in an {{ product_title }} cluster that is not running on {{ gcp_short }}.
    
    :::


**Procedure**

1.  Optional: Override the name server settings for the DNS-01 self check.

    This step is required only when the target public-hosted zone overlaps with the cluster’s default private-hosted zone.
    1.  Edit the `CertManager` resource by running the following command:
        ```terminal
        $ oc edit certmanager cluster
        ```
    1.  Add a `spec.controllerConfig` section with the following override arguments:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: CertManager
        metadata:
          name: cluster
          ...
        spec:
          ...
          controllerConfig:
            overrideArgs:
              - '--dns01-recursive-nameservers-only'
              - '--dns01-recursive-nameservers=1.1.1.1:53'
        ```

        where:

        `--dns01-recursive-nameservers-only`
        :   Specifies recursive name servers instead of checking the authoritative name servers associated with that domain.

        `--dns01-recursive-nameservers=1.1.1.1:53`
        :   Specifies a comma-separated list of `<host>:<port>` name servers to query for the DNS-01 self check. You must use a `1.1.1.1:53` value to avoid the public and private zones overlapping.

    1.  Save the file to apply the changes.
1.  Optional: Create a namespace for the issuer:
    ```terminal
    $ oc new-project my-issuer-namespace
    ```
1.  Create a secret to store your {{ gcp_short }} credentials by running the following command:
    ```terminal
    $ oc create secret generic clouddns-dns01-solver-svc-acct --from-file=service_account.json=<path/to/gcp_service_account.json> -n my-issuer-namespace
    ```
1.  Create an issuer:
    1.  Create a YAML file, for example, `issuer.yaml`, that defines the `Issuer` object:
        ```yaml
        apiVersion: cert-manager.io/v1
        kind: Issuer
        metadata:
          name: <acme_dns01_clouddns_issuer>
          namespace: <issuer_namespace>
        spec:
          acme:
            preferredChain: ""
            privateKeySecretRef:
              name: <secret_private_key>
            server: <server>
            solvers:
            - dns01:
                cloudDNS:
                  project: <project_id>
                  serviceAccountSecretRef:
                    name: <secret>
                    key: <service_account.json>
        ```

        where:

        `<acme_dns01_clouddns_issuer>`
        :   Specifies a name for the issuer.

        `<issuer_namespace>`
        :   Specifies your issuer namespace.

        `<secret_private_key>`
        :   Specifies the name of the secret to store the ACME account private key in.

        `<server>`
        :   Specifies the URL to access the ACME server’s `directory` endpoint. This example uses the _Let’s Encrypt_ staging environment.

        `<project_id>`
        :   Specifies the name of the {{ gcp_short }} project that contains the Cloud DNS zone.

        `<secret>`
        :   Specifies the name of the secret you created.

        `<service_account.json>`
        :   Specifies the key in the secret you created that stores your {{ gcp_short }} secret access key.

    1.  Create the `Issuer` object by running the following command:
        ```terminal
        $ oc create -f issuer.yaml
        ```