{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a TLS secret automatically upon Certificate removal {id="cert-manager-override-flag-controller_{{ context }}"}

You can enable the `--enable-certificate-owner-ref` flag for the {{ cert_manager_operator }} by adding a `spec.controllerConfig` section in the `CertManager` resource. The `--enable-certificate-owner-ref` flag sets the certificate resource as an owner of the secret where the TLS certificate is stored. {._abstract}


:::warning

If you uninstall the {{ cert_manager_operator }} or delete certificate resources from the cluster, the secret is deleted automatically. This might cause network connectivity issues depending upon where the certificate TLS secret is being used.

:::


**Prerequisites**

*   You have access to the {{ product_title }} cluster as a user with the `cluster-admin` role.
*   You have installed version 1.12.0 or later of the {{ cert_manager_operator }}.

**Procedure**

1.  Check that the `Certificate` object and its secret are available by running the following command:
    ```terminal
    $ oc get certificate
    ```
    ```terminal title="Example output"
    NAME                                             READY   SECRET                                           AGE
    certificate-from-clusterissuer-route53-ambient   True    certificate-from-clusterissuer-route53-ambient   8h
    ```
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
    # ...
    spec:
    # ...
      controllerConfig:
        overrideArgs:
          - '--enable-certificate-owner-ref'
    ```
1.  Save your changes and quit the text editor to apply your changes.

**Verification**

*   Verify that the `--enable-certificate-owner-ref` flag is updated for cert-manager controller pod by running the following command:
    ```terminal
    $ oc get pods -l app.kubernetes.io/name=cert-manager -n cert-manager -o yaml
    ```
    ```yaml title="Example output"
    # ...
      metadata:
        name: cert-manager-6e4b4d7d97-zmdnb
        namespace: cert-manager
    # ...
      spec:
        containers:
        - args:
          - --enable-certificate-owner-ref
    ```