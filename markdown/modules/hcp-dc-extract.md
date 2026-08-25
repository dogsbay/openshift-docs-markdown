{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extracting the release image digest {id="hcp-dc-extract_{{ context }}"}

To deploy {{ hcp }} on bare metal in a disconnected environment, you need the {{ product_title }} release image. You can extract the release image digest by using the tagged image. {._abstract}

**Procedure**

*   Obtain the image digest by running the following command:
    ```terminal
    $ oc adm release info <tagged_openshift_release_image> | grep "Pull From"
    ```

    Replace `<tagged_openshift_release_image>` with the tagged image for the supported {{ product_title }} version, for example, `quay.io/openshift-release-dev/ocp-release:4.14.0-x8_64`.
    ```terminal title="Example output"
    Pull From: quay.io/openshift-release-dev/ocp-release@sha256:69d1292f64a2b67227c5592c1a7d499c7d00376e498634ff8e1946bc9ccdddfe
    ```