{%- set _mod_docs_content_type = "PROCEDURE" %}
# Writing CLI plugins {id="cli-writing-plugins_{{ context }}"}

You can write a plugin for the {{ oc_first }} in any programming language or script that allows you to write command-line commands. Note that you cannot use a plugin to overwrite an existing `oc` command. {._abstract}

This procedure creates a simple Bash plugin that prints a message to the terminal when the `oc foo` command is issued.

**Procedure**

1.  Create a file called `oc-foo`.

    When naming your plugin file, keep the following in mind:
    *   The file must begin with `oc-` or `kubectl-` to be recognized as a
    plugin.
    *   The file name determines the command that invokes the plugin. For example, a plugin with the file name `oc-foo-bar` can be invoked by a command of `oc foo bar`. You can also use underscores if you want the command to contain dashes. For example, a plugin with the file name `oc-foo_bar` can be invoked by a command of `oc foo-bar`.
1.  Add the following contents to the file.
    ```bash
    #!/bin/bash

    # optional argument handling
    if [[ "$1" == "version" ]]
    then
        echo "1.0.0"
        exit 0
    fi

    # optional argument handling
    if [[ "$1" == "config" ]]
    then
        echo $KUBECONFIG
        exit 0
    fi

    echo "I am a plugin named kubectl-foo"
    ```

    After you install this plugin for the {{ oc_first }}, you can invoke it by using the `oc foo` command.

**Additional resources**
{._additional-resources}

*   [Sample plugin repository](https://github.com/kubernetes/sample-cli-plugin)
*   [CLI runtime repository](https://github.com/kubernetes/cli-runtime/)