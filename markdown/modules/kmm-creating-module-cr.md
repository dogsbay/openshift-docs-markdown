{%- set _mod_docs_content_type = "CONCEPT" %}

# The Module custom resource definition {id="kmm-creating-module-cr_{{ context }}"}

The `Module` custom resource (CR) in {{ product_title }} represents a kernel module that can be loaded on all or select nodes in the cluster, through a kmod image. A `Module` CR specifies one or more kernel versions with which it is compatible, and a node selector. {._abstract}

The compatible versions for a `Module` resource are listed under `.spec.moduleLoader.container.kernelMappings`. A kernel mapping can either match a `literal` version, or use `regexp` to match many of them at the same time.

The reconciliation loop for the `Module` resource runs the following steps:

1.  List all nodes matching `.spec.selector`.
1.  Build a set of all kernel versions running on those nodes.
1.  For each kernel version:
    1.  Go through `.spec.moduleLoader.container.kernelMappings` and find the appropriate container image name.
     If the kernel mapping has `build` or `sign` defined and the container image does not already exist, run the build, the signing pod, or both, as needed.
    1.  Create a worker pod to pull the container image determined in the previous step and run `modprobe`.
    1.  If `.spec.devicePlugin` is defined, create a device plugin daemon set using the configuration specified under `.spec.devicePlugin.container`.
1.  Run `garbage-collect` on:
    1.  Obsolete device plugin `DaemonSets` that do not target any node.
    1.  Successful build pods.
    1.  Successful signing pods.