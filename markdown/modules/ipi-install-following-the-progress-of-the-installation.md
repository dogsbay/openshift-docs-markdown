{%- set _mod_docs_content_type = "PROCEDURE" %}
# Following the progress of the installation {id="ipi-install-following-the-progress-of-the-installation_{{ context }}"}

During the deployment process, you can check the installation’s overall status by issuing the `tail` command to the `.openshift_install.log` log file in the install directory folder. {._abstract}

**Procedure**

*   Track installation progress by running the following command:
    ```terminal
    $ tail -f /path/to/install-dir/.openshift_install.log
    ```