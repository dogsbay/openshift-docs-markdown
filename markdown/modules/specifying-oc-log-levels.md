{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying OpenShift CLI (`oc`) log levels {id="specifying-oc-log-levels_{{ context }}"}

You can investigate OpenShift CLI (`oc`) issues by increasing the command’s log level. {._abstract}

The {{ product_title }} user’s current session token is typically included in logged `curl` requests where required. You can also obtain the current user’s session token manually, for use when testing aspects of an `oc` command’s underlying process step-by-step.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

*   Specify the `oc` log level when running an `oc` command:
    ```terminal
    $ oc <command> --loglevel <log_level>
    ```

    where:

    &lt;command>
    :   Specifies the command you are running.

    &lt;log_level>
    :   Specifies the log level to apply to the command.
*   To obtain the current user’s session token, run the following command:
    ```terminal
    $ oc whoami -t
    ```
    ```text title="Example output"
    sha256~RCV3Qcn7H-OEfqCGVI0CvnZ6...
    ```