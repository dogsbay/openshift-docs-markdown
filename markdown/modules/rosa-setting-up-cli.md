{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the {{ rosa_cli }} {id="rosa-setting-up-cli_{{ context }}"}

Put the {{ rosa_cli_first }} on the computer you use to run cluster commands. {._abstract}

**Procedure**

1.  Install and configure the latest AWS CLI (`aws`).
    1.  Follow the [AWS Command Line Interface](https://aws.amazon.com/cli/) documentation to install and configure the AWS CLI for your operating system.

        Put `aws_access_key_id`, `aws_secret_access_key`, and `region` in the `.aws/credentials` file. See [AWS Configuration basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) in the AWS documentation.

        :::note

        You can optionally use the `AWS_DEFAULT_REGION` environment variable to set the default AWS region.
        
        :::

    1.  Query the AWS API to verify if the AWS CLI is installed and configured correctly:
        ```terminal
        $ aws sts get-caller-identity  --output text
        ```
        ```terminal title="Example output"
        <aws_account_id>    arn:aws:iam::<aws_account_id>:user/<username>  <aws_user_id>
        ```
1.  Download the latest version of the {{ rosa_cli_first }} for your operating system from the [**Downloads**](https://console.redhat.com/openshift/downloads) page on {{ cluster_manager }}.
1.  Extract the `rosa` binary file from the downloaded archive. The following example extracts the binary from a Linux tar archive:
    ```terminal
    $ tar xvf rosa-linux.tar.gz
    ```
1.  Add `rosa` to your path. In the following example, the `/usr/local/bin` directory is included in the path of the user:
    ```terminal
    $ sudo mv rosa /usr/local/bin/rosa
    ```
1.  Verify if the {{ rosa_cli }} is installed correctly by querying the `rosa` version:
    ```terminal
    $ rosa version
    ```
    ```terminal title="Example output"
    1.2.15
    Your {{ rosa_cli }} is up to date.
    ```
1.  Optional: Turn on tab completion for the {{ rosa_cli }}. Press `Tab` twice to finish subcommands or see hints:
    *   To enable persistent tab completion for Bash on a Linux host:
        1.  Generate a `rosa` tab completion configuration file for Bash and save it to your `/etc/bash_completion.d/` directory:
            ```terminal
            # rosa completion bash > /etc/bash_completion.d/rosa
            ```
        1.  Open a new terminal to activate the configuration.
    *   To enable persistent tab completion for Bash on a macOS host:
        1.  Generate a `rosa` tab completion configuration file for Bash and save it to your `/usr/local/etc/bash_completion.d/` directory:
            ```terminal
            $ rosa completion bash > /usr/local/etc/bash_completion.d/rosa
            ```
        1.  Open a new terminal to activate the configuration.
    *   To enable persistent tab completion for Zsh:
        1.  If tab completion is not enabled for your Zsh environment, enable it by running the following command:
            ```terminal
            $ echo "autoload -U compinit; compinit" >> ~/.zshrc
            ```
        1.  Generate a `rosa` tab completion configuration file for Zsh and save it to the first directory in your functions path:
            ```terminal
            $ rosa completion zsh > "${fpath[1]}/_rosa"
            ```
        1.  Open a new terminal to activate the configuration.
    *   To enable persistent tab completion for fish:
        1.  Generate a `rosa` tab completion configuration file for fish and save it to your `~/.config/fish/completions/` directory:
            ```terminal
            $ rosa completion fish > ~/.config/fish/completions/rosa.fish
            ```
        1.  Open a new terminal to activate the configuration.
    *   To enable persistent tab completion for PowerShell:
        1.  Generate a `rosa` tab completion configuration file for PowerShell and save it to a file named `rosa.ps1`:
            ```terminal
            PS> rosa completion powershell | Out-String | Invoke-Expression
            ```
        1.  Source the `rosa.ps1` file from your PowerShell profile.

    :::note

    For more information about configuring `rosa` tab completion, see the help menu by running the `rosa completion --help` command.
    
    :::