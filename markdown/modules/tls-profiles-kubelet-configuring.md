{% if context == "tls-security-profiles" %}
{%- set tls = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the TLS security profile for the kubelet {id="tls-profiles-kubelet-configuring_{{ context }}"}

To configure TLS ciphers and minimum versions for the kubelet HTTP server in {{ product_title }}, apply a predefined or custom TLS security profile through a `KubeletConfig` custom resource (CR). Without a custom profile, the kubelet defaults to the `Intermediate` profile. {._abstract}

{% if tls %}
*   The kubelet uses its HTTP/GRPC server to communicate with the Kubernetes API server, which sends commands to pods, gathers logs, and run exec commands on pods through the kubelet.
{% endif %}

```yaml title="Sample KubeletConfig CR that configures the Old TLS security profile on worker nodes"
apiVersion: machineconfiguration.openshift.io/v1
kind: KubeletConfig
# ...
spec:
  tlsSecurityProfile:
    old: {}
    type: Old
  machineConfigPoolSelector:
    matchLabels:
      pools.operator.machineconfiguration.openshift.io/worker: ""
# ...
```

You can see the ciphers and the minimum TLS version of the configured TLS security profile in the `kubelet.conf` file on a configured node.

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Create a `KubeletConfig` CR to configure the TLS security profile:
    ```yaml title="Sample KubeletConfig CR for a Custom profile"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: KubeletConfig
    metadata:
      name: set-kubelet-tls-security-profile
    spec:
      tlsSecurityProfile:
        type: Custom
        custom:
          ciphers:
          - ECDHE-ECDSA-CHACHA20-POLY1305
          - ECDHE-RSA-CHACHA20-POLY1305
          - ECDHE-RSA-AES128-GCM-SHA256
          - ECDHE-ECDSA-AES128-GCM-SHA256
          minTLSVersion: VersionTLS11
      machineConfigPoolSelector:
        matchLabels:
          pools.operator.machineconfiguration.openshift.io/worker: ""
    #...
    ```

    where:

    `spec.tlsSecurityProfile.type`
    :   Specifies the TLS security profile type (`Old`, `Intermediate`, or `Custom`). The default is `Intermediate`.

    `spec.tlsSecurityProfile.type.custom`
    :   Specifies the appropriate field for the selected type:
    *   `old: {}`
    *   `intermediate: {}`
    *   `modern: {}`
    *   `custom:`

    `spec.tlsSecurityProfile.type.custom`
    :   For the `custom` type, specifies a list of TLS ciphers and the minimum accepted TLS version.

    `spec.machineConfigPoolSelector.matchLabels.custom`
    :   Specifies the machine config pool label for the nodes you want to apply the TLS security profile. This parameter is optional.

1.  Create the `KubeletConfig` object:
    ```terminal
    $ oc create -f <filename>
    ```

    Depending on the number of worker nodes in the cluster, wait for the configured nodes to be rebooted one by one.

**Verification**

To verify that the profile is set,  perform the following steps after the nodes are in the `Ready` state:

1.  Start a debug session for a configured node:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  Set `/host` as the root directory within the debug shell:
    ```terminal
    sh-4.4# chroot /host
    ```
1.  View the `kubelet.conf` file:
    ```terminal
    sh-4.4# cat /etc/kubernetes/kubelet.conf
    ```
    ```terminal title="Example output"
      "kind": "KubeletConfiguration",
      "apiVersion": "kubelet.config.k8s.io/v1beta1",
    #...
      "tlsCipherSuites": [
        "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
        "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
        "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
        "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
        "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256",
        "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
      ],
      "tlsMinVersion": "VersionTLS12",
    #...
    ```

{% if context == "tls-security-profiles" %}
{%- set tls = "" -%}
{% endif %}