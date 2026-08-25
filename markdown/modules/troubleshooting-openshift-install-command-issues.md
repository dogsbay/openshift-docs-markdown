{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshooting openshift-install command issues {id="troubleshooting-openshift-install-command-issues_{{ context }}"}

If you experience issues running the `openshift-install` command, check the following: {._abstract}

*   The installation has been initiated within 24 hours of Ignition configuration file creation. The Ignition files are created when the following command is run:
    ```terminal
    $ ./openshift-install create ignition-configs --dir=./install_dir
    ```
*   The `install-config.yaml` file is in the same directory as the installer. If an alternative installation path is declared by using the `./openshift-install --dir` option, verify that the `install-config.yaml` file exists within that directory.