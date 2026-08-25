{%- set _mod_docs_content_type = "CONCEPT" %}
# Deletion of images from your disconnected environment {id="oc-mirror-workflows-delete-v2_{{ context }}"}

If you have previously deployed images using the oc-mirror plugin v2, you can delete these images to free up space in your mirror registry. {._abstract}

oc-mirror plugin v2 does not automatically prune images that are not included in the `ImageSetConfiguration` file.
This prevents accidentally deleting necessary or deployed images when making changes to the `ImageSetConfig.yaml` file.

To delete images, you can use the `DeleteImageSetConfiguration` file that was automatically pinned by digest during the mirroring process, or you can manually create a new file.

In the following example, the `DeleteImageSetConfiguration` file removes the following images:

*   All release images for {{ product_title }} 4.13.3.
*   The `aws-load-balancer-operator` v0.0.1 bundle and all its related images.
*   The additional images for `ubi` and `ubi-minimal`, referenced by their corresponding digests.

```yaml title="Example DeleteImageSetConfiguration file"
apiVersion: mirror.openshift.io/v2alpha1
kind: DeleteImageSetConfiguration
delete:
  platform:
    channels:
      - name: stable-4.13
        minVersion: 4.13.3
        maxVersion: 4.13.3
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.12
      packages:
      - name: aws-load-balancer-operator
         minVersion: 0.0.1
         maxVersion: 0.0.1
  additionalImages:
    - name: registry.redhat.io/ubi8/ubi@sha256:bce7e9f69fb7d4533447232478fd825811c760288f87a35699f9c8f030f2c1a6
    - name: registry.redhat.io/ubi8/ubi-minimal@sha256:8bedbe742f140108897fb3532068e8316900d9814f399d676ac78b46e740e34e
```


:::important

*   Consider using the mirror-to-disk and disk-to-mirror workflows to reduce deletion issues.
*   In oc-mirror plugin v2, you must use explicit registry hostnames for all images listed under `additionalImages`. Otherwise, images are mirrored to incorrect target paths.

:::


oc-mirror plugin v2 deletes only the manifests of the images, which does not reduce the storage occupied in the registry.

To free up storage space from unnecessary images, such as those with deleted manifests, you must enable the garbage collector on your container registry. With the garbage collector enabled, the registry will delete the image blobs that no longer have references to any manifests, reducing the storage previously occupied by the deleted blobs. The process for enabling the garbage collector differs depending on your container registry.

For more information, see "Resolving storage cleanup issues in the distribution registry".


:::important

*   To skip deleting the Operator catalog image while you are deleting Operator images, you must list the specific Operators under the Operator catalog image in the `DeleteImageSetConfiguration` file. This ensures that only the specified Operators are deleted, not the catalog image.

    If only the Operator catalog image is specified, all Operators within that catalog, as well as the catalog image itself, will be deleted.
*   oc-mirror plugin v2 does not delete Operator catalog images automatically because other Operators may still be deployed and depend on these images.

    If you are certain that no Operators from a catalog remain in the registry or cluster, you can explicitly add the catalog image to `additionalImages` in `DeleteImageSetConfiguration` to remove it.
*   Garbage collection behavior depends on the registry. Some registries do not automatically remove deleted images, requiring a system administrator to manually trigger garbage collection to free up space.

:::