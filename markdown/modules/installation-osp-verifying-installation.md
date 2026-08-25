{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying a successful installation {id="installation-osp-verifying-installation_{{ context }}"}

Verify that the {{ product_title }} installation is complete. {._abstract}

**Prerequisites**

*   You have the installation program (`openshift-install`)

**Procedure**

*   On a command line, enter:
    ```terminal
    $ openshift-install --log-level debug wait-for install-complete
    ```

    The program outputs the console URL, as well as the administrator’s login information.