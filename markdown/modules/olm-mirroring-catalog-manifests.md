{%- set _mod_docs_content_type = "REFERENCE" %}
# Generated manifests {id="olm-mirror-catalog-manifests_{{ context }}"}

After mirroring Operator catalog content to your mirror registry, a manifests directory is generated in your current directory. {._abstract}

If you mirrored content to a registry on the same network, the directory name takes the following pattern:

```text
manifests-<index_image_name>-<random_number>
```

If you mirrored content to a registry on a disconnected host in the previous section, the directory name takes the following pattern:

```text
manifests-index/<repository>/<index_image_name>-<random_number>
```


:::note

The manifests directory name is referenced in subsequent procedures.

:::


The manifests directory contains the following files, some of which might require further modification:

*   The `catalogSource.yaml` file is a basic definition for a `CatalogSource` object that is pre-populated with your index image tag and other relevant metadata. This file can be used as is or modified to add the catalog source to your cluster.

    :::important

    If you mirrored the content to local files, you must modify your `catalogSource.yaml` file to remove any backslash (`/`) characters from the `metadata.name` field. Otherwise, when you attempt to create the object, it fails with an "invalid resource name" error.
    
    :::

*   The `imageContentSourcePolicy.yaml` file defines an `ImageContentSourcePolicy` object that can configure nodes to translate between the image references stored in Operator manifests and the mirrored registry.

    :::note

    If your cluster uses an `ImageContentSourcePolicy` object to configure repository mirroring, you can use only global pull secrets for mirrored registries. You cannot add a pull secret to a project.
    
    :::

*   The `mapping.txt` file contains all of the source images and where to map them in the target registry. This file is compatible with the `oc image mirror` command and can be used to further customize the mirroring configuration.

    :::important

    If you used the `--manifests-only` flag during the mirroring process and want to further trim the subset of packages to mirror, see the steps in the [Mirroring a package manifest format catalog image](https://docs.openshift.com/container-platform/4.7/operators/admin/olm-managing-custom-catalogs.html#olm-mirroring-package-manifest-catalog_olm-managing-custom-catalogs) procedure of the {{ product_title }} 4.7 documentation about modifying your `mapping.txt` file and using the file with the `oc image mirror` command.
    
    :::