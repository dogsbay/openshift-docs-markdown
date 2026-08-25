{%- set _mod_docs_content_type = "PROCEDURE" %}
# Copying files to and from containers {id="nodes-containers-copying-files-procedure_{{ context }}"}

You can use the `oc rsync` command for copying local files to or from a container. {._abstract}

**Prerequisites**

*   rsync must be installed. The `oc rsync` command uses the local `rsync` tool, if present on the client
machine and the remote container.

    If `rsync` is not found locally or in the remote container, a **tar** archive
    is created locally and sent to the container where the **tar** utility is used to
    extract the files. If **tar** is not available in the remote container, the
    copy will fail.

    The **tar** copy method does not provide the same functionality as `oc rsync`. For
    example, `oc rsync` creates the destination directory if it does not exist and
    only sends files that are different between the source and the destination.

    :::note

    In Windows, the `cwRsync` client should be installed and added to the PATH for
    use with the `oc rsync` command.
    
    :::


**Procedure**

*   To copy a local directory to a pod directory:
    ```terminal
    $ oc rsync <local-dir> <pod-name>:/<remote-dir> -c <container-name>
    ```

    For example:
    ```terminal
    $ oc rsync /home/user/source devpod1234:/src -c user-container
    ```
*   To copy a pod directory to a local directory:
    ```terminal
    $ oc rsync devpod1234:/src /home/user/source
    ```
    ```terminal title="Example output"
    $ oc rsync devpod1234:/src/status.txt /home/user/
    ```