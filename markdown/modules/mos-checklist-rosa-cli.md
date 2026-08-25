{%- set _mod_docs_content_type = "PROCEDURE" %}
# {{ rosa_cli_first }} {id="mos-checklist-_{{ context }}"}

Install the {{ rosa_cli }} on in your local environment. {._abstract}

**Procedure**

1.  Install the {{ rosa_cli }} from the [web console](https://console.redhat.com/openshift/downloads#tool-rosa).
1.  Log in to your Red&#160;Hat account by running `rosa login` and following the instructions in the command output:
    ```terminal
    $ rosa login
    To login to your Red{nbsp}Hat account, get an offline access token at https://console.redhat.com/openshift/token/rosa
    ? Copy the token and paste it here:
    ```

    Alternatively, you can copy the full `$ rosa login --token=abc...` command and paste that in the terminal:
    ```terminal
    $ rosa login --token=<abc..>
    ```
1.  Confirm you are logged in using the correct account and credentials:
    ```terminal
    $ rosa whoami
    ```