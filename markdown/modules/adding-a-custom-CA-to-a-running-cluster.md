{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a custom CA to a running cluster {id="adding-a-custom-CA-to-a-running-cluster_{{ context }}"}

To add a custom CA certificate to your running {{ product_title }} cluster, you can create a `ConfigMap` object with your certificate and reference it in the cluster `Proxy` object. {._abstract}


:::note

When you modify the cluster `Proxy` object, the Machine Config Operator (MCO) initiates a rolling reboot of all nodes to apply the change. This is expected behavior and does not require manual intervention.

:::


This procedure uses the `trustedCA` field in the `Proxy` object. If you also need to configure or modify egress proxy settings at the same time, see the "Configuring the cluster-wide proxy" chapter for detailed instructions.

**Prerequisites**

*   You have cluster-admin privileges.
*   You have the {{ oc_first }} installed.
*   You have your custom CA certificate available in PEM-encoded format.

**Procedure**

1.  Create a `ConfigMap` object with your CA certificate.
    1.  Create a YAML file named `custom-ca.yaml` to define the `ConfigMap` object.
    1.  Add the following content to the file:
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: custom-ca-bundle
          namespace: openshift-config
        data:
          ca-bundle.crt: |
            -----BEGIN CERTIFICATE-----
            <MY_PEM_ENCODED_CA_CERT>
            -----END CERTIFICATE-----
        ```

        where:

        `metadata.name`
        :   Specifies the name of the `ConfigMap` object that you will reference from the `Proxy` object.

        `metadata.namespace`
        :   Specifies the namespace of the `ConfigMap` object.

        `data.ca-bundle.crt`
        :   Specifies the data key for the certificate bundle.
1.  Apply the manifest to create the `ConfigMap` object in the cluster by running the following command:
    ```terminal
    $ oc apply -f custom-ca.yaml
    ```
1.  Reference the `ConfigMap` object in the cluster `Proxy` object.
    1.  Update the cluster `Proxy` object to reference the `ConfigMap` object you just created by running the following command:
        ```terminal
        $ oc patch proxy/cluster --type=merge --patch='{"spec":{"trustedCA":{"name":"custom-ca-bundle"}}}'
        ```

        After you run this command, the Machine Config Operator (MCO) detects the change and begins distributing the new trusted CA to all nodes in the cluster.