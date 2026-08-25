{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling during cluster creation by using the interactive mode with the ROSA CLI {id="rosa-enable-cluster-autoscale-cli-interactive_{{ context }}"}

You can use the {{ rosa_cli_first }} in interactive mode of your terminal, if available, to set cluster-wide autoscaling behavior during cluster creation.

Interactive mode provides more information about available configurable parameters. Interactive mode also does basic checks and preflight validations, meaning that if a provided value is invalid, the terminal outputs a prompt for a valid input.

**Procedure**

*   During cluster creation, use the `--enable-autoscaling` and `--interactive` parameters to enable cluster autoscaling:
    ```terminal title="Example"
    $ rosa create cluster --cluster-name <cluster_name> --enable-autoscaling --interactive
    ```
{% include "./snippets/rosa-long-cluster-name.md" %}

When the following prompt appears, enter **y** to go through all available autoscaling options.

```terminal title="Example interactive prompt"
? Configure cluster-autoscaler (optional): [? for help] (y/N) y <enter>
```