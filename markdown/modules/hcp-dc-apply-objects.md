{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying objects in the management cluster {id="hcp-dc-apply-objects_{{ context }}"}

After the mirroring process is complete, you must apply two objects required for mirroring in the management cluster. {._abstract}

You apply the following objects:

*   `ImageContentSourcePolicy` (ICSP) or `ImageDigestMirrorSet` (IDMS)
*   Catalog sources

When you use the `oc-mirror` tool, the output artifacts are in a folder named `oc-mirror-workspace/results-XXXXXX/`.

The `oc mirror` mirroring file initiates a `MachineConfig` change that does not restart your nodes but restarts the kubelet on each of them. After the nodes are marked as `READY`, you need to apply the newly generated catalog sources.

The catalog sources initiate actions in the `openshift-marketplace` Operator, such as downloading the catalog image and processing it to retrieve all the `PackageManifests` that are included in that image.

**Procedure**

1.  To check the new sources, run the following command by using the new `CatalogSource` as a source:
    ```terminal
    $ oc get packagemanifest
    ```
1.  To apply the artifacts, complete the following steps:
    1.  Create the ICSP or IDMS artifacts by entering the following command:
        ```terminal
        $ oc apply -f oc-mirror-workspace/results-XXXXXX/imageContentSourcePolicy.yaml
        ```
    1.  Wait for the nodes to become ready, and then enter the following command:
        ```terminal
        $ oc apply -f catalogSource-XXXXXXXX-index.yaml
        ```
1.  Mirror the OLM catalogs and configure the hosted cluster to point to the mirror.

    When you use the `management` (default) OLMCatalogPlacement mode, the image stream that is used for OLM catalogs is not automatically amended with override information from the ICSP on the management cluster.
    1.  If the OLM catalogs are properly mirrored to an internal registry by using the original name and tag, add the `hypershift.openshift.io/olm-catalogs-is-registry-overrides` annotation to the `HostedCluster` resource. The format is `"sr1=dr1,sr2=dr2"`, where the source registry string is a key and the destination registry is a value.
    1.  To bypass the OLM catalog image stream mechanism, use the following four annotations on the `HostedCluster` resource to directly specify the addresses of the four images to use for OLM Operator catalogs:
        *   `hypershift.openshift.io/certified-operators-catalog-image`
        *   `hypershift.openshift.io/community-operators-catalog-image`
        *   `hypershift.openshift.io/redhat-marketplace-catalog-image`
        *   `hypershift.openshift.io/redhat-operators-catalog-image`

            In this case, the image stream is not created, and you must update the value of the annotations when the internal mirror is refreshed to pull in Operator updates.

**Next steps**

Deploy the {{ mce_short }} by completing the steps in "Deploying {{ mce_short }} for a disconnected installation of {{ hcp }}".