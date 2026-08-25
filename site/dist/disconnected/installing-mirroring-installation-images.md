---
title: Mirroring images for a disconnected installation by using the oc adm command
---

# Mirroring images for a disconnected installation by using the oc adm command {#installing-mirroring-installation-images}

You can ensure your clusters only use container images that satisfy your organizational controls on external content. Before you install a cluster on infrastructure that you provision in a restricted network, you must mirror the required container images into that environment.

By using the `oc adm` command, you can mirror release and catalog images in OpenShift. To mirror container images, you must have a registry for mirroring.

> [!IMPORTANT]
> - The `oc adm release mirror` command is deprecated as of OpenShift Container Platform 4.22 and will be removed in a future release. As an alternative, use the oc-mirror plugin v2.
> - You must have access to the internet to obtain the necessary container images. In this procedure, you place your mirror registry on a mirror host that has access to both your network and the internet. If you do not have access to a mirror host, use the "Mirroring Operator catalogs for use with disconnected clusters" procedure to copy images to a device you can move across network boundaries with.

> [!NOTE]
> When using the `oc adm release mirror` command, release image signatures are not automatically mirrored to the disconnected registry. Missing release signatures prevent cluster upgrades, as `ClusterImagePolicy` requires all release images to be verified. To ensure image signatures are correctly mirrored, it is recommended to use the oc-mirror v2 plugin.

**Additional resources**

- [Viewing the image pull source](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#viewing-the-image-pull-source_validating-an-installation)

**Additional resources**

- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2/)
- [Service Mesh Operator mirroring failed](https://access.redhat.com/solutions/6975305)

**Additional resources**

- [Unauthorized error thrown while using catalog mirror command with Quay registry](https://access.redhat.com/solutions/5440741)

**Additional resources**

- [Populating the software catalog from mirrored Operator catalogs](/openshift-docs-markdown/post_installation_configuration/preparing-for-users#post-install-mirrored-catalogs_post-install-preparing-for-users)
- [Updating or filtering a file-based catalog image](/openshift-docs-markdown/operators/admin/olm-managing-custom-catalogs#olm-filtering-fbc_olm-managing-custom-catalogs)

## Additional resources {#restricted-networks-additional-resources}

- [Gathering data about specific features](/openshift-docs-markdown/support/gathering-cluster-data#gathering-data-specific-features_gathering-cluster-data)
- [Installing a cluster on vSphere in a disconnected environment with user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_vsphere/upi/installing-restricted-networks-vsphere#installing-restricted-networks-vsphere)
- [Installing a user-provisioned bare-metal cluster on a disconnected environment](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal)
- [Installing a cluster on {{ aws_short }} in a disconnected environment with user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_aws/upi/installing-restricted-networks-aws#installing-restricted-networks-aws)
