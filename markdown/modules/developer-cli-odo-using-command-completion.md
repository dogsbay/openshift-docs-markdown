{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using command completion {id="using-command-completion_{{ context }}"}


:::note

Currently command completion is only supported for bash, zsh, and fish shells.

:::


{{ odo_title }} provides a smart completion of command parameters based on user input. For this to work, {{ odo_title }} needs to integrate with the executing shell.

**Procedure**

*   To install command completion automatically:
    1.  Run:
        ```terminal
        $ odo --complete
        ```
    1.  Press `y` when prompted to install the completion hook.
*   To install the completion hook manually, add `complete -o nospace -C <full_path_to_your_odo_binary> odo` to your shell configuration file. After any modification to your shell configuration file, restart your shell.
*   To disable completion:
    1.  Run:
        ```terminal
        $ odo --uncomplete
        ```
    1.  Press `y` when prompted to uninstall the completion hook.


    :::note

    Re-enable command completion if you either rename the {{ odo_title }} executable or move it to a different directory.
    
    :::