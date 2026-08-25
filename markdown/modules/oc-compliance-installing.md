{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the oc-compliance plugin {id="installing-oc-compliance_{{ context }}"}

You can install the `oc-compliance` plugin to simplify compliance operations from the command line. {._abstract}

**Procedure**

*   Extract the `oc-compliance` image to get the `oc-compliance` binary:
    ```terminal
    $ podman run --rm -v ~/.local/bin:/mnt/out:Z registry.redhat.io/compliance/oc-compliance-rhel8:stable /bin/cp /usr/bin/oc-compliance /mnt/out/
    ```
    ```terminal title="Example output"
    W0611 20:35:46.486903   11354 manifest.go:440] Chose linux/amd64 manifest from the manifest list.
    ```

    You can now run `oc-compliance`.