{%- set _mod_docs_content_type = "PROCEDURE" %}
# Remove manifests for RPM systems {id="microshift-manifests-removal-scenario-rpm_{{ context }}"}

To remove a resource on RPM-based {{ microshift_short }} systems, move the manifest into a `delete` subdirectory and restart {{ microshift_short }} so the resource is deleted. {._abstract}

**Procedure**

1.  Identify the manifest that needs to be placed in the `delete` subdirectories.
1.  Create the `delete` subdirectory in which the manifest will be placed by running the following command:
    ```terminal
    $ sudo mkdir -p _<path_of_delete_directory>_
    ```

    Replace `_<path_of_delete_directory>_` with one of the following valid directory paths: `/etc/microshift/manifests.d/delete`, `/etc/microshift/manifests/delete/`, `/usr/lib/microshift/manifests.d/delete`, or `/usr/lib/microshift/manifests/delete`.
1.  Move the manifest file into one of the `delete` subdirectories under the configured manifests directory by running the following command:
    ```terminal
    $ [sudo] mv _<path_of_manifests>_ _<path_of_delete_directory>_
    ```

    where:

    `_<path_of_manifests>_`
    :   Specifies the path of the manifest to be deleted, for example `/etc/microshift/manifests.d/010-SOME-MANIFEST`.

    `_<path_of_delete_directory>_`
    :   Specifies one of the following valid directory paths: `/etc/microshift/manifests.d/delete`, `/etc/microshift/manifests/delete`, `/usr/lib/microshift/manifests.d/delete` or `/usr/lib/microshift/manifests/delete`.
    1.  Restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```
    1.  {{ microshift_short }} detects and removes the resource after the manifest file is placed in the `delete` subdirectories.