{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optional: Disabling redirect when using a private storage endpoint on Azure {id="disabling-redirect-private-storage-endpoint-azure_{{ context }}"}

You can disable redirect when using a private Azure storage endpoint so that users outside the cluster can pull images through the image registry route. {._abstract}

By default, redirect is enabled when using the image registry. Redirect allows off-loading of traffic from the registry pods into the object storage, which makes pull faster. When redirect is enabled and the storage account is private, users from outside of the cluster are unable to pull images from the registry.

In some cases, users might want to disable redirect so that users from outside of the cluster can pull images from the registry.

**Prerequisites**

*   You have configured the image registry to run on Azure.
*   You have configured a route.

**Procedure**

*   Enter the following command to disable redirect on the image
registry configuration:
    ```terminal
    $ oc patch configs.imageregistry cluster --type=merge -p '{"spec":{"disableRedirect": true}}'
    ```

**Verification**

1.  Fetch the registry service name by running the following command:
    ```terminal
    $ oc get imagestream -n openshift
    ```
    ```terminal title="Example output"
    NAME   IMAGE REPOSITORY                                           TAGS     UPDATED
    cli    default-route-openshift-image-registry.<cluster_dns>/cli   latest   8 hours ago
    ...
    ```
1.  Enter the following command to log in to your container registry:
    ```terminal
    $ podman login --tls-verify=false -u unused -p $(oc whoami -t) default-route-openshift-image-registry.<cluster_dns>
    ```
    ```terminal title="Example output"
    Login Succeeded!
    ```
1.  Enter the following command to verify that you can pull an image from the registry:
    ```terminal
    $ podman pull --tls-verify=false default-route-openshift-image-registry.<cluster_dns>
    /openshift/tools
    ```
    ```terminal title="Example output"
    Trying to pull default-route-openshift-image-registry.<cluster_dns>/openshift/tools...
    Getting image source signatures
    Copying blob 6b245f040973 done
    Copying config 22667f5368 done
    Writing manifest to image destination
    Storing signatures
    22667f53682a2920948d19c7133ab1c9c3f745805c14125859d20cede07f11f9
    ```