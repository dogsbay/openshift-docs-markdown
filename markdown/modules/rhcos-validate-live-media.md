{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validating {{ op_system }} live media {id="rhcos-validate-live-media_{{ context }}"}

For user-provisioned infrastructure installations, you can access information and use the {{ product_title }} installer to indirectly validate {{ op_system }} bootimage artifacts using their SHA-256 checksums. {._abstract}

The {{ product_title }} installation program contains pinned versions of {{ op_system }} bootimages. Fully automated installations use these pinned artifacts by default. The mirror registry where you downloaded the installation program contains a `sha256sum` encrypted with the Red&#160;Hat product key.

**Procedure**

*   Run the following command to print the metadata for any bootimage artifact:
    ```terminal
    $ openshift-install coreos print-stream-json | jq <bootimage>
    ```

    where:

    `<bootimage>`: Specifies the query for the bootimage you want to obtain information on. For validation purposes, the bootimage artifact must have a generated `sha256sum`. This can include OVA, VHD, QCOW2, and others. For example, to get information on an `x86_64` architecture `iso` file for bare metal platforms, use `.architectures.x86_64.artifacts.metal.formats.iso`.
    ```text title="Example output"
    {
      "disk": {
        "location": "<url>/art/storage/prod/streams/<release>/builds/rhcos-<release>-live.<architecture>.<artifact>",
        "sha256": "abc2add9746eb7be82e6919ec13aad8e9eae8cf073d8da6126d7c95ea0dee962"
      }
    }
    ```