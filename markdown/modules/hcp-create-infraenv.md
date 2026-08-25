{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating infrastructure environment resources {id="hcp-create-infraenv_{{ context }}"}

For heterogeneous node pools, you must create an `infraEnv` custom resource (CR) for each architecture. This configuration ensures that the correct architecture-specific operating system and boot artifacts get used during the node provisioning process. {._abstract}

For example, for node pools with `x86_64` and `ppc64le` architectures, create an `InfraEnv` CR for `x86_64` and `ppc64le`.


:::note

Before starting the procedure, ensure that you add the operating system images for both `x86_64` and `ppc64le` architectures to the `AgentServiceConfig` resource. After this, you can use the `InfraEnv` resources to get the minimal ISO image.

:::


**Procedure**

1.  Create the `InfraEnv` resource with `x86_64` architecture for heterogeneous node pools by running the following command:
    ```yaml
    $ envsubst <<"EOF" | oc apply -f -
    apiVersion: agent-install.openshift.io/v1beta1
    kind: InfraEnv
    metadata:
      name: <hosted_cluster_name>-<arch_x86>
      namespace: <hosted_control_plane_namespace>
    spec:
      cpuArchitecture: <arch_x86>
      pullSecretRef:
        name: pull-secret
      sshAuthorizedKey: <ssh_pub_key>
    EOF
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the hosted cluster name.

    `<arch_x86>`
    :   Specifies the `x86_64` architecture.

    `<hosted_control_plane_namespace>`
    :   Specifies the hosted control plane namespace.

    `<ssh_pub_key>`
    :   Specifies the SSH public key.

1.  Create the `InfraEnv` resource with `ppc64le` architecture for heterogeneous node pools by running the following command:
    ```yaml
    envsubst <<"EOF" | oc apply -f -
    apiVersion: agent-install.openshift.io/v1beta1
    kind: InfraEnv
    metadata:
      name: <hosted_cluster_name>-<arch_ppc64le>
      namespace: <hosted_control_plane_namespace>
    spec:
      cpuArchitecture: <arch_ppc64le>
      pullSecretRef:
        name: pull-secret
      sshAuthorizedKey: <ssh_pub_key>
    EOF
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the hosted cluster name.

    `<arch_ppc64le>`
    :   Specifies the `ppc64le` architecture.

    `<hosted_control_plane_namespace>`
    :   Specifies the hosted control plane namespace.

    `<ssh_pub_key>`
    :   Specifies the SSH public key.

1.  Verify the successful creation of the `InfraEnv` resources by running the following commands:
    *   Verify the successful creation of the `x86_64` `InfraEnv` resource:
        ```terminal
        $ oc describe InfraEnv <hosted_cluster_name>-<arch_x86>
        ```
    *   Verify the successful creation of the `ppc64le` `InfraEnv` resource:
        ```terminal
        $ oc describe InfraEnv <hosted_cluster_name>-<arch_ppc64le>
        ```
1.  Generate a live ISO that allows either a virtual machine or a bare-metal machine to join as agents by running the following commands:
    1.  Generate a live ISO for `x86_64`:
        ```terminal
        $ oc -n <hosted_control_plane_namespace> get InfraEnv <hosted_cluster_name>-<arch_x86> -ojsonpath="{.status.isoDownloadURL}"
        ```
    1.  Generate a live ISO for `ppc64le`:
        ```terminal
        $ oc -n <hosted_control_plane_namespace> get InfraEnv <hosted_cluster_name>-<arch_ppc64le> -ojsonpath="{.status.isoDownloadURL}"
        ```