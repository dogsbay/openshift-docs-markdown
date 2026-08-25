{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the cluster to use an internal CA {id="internal-certificate-authority_{{ context }}"}

If the Azure Stack Hub environment is using an internal Certificate Authority (CA), update the `cluster-proxy-01-config.yaml` file to configure the cluster to use the internal CA. {._abstract}

**Prerequisites**

*   Create the `install-config.yaml` file and specify the certificate trust bundle in `.pem` format.
*   Create the cluster manifests.

**Procedure**

1.  From the directory in which the installation program creates files, go to the `manifests` directory.
1.  Add `user-ca-bundle` to  the `spec.trustedCA.name` field.
    ```yaml title="Example cluster-proxy-01-config.yaml file"
    apiVersion: config.openshift.io/v1
    kind: Proxy
    metadata:
      creationTimestamp: null
      name: cluster
    spec:
      trustedCA:
        name: user-ca-bundle
    status: {}
    ```
1.  Optional: Back up the `manifests/ cluster-proxy-01-config.yaml` file. The installation program consumes the `manifests/` directory when you deploy the cluster.