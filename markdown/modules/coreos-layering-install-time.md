{% if context == "installing-" %}
{%- set install = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying a custom layered image during {{ product_title }} installation {id="coreos-layering-install-time_{{ context }}"}

You can use the standard {{ product_title }} installation process to apply a custom layered image to your nodes by adding a `MachineOSConfig` custom resource (CR) YAML and a push secret YAML to the `<installation_directory>/manifests/` directory. This allows you to use {{ image_mode_os_lower }} to apply additional functionality to specific nodes upon cluster installation. {._abstract}

{% if install %}
With {{ image_mode_os_lower }}, you can extend the functionality of your base {{ op_system_first }} image by layering additional images onto the base image. This layering does not modify the base RHCOS image. Instead, it creates a custom layered image that includes all {{ op_system }} functionality and adds additional functionality to specific nodes in the cluster. For example, you can create custom layered images to apply hotfixes, RHEL packages, or third-party RPMs to the nodes your cluster.

For more information on {{ image_mode_os_lower }}, see the "Additional resources" section.
{% endif %}

After the installation, if you modify a machine config pool or update the {{ product_title }} version, the Machine Config Operator (MCO) builds and applies a new custom layered image, and pushes the updated image to your repository.

**Prerequisites**

*   You have a custom layered image in a repository that your cluster can access.
    ```yaml title="Example containerFile for a custom layered image"
    FROM quay.io/centos/centos:stream9 AS centos
    RUN dnf install -y epel-release

    FROM [rhel-coreos image] AS configs
    COPY --from=centos /etc/yum.repos.d /etc/yum.repos.d
    COPY --from=centos /etc/pki/rpm-gpg/RPM-GPG-KEY-* /etc/pki/rpm-gpg/
    RUN sed -i 's/\$stream/9-stream/g' /etc/yum.repos.d/centos*.repo && \
        rpm-ostree install cowsay && \
        ostree container commit
    ```
*   You have a repository and any needed secret where the MCO can push any updated custom layered images. 

**Procedure**

{% include "./snippets/coreos-layering-on-callouts.md" %}

1.  Create a YAML file for the push secret similar to the following:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: push-secret
      namespace: openshift-machine-config-operator
    data:
      .dockerconfigjson: secret
    type: kubernetes.io/dockerconfigjson
    ```
1.  When the `manifests` directory is available, add the `MachineOSConfig` YAML to the directory by using a command similar to the following:
    ```terminal
    $ cp <file-name>.yaml manifests/
    ```

    where:

    `file-name`
    :   Specifies the YAML file for the `MachineOSConfig` object.

1.  Add the push secret YAML to the `manifests` directory by using a command similar to the following:
    ```terminal
    $ cp <file-name>.yaml manifests/
    ```

    where:

    `file-name`
    :   Specifies the YAML file for the push secret.

1.  Continue with the installation process as usual.

**Verification**

*   After the installation is complete, check that the `MachineOSConfig` object displays the `PreBuiltImageSeeded` status as `True` and contains a reference to the custom layered image by using the following command:
    ```terminal
    $ oc get machineosconfigs.machineconfiguration.openshift.io -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    items:
    - apiVersion: machineconfiguration.openshift.io/v1
      kind: MachineOSConfig
      metadata:
        annotations:
          machineconfiguration.openshift.io/current-machine-os-build: worker-4cedbc10da849ae7019288febc3a2d17
    # ...
      status:
        conditions:
        - lastTransitionTime: "2025-11-19T13:32:17Z"
          message: MachineOSConfig seeded with pre-built image "quay.io/myorg/custom-rhcos@sha256:abc123..."
          reason: PreBuiltImageSeeded
          status: "True"
          type: Seeded
        currentImagePullSpec: image-registry.openshift-image-registry.svc:5000/openshift-machine-config-operator/layered-rhcos@sha256:3c8fc667adcb432ce0c83581f16086afec08a961dd28fed69bb6bad6db0a0754 
    ```

    where:

    `items.status.conditions.reason.PreBuiltImageSeeded.True`
    :   Specifies that the associated nodes were created using your custom layered image. 

    `items.status.currentImagePullSpec`
    :   Specifies the digested image pull spec for the new custom layered image.