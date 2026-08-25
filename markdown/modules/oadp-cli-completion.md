{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable shell completion for the OADP CLI {id="oadp-cli-completion_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to generate and install shell completion scripts for command auto-completion. {._abstract}

**Prerequisites**

*   The {{ oadp_short }} CLI plugin is installed.

**Procedure**

*   Choose one of the following methods to enable shell completion:
    *   To install shell completions automatically for your current shell, use the following command:
        ```terminal
        $ oc oadp completion install [flags]
        ```

        **Flags for the `oc oadp completion install` command**

        | Flag | Description |
        | --- | --- |
        | `--shell` | The shell type to install completions for. Supported values are `bash`, `zsh`, and `fish`. If this flag is not specified, the current shell is auto-detected. |

        ```terminal title="Example of installing completions for zsh"
        $ oc oadp completion install --shell zsh
        ```
    *   To generate a completion script for your shell without installing it, use the following command:
        ```terminal
        $ oc oadp completion <shell_name>
        ```

        where:

        `<shell_name>`
        :   Specifies the name of your shell. Supported values are `bash`, `zsh`, `fish`, and `powershell`.
        You can redirect the output to a file or source it directly.
        ```terminal title="Example of writing a bash completion script"
        $ oc oadp completion bash > /etc/bash_completion.d/oc-oadp
        ```