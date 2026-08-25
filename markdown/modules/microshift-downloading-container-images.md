{%- set _mod_docs_content_type = "PROCEDURE" %}
# Download container images {id="microshift-downloading-container-images_{{ context }}"}

After you have located the container list and completed the mirroring prerequisites, download the container images to a host with internet access. {._abstract}

**Prerequisites**

*   You logged into a host with access to the internet.
*   The `.pull-secret-mirror.json` file and `microshift-containers` directory contents are available locally.

**Procedure**

1.  Install the `skopeo` tool used for copying the container images by running the following command:
    ```terminal
    $ sudo dnf install -y skopeo
    ```
1.  Set the environment variable that points to the pull secret file:
    ```terminal
    $ PULL_SECRET_FILE=~/.pull-secret-mirror.json
    ```
1.  Set the environment variable that points to the list of container images:
    ```terminal
    $ IMAGE_LIST_FILE=~/microshift-container-refs.txt
    ```
1.  Set the environment variable that points to the destination directory for storing the downloaded data:
    ```terminal
    $ IMAGE_LOCAL_DIR=~/microshift-containers
    ```
1.  Run the following script to download the container images to the `${{ IMAGE_LOCAL_DIR }}`{minja} directory:
    ```terminal
    while read -r src_img ; do
       # Remove the source registry prefix
       dst_img=$(echo "${src_img}" | cut -d '/' -f 2-)

       # Run the image download command
       echo "Downloading '${src_img}' to '${IMAGE_LOCAL_DIR}'"
       mkdir -p "${IMAGE_LOCAL_DIR}/${dst_img}"
       skopeo copy --all --quiet \
          --preserve-digests \
          --authfile "${PULL_SECRET_FILE}" \
          docker://"${src_img}" dir://"${IMAGE_LOCAL_DIR}/${dst_img}"

    done < "${IMAGE_LIST_FILE}"
    ```