{%- set _mod_docs_content_type = "PROCEDURE" %}

# Using the Driver Toolkit {id="kmm-using-driver-toolkit_{{ context }}"}

To build kernel module loader images in {{ product_title }}, you can use the Driver Toolkit (DTK) as the first stage of a multi-stage Dockerfile. DTK provides kernel headers and build tools matched to the cluster {{ product_title }} version. {._abstract}

**Procedure**

1.  Build the kernel modules.
1.  Copy the `.ko` files into a smaller end-user image such as [`ubi-minimal`](https://catalog.redhat.com/software/containers/ubi9/ubi-minimal).
1.  To leverage DTK in your in-cluster build, use the `DTK_AUTO` build argument.
The value is automatically set by KMM when creating the `Build` resource. See the following example.
    ```dockerfile
    ARG DTK_AUTO
    FROM ${DTK_AUTO} as builder
    ARG KERNEL_FULL_VERSION
    WORKDIR /usr/src
    RUN ["git", "clone", "https://github.com/rh-ecosystem-edge/kernel-module-management.git"]
    WORKDIR /usr/src/kernel-module-management/ci/kmm-kmod
    RUN KERNEL_SRC_DIR=/lib/modules/${KERNEL_FULL_VERSION}/build make all
    FROM ubi9/ubi-minimal
    ARG KERNEL_FULL_VERSION
    RUN microdnf install kmod
    COPY --from=builder /usr/src/kernel-module-management/ci/kmm-kmod/kmm_ci_a.ko /opt/lib/modules/${KERNEL_FULL_VERSION}/
    COPY --from=builder /usr/src/kernel-module-management/ci/kmm-kmod/kmm_ci_b.ko /opt/lib/modules/${KERNEL_FULL_VERSION}/
    RUN depmod -b /opt ${KERNEL_FULL_VERSION}
    ```