{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the supported architecture for an Agent-based installation {id="agent-install-verifying-architectures_{{ context }}"}

Before installing an {{ product_title }} cluster using the Agent-based Installer, you can optionally verify the supported architecture on which you can install the cluster. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You have downloaded the installation program.

**Procedure**

1.  Log in to the {{ oc_first }}.
1.  Check your release payload by running the following command:
    ```terminal
    $ ./openshift-install version
    ```
    ```terminal title="Example output"
    ./openshift-install 4.22.0
    built from commit abc123def456
    release image quay.io/openshift-release-dev/ocp-release@sha256:123abc456def789ghi012jkl345mno678pqr901stu234vwx567yz0
    release architecture amd64
    ```

    If you are using the release image with the `multi` payload, the `release architecture` displayed in the output of this command is the default architecture.
1.  To check the architecture of the payload, run the following command:
    ```terminal
    $ oc adm release info <release_image> -o jsonpath="{ .metadata.metadata}"
    ```

    Replace `<release_image>` with the release image. For example: `quay.io/openshift-release-dev/ocp-release@sha256:123abc456def789ghi012jkl345mno678pqr901stu234vwx567yz0`.
    ```terminal title="Example output when the release image uses the multi payload"
    {"release.openshift.io architecture":"multi"}
    ```

    If you are using the release image with the `multi` payload, you can install the cluster on different architectures such as `arm64`, `amd64`, `s390x`, and `ppc64le`. Otherwise, you can install the cluster only on the `release architecture` displayed in the output of the `openshift-install version` command.