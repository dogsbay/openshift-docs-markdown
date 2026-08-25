{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating containers by using images from third-party registries {id="registry-third-party-registries_{{ context }}"}

Some container image registries require access authorization. Podman is an open source tool for managing containers and container images and interacting with image registries. You can use Podman to authenticate your credentials, pull the registry image, and store local images in a local file system. The procedure provides a generic example of authenticating the registry with Podman. {._abstract}

{{ product_title }} can communicate with registries to access private image repositories by using credentials supplied by the user. This allows {{ product_title }} to push and pull images to and from private repositories.

{{ product_title }} can create containers by using images from third-party registries, but these registries unlikely offer the same image notification support as the integrated {{ product_registry }}.In this situation, {{ product_title }} fetches tags from the remote registry upon image stream creation. To refresh the fetched tags, run `oc import-image <stream>`. When new images are detected, the previously described build and deployment reactions occur.

**Procedure**

1.  Use the [Red Hat Ecosystem Catalog](https://catalog.redhat.com/software/containers/explore) to search for specific container images from the Red Hat Repository and select the required image.
1.  Click **Get this image** to find the command for your container image.
1.  Log in by running the following command and entering your username and password to authenticate. Example output is shown for demonstrative purposes. 
    ```terminal
    $ podman login registry.redhat.io
    ```
    ```terminal
     Username:<your_registry_account_username>
     Password:<your_registry_account_password>
    ```
1.  Download the image and save it locally by running the following command:
    ```terminal
    $ podman pull registry.redhat.io/<repository_name>
    ```