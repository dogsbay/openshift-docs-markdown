{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an ACME issuer by using ambient credentials on {{ gcp_short }} {id="cert-manager-acme-dns01-ambient-gcp_{{ context }}"}

You can use the {{ cert_manager_operator }} to set up an ACME issuer to solve DNS-01 challenges by using ambient credentials on {{ gcp_short }}. This procedure uses _Let’s Encrypt_ as the ACME CA server and shows how to solve DNS-01 challenges with {{ gcp_full }} DNS. {._abstract}

**Prerequisites**

*   If your cluster is configured to use {{ gcp_short }} Workload Identity, you followed the instructions from the _Configuring cloud credentials for the {{ cert_manager_operator }} with {{ gcp_short }} Workload Identity_ section.
*   If your cluster does not use {{ gcp_short }} Workload Identity, you followed the instructions from the _Configuring cloud credentials for the {{ cert_manager_operator }} on {{ gcp_short }}_ section.

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
    $ oc new-project <issuer_namespace>
    ```
1.  Modify the `CertManager` resource to add the `--issuer-ambient-credentials` argument:
    ```terminal
    $ oc patch certmanager/cluster \
      --type=merge \
      -p='{"spec":{"controllerConfig":{"overrideArgs":["--issuer-ambient-credentials"]}}}'
    ```
1.  Create an issuer:
    1.  Create a YAML file that defines the `Issuer` object:
        ```yaml title="Example issuer.yaml file"
        apiVersion: cert-manager.io/v1
        kind: Issuer
        metadata:
          name: <issuer_name>
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
                  project: <gcp_project_id>
        ```

        where:

        `<issuer_name>`
        :   Specifies a name for the issuer.

        `<issuer_namespace>`
        :   Specifies a namespace for the issuer.

        `<secret_private_key>`
        :   Specifies the name of the secret to store the ACME account private key in.

        `<server>`
        :   Specifies the URL to access the ACME server’s `directory` endpoint. This example uses the _Let’s Encrypt_ staging environment.

        `<gcp_project_id>`
        :   Specifies the name of the {{ gcp_short }} project that contains the Cloud DNS zone.

    1.  Create the `Issuer` object by running the following command:
        ```terminal
        $ oc create -f issuer.yaml
        ```