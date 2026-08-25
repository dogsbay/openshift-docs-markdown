{%- set _mod_docs_content_type = "PROCEDURE" %}
# Publish the bootc image to the remote registry {id="microshift-bootc-publish-image_{{ context }}"}

Publish your bootc image to the remote registry so that the image can be used for running the container on another host, or for when you want to install a new operating system with the bootc image layer. {._abstract}

**Prerequisites**

*   You are logged in to the {{ op_system_base }} {{ op_system_version }} host where the image was built using the user credentials that have `sudo` permissions.
*   You have a remote registry such as [{{ quay }}](https://quay.io) for storing and accessing bootc images.
*   You created the Containerfile and built the image.

**Procedure**

1.  Set the `REGISTRY_URL` variable for the image by running the following command:
    ```terminal
    $ REGISTRY_URL=_<quay.io>_
    ```

    Replace `_<quay.io>_` with the URL for your image registry.
1.  Log in to your remote registry by running the following command:
    ```terminal
    $ sudo podman login "${REGISTRY_URL}"
    ```
1.  Set the `IMAGE_NAME` variable for the image by running the following command:
    ```terminal
    $ IMAGE_NAME=_<microshift-{{ product_version }}-bootc>_
    ```

    Replace _&lt;microshift-{{ product_version }}-bootc>_ with the name of the image you want to publish.
1.  Set the `REGISTRY_IMG` variable for the image by running the following command:
    ```terminal
    $ REGISTRY_IMG=_<myorg/mypath>_/"${IMAGE_NAME}"
    ```

    Replace `_<myorg/mypath>_` with your remote registry organization name and path.
1.  Publish the image by running the following command:
    ```terminal
    $ sudo podman push localhost/"${IMAGE_NAME}" "${REGISTRY_URL}/${REGISTRY_IMG}"
    ```

**Verification**

1.  Run the container using the image you pushed to your registry as described in the "Running the {{ microshift_short }} bootc container" section.