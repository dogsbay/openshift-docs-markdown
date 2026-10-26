{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the internal image registry {id="converting-external-registry-delete_{{ context }}"}

You can complete configuring your cluster to use an external image registry by deleting the resource responsible for maintaining the internal image registry that was installed on your cluster. {._abstract}

**Prerequisites**

*   You installed your cluster using the method described in "Installing a cluster without an external registry".
*   You have successfully performed a cluster update using images mirrored to your external image registry.
You can ensure that your cluster has been updated to this new version by running the `oc get clusterversion` command.

    :::important

    The version you updated your cluster to must not be listed in the `status.releases` field of the `InternalReleaseImage` custom resource (CR).
    You can check the contents of the CR by running the `oc get InternalReleaseImage -o yaml` command.
    
    :::


**Procedure**

*   Delete the singleton `InternalReleaseImage` CR by running the following command:
    ```terminal
    $ oc delete internalreleaseimages cluster
    ```