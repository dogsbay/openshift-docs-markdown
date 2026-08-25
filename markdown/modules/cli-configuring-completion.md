{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling tab completion for Bash {id="cli-enabling-tab-completion_{{ context }}"}

After you install the OpenShift CLI (`oc`), you can enable tab completion to automatically complete `oc` commands or suggest options when you press Tab. The following procedure enables tab completion for the Bash shell. {._abstract}

**Prerequisites**

*   You must have the OpenShift CLI (`oc`) installed.
*   You must have the package `bash-completion` installed.

**Procedure**

1.  Save the Bash completion code to a file:
    ```terminal
    $ oc completion bash > oc_bash_completion
    ```
1.  Copy the file to `/etc/bash_completion.d/`:
    ```terminal
    $ sudo cp oc_bash_completion /etc/bash_completion.d/
    ```

    You can also save the file to a local directory and source it from your `.bashrc` file instead. Tab completion is enabled when you open a new terminal.