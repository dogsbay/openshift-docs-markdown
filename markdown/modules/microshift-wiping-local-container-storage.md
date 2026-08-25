{%- set _mod_docs_content_type = "PROCEDURE" %}
# Wipe local container storage clean {id="microshift-wiping-local-container-storage_{{ context }}"}

To ensure that container images with sigstore signatures are correctly downloaded and verified, you must clear existing local storage. Removing previous container data prevents configuration conflicts when you update security policies for {{ microshift_short }}. {._abstract}

**Prerequisites**

*   You have administrator access to the {{ microshift_short }} host.
*   You enabled sigstore on your mirror registries.

**Procedure**

1.  Stop the CRI-O container runtime service and {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl stop crio microshift
    ```
1.  Wipe the CRI-O container runtime storage clean by running the following command:
    ```terminal
    $ sudo crio wipe --force
    ```
1.  Restart the CRI-O container runtime service and {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl start crio microshift
    ```

**Verification**

Verify that all pods are running in a healthy state by entering the following command:

{% leveloffset +2 %}{% include "./snippets/microshift-healthy-pods-snip.md" %}{% endleveloffset %}