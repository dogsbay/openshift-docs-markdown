{%- set _mod_docs_content_type = "PROCEDURE" %}
# Check the version using the command-line interface {id="microshift-version-cli_{{ context }}"}

To begin troubleshooting, you must know your {{ microshift_short }} version. One way to get this information is by using the command-line interface (CLI). {._abstract}

**Procedure**

*   Check the version information by running the following command:
    ```terminal
    $ microshift version
    ```
    ```terminal title="Example output"
    {{ microshift_short }} Version: {{ product_version }}-0.microshift-e6980e25
    Base OCP Version: {{ product_version }}
    ```