{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding NUMA image validation {id="cnf-understanding-numa-image-validation_{{ context }}"}

The NUMA Resources Operator validates scheduler images against a trusted digest list.
By default, the Operator rejects a custom Resource Topology Exporter (RTE) image so that only the default RTE image runs on worker nodes. {._abstract}

## Scheduler image validation {id="cnf-understanding-scheduler-image-validation_{{ context }}"}

The NUMA Resources Operator validates scheduler images to ensure that only trusted images run with scheduler privileges.

By default, the Operator enforces the following validation rules for images specified in the `NUMAResourcesScheduler` custom resource `spec.imageSpec` field:


Digest-based references required
:   The image reference must use a SHA-256 digest format. For example, `registry.redhat.io/openshift4/noderesourcetopology-scheduler-rhel9@sha256:abc123...` is valid, but `registry.redhat.io/openshift4/noderesourcetopology-scheduler-rhel9:v5.0` is rejected.


Trusted digest list
:   To be valid, the image digest must meet one of the following conditions:

    *   Included in the Operator’s trusted list of production scheduler images for the current release channel.
    *   The final digest released in the previous release channel.
    *   Added to the trusted list by setting the `SCHEDULER_IMAGE_DIGESTS` environment variable in the NUMA Resources Operator subscription. For more information, see "Extending the trusted scheduler image list".

If you specify an image that does not meet these requirements, the Operator sets the `NUMAResourcesScheduler` resource status to `Degraded` with reason `InvalidSchedulerImage`, and the scheduler pods are not created.
When validation fails, the `Degraded` condition reports the reason. For example:

```terminal title="Example output"
True - InvalidSchedulerImage: image "registry.example.com/custom-scheduler:v1.0" must be referenced by digest, not by tag
```


:::note

The `spec.imageSpec` field is required.
You must specify a scheduler image by using a digest-based reference.
For standard deployments, use the production scheduler image for your {{ product_title }} release from `registry.redhat.io`.
In disconnected environments, mirror this image to your registry and reference it by digest.
If the digest changes from the original production digest, add the new digest to the trusted list by setting the `SCHEDULER_IMAGE_DIGESTS` environment variable in the NUMA Resources Operator subscription.

:::


## RTE image validation {id="cnf-understanding-rte-image-validation_{{ context }}"}

By default, the NUMA Resources Operator does not allow a custom Resource Topology Exporter (RTE) image.
If you set the exporter image in the `NUMAResourcesOperator` custom resource `spec.imageSpec` field, the Operator sets the resource status to `Degraded` with reason `CustomUserImage` and does not reconcile the resource.
When validation fails, the `Degraded` condition reports the reason. For example:

```terminal title="Example output"
True - CustomUserImage: custom operand image is not supported: registry.example.com/custom-rte:v1.0
```

Leave `spec.imageSpec` unset so that the Operator uses the default RTE image for your {{ product_title }} release. The default RTE image is the same image as the Operator container. In a disconnected environment, the image mirroring configuration for the Operator container redirects that image to your internal registry.

A cluster administrator can temporarily restore the previous behavior, which allows a custom RTE image, by setting the `EXPORTER_IMAGE_RESTRICTION` environment variable to `false` in the NUMA Resources Operator subscription.


:::warning

Setting `EXPORTER_IMAGE_RESTRICTION` to `false` allows a custom RTE image to run with RTE privileges on worker nodes. Use this override only when you must run a non-default RTE image.

:::