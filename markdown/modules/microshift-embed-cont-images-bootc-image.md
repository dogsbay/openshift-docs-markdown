{%- set _mod_docs_content_type = "PROCEDURE" %}
# Embed container images into a bootc image {id="microshift-embed-cont-images-bootc-image_{{ context }}"}

You embed container images by adding instructions to an existing Containerfile to copy the images you want and list them in a file to keep track of the copied image names. {._abstract}

Then, you must copy images locally from the `/usr/lib/containers/storage` directory to the local container storage.


:::important

You cannot store images in the default or additional container storage directory when you build bootc images. For example, if you update the additional container store setting in `/etc/containers/storage.conf` to point to the `/usr/lib/containers/storage` directory, bootc image updates fail.

:::


**Prerequisites**

*   You have root access to the host.
*   You installed Podman.
*   You installed skopeo.
*   You have workload image references.
*   You have a Containerfile for building {{ microshift_short }} images.

**Procedure**

1.  Add the pull secret to the container build procedure to ensure that images can be pulled by running the following command:
    ```terminal
    $ podman build --secret id=pullsecret,src=/_<path/to/pull/secret>_.json
    ```

    Specify the path to your pull secret in _&lt;path/to/pull/secret>_.
1.  Add the instructions to physically embed the image at build time by adding the following to your Containerfile:
    ```text
    ENV IMAGE_STORAGE_DIR=/usr/lib/containers/storage
    ENV IMAGE_LIST_FILE=${IMAGE_STORAGE_DIR}/image-list.txt

    RUN dnf install -y microshift-release-info
    RUN --mount=type=secret,id=pullsecret,dst=/run/secrets/pull-secret.json \
        images="$(jq -r ".images[]" /usr/share/microshift/release/release-"$(uname -m)".json)" ; \
        mkdir -p "${IMAGE_STORAGE_DIR}" ; \
        for img in ${images} ; do \
            sha="$(echo "${img}" | sha256sum | awk '{print $1}')" ; \
            skopeo copy --all --preserve-digests \
                --authfile /run/secrets/pull-secret.json \
                "docker://${img}" "dir:$IMAGE_STORAGE_DIR/${sha}" ; \
            echo "${img},${sha}" >> "${IMAGE_LIST_FILE}" ; \
        done
    ```

    When run, the Containerfile extracts the list of {{ microshift_short }} container image dependencies from the `microshift-release-info` RPM and pulls them into a custom `/usr/lib/containers/storage` directory. The resulting image list file is saved at `/usr/lib/containers/storage/image-list.txt`.
1.  Next, you must copy container images from the custom directory to the main container storage directory so that they are available to {{ microshift_short }}. Add a script and a systemd service to your Containerfile to copy the embedded images from the `/usr/lib/containers/storage` directory to the local container storage. Copying happens at runtime before each {{ microshift_short }} start. Use the following example:
    ```text
    RUN cat > /usr/bin/microshift-copy-images <<EOF
    #!/bin/bash
    set -eux -o pipefail
    while IFS="," read -r img sha ; do
        skopeo copy --preserve-digests \
            "dir:${IMAGE_STORAGE_DIR}/\${sha}" \
            "containers-storage:\${img}"
    done < "${IMAGE_LIST_FILE}"
    EOF

    RUN chmod 755 /usr/bin/microshift-copy-images && \
        mkdir -p /usr/lib/systemd/system/microshift.service.d

    RUN cat > /usr/lib/systemd/system/microshift.service.d/microshift-copy-images.conf <<EOF
    [Service]
    ExecStartPre=/usr/bin/microshift-copy-images
    EOF
    ```

**Next steps**

1.  Build the image.
1.  Test and deploy per your use case.