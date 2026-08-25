{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the blueprint to image builder and build the ISO {id="microshift-add-blueprint-build-iso_{{ context }}"}

You must add the blueprint to an image builder to build the ISO. {._abstract}

**Procedure**

1.  Add the blueprint to the image builder by running the following command:
    ```terminal
    $ sudo composer-cli blueprints push microshift-installer.toml
    ```
1.  Start the `ostree` ISO build by running the following command:
    ```terminal
    $ BUILDID=$(sudo composer-cli compose start-ostree --url http://localhost:8085/repo/ --ref "rhel/{{ op_system_version_major }}/$(uname -m)/edge" microshift-installer edge-installer | awk '{print $2}')
    ```

    This command also returns the identification (ID) of the build for monitoring.
1.  You can check the status of the build periodically by running the following command:
    ```terminal
    $ sudo composer-cli compose status
    ```
    ```terminal title="Example output for a running build"
    ID                                     Status     Time                      Blueprint              Version   Type               Size
    c793c24f-ca2c-4c79-b5b7-ba36f5078e8d   RUNNING    Wed Jun 7 13:22:20 2023   microshift-installer   0.0.0     edge-installer
    ```
    ```terminal title="Example output for a completed build"
    ID                                     Status     Time                      Blueprint              Version   Type               Size
    c793c24f-ca2c-4c79-b5b7-ba36f5078e8d   FINISHED   Wed Jun 7 13:34:49 2023   microshift-installer   0.0.0     edge-installer
    ```