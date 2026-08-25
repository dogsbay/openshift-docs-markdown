{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ image_mode_os_out_caps }} to apply a custom layered image {id="coreos-layering-configuring_{{ context }}"}

You can use the {{ image_mode_os_lower }} out-of-cluster build process to apply a custom layered image to your nodes by creating a `MachineOSConfig` custom resource (CR).  {._abstract}

When you create the object, the Machine Config Operator (MCO) reboots those nodes with the new custom layered image, overriding the base {{ op_system_first }} image.

To apply a custom layered image to your cluster, you must have the custom layered image in a repository that your cluster can access. Then, create a `MachineConfig` object that points to the custom layered image. You need a separate `MachineConfig` object for each machine config pool that you want to configure.


:::important

As soon as you apply an out-of-cluster custom image to your cluster, you effectively _take ownership_ of your custom layered images and those nodes. {{ product_title }} no longer automatically updates any node that uses the custom layered image. You become responsible for maintaining and updating your nodes as appropriate. If you roll back the custom layer, {{ product_title }} resumes automatically updating the node. See the "Updating with a RHCOS custom layered image" for important information about updating nodes that use a custom layered image.

:::


**Prerequisites**

*   You must create a custom layered image that is based on an {{ product_title }} image digest, not a tag.

    :::note

    You should use the same base {{ op_system }} image that is installed on the rest of your cluster. Use the `oc adm release info --image-for rhel-coreos` command to obtain the base image being used in your cluster.
    
    :::


    For example, the following Containerfile creates a custom layered image from an {{ product_title }} {{ product_version }} image and overrides the kernel package with one from CentOS 9 Stream:
    ```yaml title="Example Containerfile for a custom layer image" {minja}
    # Using a {{ product_version }}.0 image
    FROM quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256...
    #Install hotfix rpm
    RUN rpm-ostree override replace http://mirror.stream.centos.org/9-stream/BaseOS/x86_64/os/Packages/kernel-{,core-,modules-,modules-core-,modules-extra-}5.14.0-295.el9.x86_64.rpm && \
        rpm-ostree cleanup -m && \
        bootc container lint
    ```

    where:

    `FROM`
    :   Specifies the {{ op_system }} base image of your cluster.

    `RUN`
    :   Replaces the kernel packages.

    :::note

    Instructions on how to create a Containerfile are beyond the scope of this documentation.
    
    :::

*   Because the process for building a custom layered image is performed outside of the cluster, you must use the `--authfile /path/to/pull-secret` option with Podman or Buildah. Alternatively, to have the pull secret read by these tools automatically, you can add it to one of the default file locations: `~/.docker/config.json`, `$XDG_RUNTIME_DIR/containers/auth.json`, `~/.docker/config.json`, or `~/.dockercfg`. Refer to the `containers-auth.json` man page for more information.
*   You must push the custom layered image to a repository that your cluster can access.

**Procedure**

1.  Create a machine config file.
    1.  Create a YAML file similar to the following:
        ```yaml
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfig
        metadata:
          labels:
            machineconfiguration.openshift.io/role: worker
          name: os-layer-custom
        spec:
          osImageURL: quay.io/my-registry/custom-image@sha256...
        ```

        where:

        `metadata.labels`
        :   Specifies the machine config pool to deploy the custom layered image.

        `spec.osImageURL`
        :   Specifies the path to the custom layered image in the repository.

    1.  Create the `MachineConfig` object:
        ```terminal
        $ oc create -f <file_name>.yaml
        ```

        :::important

        It is strongly recommended that you test your images outside of your production environment before rolling out to your cluster.
        
        :::


**Verification**

You can verify that the custom layered image is applied by performing any of the following checks:

1.  Check that the worker machine config pool has rolled out with the new machine config:
    1.  Check that the new machine config is created:
        ```terminal
        $ oc get mc
        ```
        ```terminal title="Sample output"
        NAME                                               GENERATEDBYCONTROLLER                      IGNITIONVERSION   AGE
        00-master                                          5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        00-worker                                          5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        01-master-container-runtime                        5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        01-master-kubelet                                  5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        01-worker-container-runtime                        5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        01-worker-kubelet                                  5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        99-master-generated-registries                     5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        99-master-ssh                                                                                 3.2.0             98m
        99-worker-generated-registries                     5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        99-worker-ssh                                                                                 3.2.0             98m
        os-layer-custom                                                                                                 10s
        rendered-master-15961f1da260f7be141006404d17d39b   5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        rendered-worker-5aff604cb1381a4fe07feaf1595a797e   5bdb57489b720096ef912f738b46330a8f577803   3.5.0             95m
        rendered-worker-5de4837625b1cbc237de6b22bc0bc873   5bdb57489b720096ef912f738b46330a8f577803   3.5.0             4s
        ```

        The `os-layer-custom` object is the newly created machine config. The `rendered-worker-5de4837625b1cbc237de6b22bc0bc873` object is the newly created rendered machine config.
    1.  Check that the `osImageURL` value in the new machine config points to the expected image:
        ```terminal
        $ oc describe mc rendered-worker-5de4837625b1cbc237de6b22bc0bc873
        ```
        ```terminal title="Example output" {minja}
        Name:         rendered-worker-5de4837625b1cbc237de6b22bc0bc873
        Namespace:
        Labels:       <none>
        Annotations:  machineconfiguration.openshift.io/generated-by-controller-version: 5bdb57489b720096ef912f738b46330a8f577803
                      machineconfiguration.openshift.io/release-image-version: {{ product_version }}.0-ec.3
        API Version:  machineconfiguration.openshift.io/v1
        Kind:         MachineConfig
        ...
          Os Image URL: quay.io/my-registry/custom-image@sha256...
        ```
    1.  Check that the associated machine config pool is updated with the new machine config:
        ```terminal
        $ oc get mcp
        ```
        ```terminal title="Sample output"
        NAME     CONFIG                                             UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
        master   rendered-master-15961f1da260f7be141006404d17d39b   True      False      False      3              3                   3                     0                      39m
        worker   rendered-worker-5de4837625b1cbc237de6b22bc0bc873   True      False      False      3              0                   0                     0                      39m
        ```

        When the `UPDATING` field is `True`, the machine config pool is updating with the new machine config. In this case, you will not see the new machine config listed in the output. When the field becomes `False`, the worker machine config pool has rolled out to the new machine config.
    1.  Check the nodes to see that scheduling on the nodes is disabled. This indicates that the change is being applied:
        ```terminal
        $ oc get nodes
        ```
        ```terminal title="Example output"
        NAME                                         STATUS                     ROLES                  AGE   VERSION
        ip-10-0-148-79.us-west-1.compute.internal    Ready                      worker                 32m   v1.35.4
        ip-10-0-155-125.us-west-1.compute.internal   Ready,SchedulingDisabled   worker                 35m   v1.35.4
        ip-10-0-170-47.us-west-1.compute.internal    Ready                      control-plane,master   42m   v1.35.4
        ip-10-0-174-77.us-west-1.compute.internal    Ready                      control-plane,master   42m   v1.35.4
        ip-10-0-211-49.us-west-1.compute.internal    Ready                      control-plane,master   42m   v1.35.4
        ip-10-0-218-151.us-west-1.compute.internal   Ready                      worker                 31m   v1.35.4
        ```
1.  When the node is back in the `Ready` state, check that the node is using the custom layered image:
    1.  Open an `oc debug` session to the node. For example:
        ```terminal
        $ oc debug node/ip-10-0-155-125.us-west-1.compute.internal
        ```
    1.  Set `/host` as the root directory within the debug shell:
        ```terminal
        sh-4.4# chroot /host
        ```
    1.  Run the `rpm-ostree status` command to view that the custom layered image is in use:
        ```terminal
        sh-4.4# sudo rpm-ostree status
        ```
        ```text title="Example output"
        State: idle
        Deployments:
        * ostree-unverified-registry:quay.io/my-registry/...
                           Digest: sha256:...
        ```