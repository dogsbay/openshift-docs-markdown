---
title: Image mode for OpenShift
---

# Image mode for OpenShift {#mco-coreos-layering}

You can extend the functionality of your base {{ op_system }} image by layering additional images onto the base image without modifying the base {{ op_system }} image.

This layering creates a *custom layered image* that includes all {{ op_system }} functionality and adds additional functionality to specific nodes in the cluster.

Image mode is a cloud-native approach to operating system management that treats your OS like a container image. You define your operating system configuration as code, build it as a unified image, and deploy it consistently across your entire fleet.

## About {{ image_mode_os_lower }} {#coreos-layering-about_mco-coreos-layering}

{{ image_mode_os_caps }} allows you to customize the underlying node operating system on any of your cluster nodes. This helps keep everything up-to-date, including the node operating system and any added customizations such as specialized software.

You create a custom layered image by using a Containerfile and applying it to nodes by using a custom object. At any time, you can remove the custom layered image by deleting that custom object.

With {{ image_mode_os_lower }}, you can install RPMs into your base image, and your custom content will be booted alongside {{ op_system }}. The Machine Config Operator (MCO) can roll out these custom layered images and monitor these custom containers in the same way it does for the default {{ op_system }} image. {{ image_mode_os_caps }} gives you greater flexibility in how you manage your {{ op_system }} nodes.

> [!IMPORTANT]
> Installing realtime kernel and extensions RPMs as custom layered content is not recommended. This is because these RPMs can conflict with RPMs installed by using a machine config. If there is a conflict, the MCO enters a `degraded` state when it tries to install the machine config RPM. You need to remove the conflicting extension from your machine config before proceeding.

When you apply the custom layered image to your cluster, you assume the responsibility for the package you applied with the custom layered image and any issues that might arise with the package.

There are three methods for deploying a custom layered image onto your nodes:

{{ image_mode_os_on_caps }}
:   With {{ image_mode_os_on_lower }}, you create a `MachineOSConfig` object where you include the Containerfile and other parameters. The build is performed on your cluster and the resulting custom layered image is automatically pushed to your repository and applied to the machine config pool that you specified in the `MachineOSConfig` object. The entire process is performed completely within your cluster.

{{ image_mode_os_out_caps }}
:   With {{ image_mode_os_out_lower }}, you create a Containerfile that references an OpenShift Container Platform image and the RPM that you want to apply, build the layered image in your own environment, and push the image to your repository. Then, in your cluster, create a `MachineConfig` object for the targeted node pool that points to the new image. The Machine Config Operator overrides the base {{ op_system }} image, as specified by the `osImageURL` value in the associated machine config, and boots the new image.

During OpenShift Container Platform installation
:   You can apply a pre-built custom layered image to specific nodes during OpenShift Container Platform installation.

> [!IMPORTANT]
> For these methods, use the same base {{ op_system }} image installed on the rest of your cluster. Use the `oc adm release info --image-for rhel-coreos` command to obtain the base image used in your cluster.

## Example Containerfiles {#coreos-layering-examples_mco-coreos-layering}

{{ image_mode_os_caps }} allows you to use the following types of images to create custom layered images:

- **OpenShift Container Platform Hotfixes**. You can work with Customer Experience and Engagement (CEE) to obtain and apply Hotfix packages on top of your {{ op_system }} image. In some instances, you might want a bug fix or enhancement before it is included in an official OpenShift Container Platform release. {{ image_mode_os_caps }} allows you to easily add the Hotfix before it is officially released and remove the Hotfix when the underlying {{ op_system }} image incorporates the fix.

  > [!IMPORTANT]
  > Some Hotfixes require a Red Hat Support Exception and are outside of the normal scope of OpenShift Container Platform support coverage or life cycle policies.

  Hotfixes are provided to you based on Red Hat Hotfix policy. Apply it on top of the base image and test that new custom layered image in a non-production environment. When you are satisfied that the custom layered image is safe to use in production, you can roll it out on your own schedule to specific node pools. For any reason, you can easily roll back the custom layered image and return to using the default {{ op_system }}.

  ```yaml {title="Example on-cluster Containerfile to apply a Hotfix"}
  containerfileArch: noarch
  content: |-
    FROM configs AS final
    #Install hotfix package
    RUN dnf update -y https://example.com/files/systemd-252-46.el9_4.x86_64.rpm \
                      https://example.com/files/systemd-journal-remote-252-46.el9_4.x86_64.rpm \
                      https://example.com/files/systemd-libs-252-46.el9_4.x86_64.rpm  \
                      https://example.com/files/systemd-pam-252-46.el9_4.x86_64.rpm \
                      https://example.com/files/systemd-udev-252-46.el9_4.x86_64.rpm \
                      https://example.com/files/systemd-rpm-macros-252-46.el9_4.noarch.rpm && \
        dnf clean all && \
        bootc container lint
  ```

  ```yaml {title="Example out-of-cluster Containerfile to apply a Hotfix"}
  FROM quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256...
  #Install hotfix package
  RUN dnf update -y https://example.com/files/systemd-252-46.el9_4.x86_64.rpm \
                    https://example.com/files/systemd-journal-remote-252-46.el9_4.x86_64.rpm \
                    https://example.com/files/systemd-libs-252-46.el9_4.x86_64.rpm  \
                    https://example.com/files/systemd-pam-252-46.el9_4.x86_64.rpm \
                    https://example.com/files/systemd-udev-252-46.el9_4.x86_64.rpm \
                    https://example.com/files/systemd-rpm-macros-252-46.el9_4.noarch.rpm && \
      dnf clean all && \
      bootc container lint
  ```
- **{{ op_system_base }} packages**. You can download {{ op_system_base_full }} packages from the Red Hat Customer Portal, such as chrony, firewalld, and iputils.

  ```yaml {title="Example out-of-cluster Containerfile to apply the rsyslog utility"}
  # Using a 4.18.0 image
  FROM quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256...
  # Install rsyslog package
  RUN dnf install -y rsyslog && \
      bootc container lint
  # Copy your custom configuration in
  ADD remote.conf /etc/rsyslog.d/remote.conf
  ```
- **Third-party packages**. You can download and install RPMs from third-party organizations, such as the following types of packages:

  - Bleeding edge drivers and kernel enhancements to improve performance or add capabilities.
  - Forensic client tools to investigate possible and actual break-ins.
  - Security agents.
  - Inventory agents that provide a coherent view of the entire cluster.
  - SSH Key management packages.

  ```yaml {title="Example on-cluster Containerfile to apply a third-party package from EPEL"}
  FROM configs AS final

  #Enable EPEL (more info at https://docs.fedoraproject.org/en-US/epel/ ) and install htop
  RUN dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm && \
      dnf install -y htop && \
      dnf clean all && \
      bootc container lint
  ```

  ```yaml {title="Example out-of-cluster Containerfile to apply a third-party package from EPEL"}
  # Get {{ op_system }} base image of target cluster `oc adm release info --image-for rhel-coreos`
  FROM quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256...

  #Enable EPEL (more info at https://docs.fedoraproject.org/en-US/epel/ ) and install htop
  RUN dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm && \
      dnf install -y htop && \
      dnf clean all && \
      bootc container lint
  ```

  This Containerfile installs the {{ op_system_base }} fish program. Because fish requires additional {{ op_system_base }} packages, the image must be built on an entitled {{ op_system_base }} host. For {{ op_system_base }} entitlements to work, you must copy the `etc-pki-entitlement` secret into the `openshift-machine-config-operator` namespace.

  ```yaml {title="Example on-cluster Containerfile to apply a third-party package that has {{ op_system_base }} dependencies"}
  FROM configs AS final

  # RHEL entitled host is needed here to access RHEL packages
  # Install fish as third party package from EPEL
  RUN dnf install -y https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/Packages/f/fish-3.3.1-3.el9.x86_64.rpm && \
      dnf clean all && \
      bootc container lint
  ```

  ```yaml {title="Example out-of-cluster Containerfile to apply a third-party package that has {{ op_system_base }} dependencies"}
  # Get {{ op_system }} base image of target cluster `oc adm release info --image-for rhel-coreos`
  FROM quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256...

  # {{ op_system_base }} entitled host is needed here to access {{ op_system_base }} packages
  # Install fish as third party package from EPEL
  RUN dnf install -y https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/Packages/f/fish-3.3.1-3.el9.x86_64.rpm && \
      dnf clean all && \
      bootc container lint
  ```

After you create the machine config, the Machine Config Operator (MCO) performs the following steps:

1. Renders a new machine config for the specified pool or pools.
2. Performs cordon and drain operations on the nodes in the pool or pools.
3. Writes the rest of the machine config parameters onto the nodes.
4. Applies the custom layered image to the node.
5. Reboots the node using the new image.

> [!IMPORTANT]
> It is strongly recommended that you test your images outside of your production environment before rolling out to your cluster.

## Additional resources {#additional-resources_mco-coreos-layering}

- [Using the {{ image_mode_os_on_lower }} to apply a custom layered image](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#coreos-layering-configuring-on-proc_mco-coreos-layering)
- [Removing an on-cluster custom layered image](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#coreos-layering-configuring-on-remove_mco-coreos-layering)
- [Pausing the machine config pools](/openshift-docs-markdown/updating/updating_a_cluster/update-using-custom-machine-config-pools#update-using-custom-machine-config-pools-pause_update-using-custom-machine-config-pools)
- [Rebuilding an on-cluster custom layered image](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#coreos-layering-configuring-on-rebuild_mco-coreos-layering)
- [Reverting an on-cluster custom layered image](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#coreos-layering-configuring-on-revert_mco-coreos-layering)
- [Modifying a custom layered image](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#coreos-layering-configuring-on-modifying_mco-coreos-layering)
- [About checking machine config node status](/openshift-docs-markdown/machine_configuration/index#checking-mco-node-status_machine-config-overview)
- [Updating the global cluster pull secret](/openshift-docs-markdown/openshift_images/managing_images/using-image-pull-secrets#images-update-global-pull-secret_using-image-pull-secrets)
- [Enabling features using feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
- [Updating with a {{ op_system }} custom layered image](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#coreos-layering-updating_mco-coreos-layering)
- [What is a Hotfix package? (Red Hat Knowledgebase article)](https://access.redhat.com/solutions/2996001)
- [Download Red Hat Enterprise Linux Packages](https://access.redhat.com/downloads/content/479/ver=/rhel---9/9.1/x86_64/packages)
