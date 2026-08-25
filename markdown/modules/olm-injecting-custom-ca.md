{%- set _mod_docs_content_type = "PROCEDURE" %}
# Injecting a custom CA certificate {id="olm-inject-custom-ca_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
When a cluster administrator
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
When an administrator with the `dedicated-admin` role
{%- endif %}
adds a custom CA certificate to a cluster using a config map, the Cluster Network Operator merges the user-provided certificates and system CA certificates into a single bundle. You can inject this merged bundle into your Operator running on Operator Lifecycle Manager (OLM), which is useful if you have a man-in-the-middle HTTPS proxy. {._abstract}

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Access to an {{ product_title }} cluster using an account with
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
`cluster-admin` permissions.
{%- endif %}
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   Access to a {{ product_title }} cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Custom CA certificate added to the cluster using a config map.
*   Desired Operator installed and running on OLM.

**Procedure**

1.  Create an empty config map in the namespace where the subscription for your Operator exists and include the following label:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: trusted-ca (1)
      labels:
        config.openshift.io/inject-trusted-cabundle: "true" (2)
    ```
    1.  Name of the config map.
    1.  Requests the Cluster Network Operator to inject the merged bundle.

        After creating this config map, it is immediately populated with the certificate contents of the merged bundle.
1.  Update the `Subscription` object to include a `spec.config` section that mounts the `trusted-ca` config map as a volume to each container within a pod that requires a custom CA:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: my-operator
    spec:
      package: etcd
      channel: alpha
      config: (1)
        selector:
          matchLabels:
            <labels_for_pods> (2)
        volumes: (3)
        - name: trusted-ca
          configMap:
            name: trusted-ca
            items:
              - key: ca-bundle.crt (4)
                path: tls-ca-bundle.pem (5)
        volumeMounts: (6)
        - name: trusted-ca
          mountPath: /etc/pki/ca-trust/extracted/pem
          readOnly: true
    ```
    1.  Add a `config` section if it does not exist.
    1.  Specify labels to match pods that are owned by the Operator.
    1.  Create a `trusted-ca` volume.
    1.  `ca-bundle.crt` is required as the config map key.
    1.  `tls-ca-bundle.pem` is required as the config map path.
    1.  Create a `trusted-ca` volume mount.

    :::note

    Deployments of an Operator can fail to validate the authority and display a `x509 certificate signed by unknown authority` error. This error can occur even after injecting a custom CA when using the subscription of an Operator. In this case, you can set the `mountPath` as `/etc/ssl/certs` for trusted-ca by using the subscription of an Operator.
    
    :::