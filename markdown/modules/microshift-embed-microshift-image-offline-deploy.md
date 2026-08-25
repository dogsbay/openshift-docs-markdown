{%- set _mod_docs_content_type = "PROCEDURE" %}
# Embed {{ microshift_short }} containers for offline deployments {id="microshift-embed-microshift-image-offline-deployment_{{ context }}"}

You can use image builder to create {{ op_system_ostree }} images with embedded {{ microshift_short }} container images. To embed container images, you must add the image references to your image builder blueprint file. {._abstract}

{% leveloffset 1 %}{% include "./snippets/microshift-power-loss-embed-images.md" %}{% endleveloffset %}

{% leveloffset 1 %}{% include "./snippets/microshift-rhel10-bootc-not-osbuild.md" %}{% endleveloffset %}

**Prerequisites**

*   You have root-user access to your build host.
*   Your build host meets the image builder system requirements.
*   You installed and set up image builder and the `composer-cli` tool.
*   You created a {{ op_system_ostree }} image blueprint.
*   You installed jq.

**Procedure**

1.  Get the exact list of container image references used by the {{ microshift_short }} version you are deploying. You can either install the `microshift-release-info` RPM package by following step 2 or download and unpack the RPM by following step 3.
1.  To install the `microshift-release-info` RPM package:
    1.  Install the `microshift-release-info` RPM package by running the following command:
        ```terminal
        $ sudo dnf install -y microshift-release-info-_<release_version>_
        ```

        Replace `_<release_version>_` with the numerical value of the release you are deploying, using the entire version number, such as `4.22.0`.
    1.  List the contents of the `/usr/share/microshift/release` directory to verify the presence of the release information files by running the following command:
        ```terminal
        $ sudo ls /usr/share/microshift/release
        ```
        ```terminal title="Example output"
        release-x86_64.json
        release-aarch64.json
        ```

        If you installed the `microshift-release-info` RPM, proceed to step 4.
1.  If you did not complete step 2, download and unpack the `microshift-release-info` RPM without installing it:
    1.  Download the RPM package by running the following command:
        ```terminal
        $ sudo dnf download microshift-release-info-_<release_version>_
        ```

        Replace `_<release_version>_` with the numerical value of the release you are deploying, using the entire version number, such as `4.22.0`.
        ```terminal title="Example RPM output"
        microshift-release-info-4.22.0.-202605191402.p0.g4f61957.assembly.rc.4.el9.noarch.rpm
        ```
    1.  Unpack the RPM package without installing it by running the following command:
        ```terminal
        $ rpm2cpio _<my_microshift_release_info>_ | cpio -idmv
        ./usr/share/microshift/release/release-aarch64.json
        ./usr/share/microshift/release/release-x86_64.json
        ```

        Replace `_<my_microshift_release_info>_` with the name of the RPM package from the previous step.
1.  Define the location of your JSON file, which contains the container reference information, by running the following command:
    ```terminal
    $ RELEASE_FILE=_</path/to/your/release-$(uname -m).json>_
    ```

    Replace `_</path/to/your/release-$(uname -m).json>_` with the full path to your JSON file. Be sure to use the file needed for your architecture.
1.  Define the location of your TOML file, which contains instructions for building the image, by running the following command:
    ```terminal
    $ BLUEPRINT_FILE=_</path/to/your/blueprint.toml>_
    ```

    Replace `_</path/to/your/blueprint.toml>_` with the full path to your TOML file.
1.  Generate and then embed the container image references in your blueprint TOML file by running the following command:
    ```terminal
    $  jq -r '.images | .[] | ("[[containers]]\nsource = \"" + . + "\"\n")' "${RELEASE_FILE}" >> "${BLUEPRINT_FILE}"
    ```
    ```terminal title="Example resulting TOML fragment showing container references"
    [[containers]]
    source = "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:82cfef91557f9a70cff5a90accba45841a37524e9b93f98a97b20f6b2b69e5db"

    [[containers]]
    source = "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:82cfef91557f9a70cff5a90accba45841a37524e9b93f98a97b20f6b2b69e5db"
    ```
1.  You can manually embed any container image by adding it to an image builder blueprint file using the following example:
    ```text title="Example section for manually embedding container image to a blueprint"
    [[containers]]
    source = "_<my_image_pullspec_with_tag_or_digest>_"
    ```

    Replace `_<my_image_pullspec_with_tag_or_digest>_` with the exact reference to a container image used by the {{ microshift_short }} version you are deploying.